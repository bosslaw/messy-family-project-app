import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { FamilyService } from 'src/app/services/family/family.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-family-member-form',
  templateUrl: './family-member-form.page.html',
  styleUrls: ['./family-member-form.page.scss'],
})
export class FamilyMemberFormPage implements OnInit {

  public memberData = {
    id: null,
    uid: null,
    rid: null,
    first_name: null,
    birth_date: null,
    last_name: null,

    address_1: '',
    address_2: '',
    city: '',
    state: '',
    country: '',
    gender: '',
    religion: ''
  }

  relationships = [
    {id: 1, name: 'Mother'},
    {id: 2, name: 'Father'},
    {id: 3, name: 'Son'},
    {id: 4, name: 'Daughter'}
  ];

  @Input() uid: string;
  @Input() member: any;

  title = 'Add';

  constructor(
    private modalCtrl: ModalController,
    private familyService: FamilyService,
    private toastService: ToastService,
    private userService: UserService
  ) { }

  ngOnInit() {
    if(this.uid) {
      this.memberData.uid = this.uid;
    }

    if(this.member) {
      this.title = 'Update';
      this.memberData.id = this.member.id;
      this.memberData.uid = this.member.uid;
      this.memberData.rid = Number(this.member.rid);
      this.memberData.first_name = this.member.first_name;
      this.memberData.birth_date = new Date(this.member.birth_date).toISOString();
      this.memberData.last_name = this.member.last_name;

      this.memberData.address_1 = this.member.address_1;
      this.memberData.address_2 = this.member.address_2;
      this.memberData.city = this.member.city;
      this.memberData.state = this.member.state;
      this.memberData.country = this.member.country;
      this.memberData.gender = this.member.gender;
      this.memberData.religion = this.member.religion;

    } else {
      this.memberData.birth_date = new Date();
    }
  }

  parseDate(date) {
    const parts = date.split('-');
    return new Date(parts[0], parts[1]-1, parts[2]);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  saveMember() {
    const formattedMember: any = this.memberData;
    const birthDate = moment(formattedMember.birth_date).format('YYYY-MM-DD 00:00:00');
    formattedMember.birth_date = birthDate;

    if (this.memberData.id) {
      this.familyService.updateMember(this.memberData).then((res: any) => {
        this.toastService.presentToast('Successfully updated member');
        this.dismiss();
      },
      (error: any) => {
      });

      this.userService.updateUser(this.memberData).then((res: any) => {
        // this.toastService.presentToast('Information successfully updated'); 
      },
      (error: any) => {
        this.toastService.presentToast('Network Connection Error');
      })
    } else {
      delete this.memberData.id;
      this.familyService.addMember(this.memberData).then((res: any) => {
        this.toastService.presentToast('Successfully added member');
        this.dismiss();
      },
      (error: any) => {
      });
    }
  }

}
