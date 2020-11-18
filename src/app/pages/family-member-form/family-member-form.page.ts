import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { FamilyService } from 'src/app/services/family/family.service';
import { ToastService } from 'src/app/services/toast/toast.service';

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
    last_name: null
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
    private toastService: ToastService
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
    const birthDate = moment(formattedMember.birth_date).format('YYYY-MM-DD 00:00:00')
    formattedMember.birth_date = birthDate;

    if (this.memberData.id) {
      this.familyService.updateMember(this.memberData).subscribe((res: any) => {
        this.toastService.presentToast('Successfully updated member');
        this.dismiss();
      },
      (error: any) => {
      });
    } else {
      delete this.memberData.id;
      this.familyService.addMember(this.memberData).subscribe((res: any) => {
        this.toastService.presentToast('Successfully added member');
        this.dismiss();
      },
      (error: any) => {
      });
    }
  }

}
