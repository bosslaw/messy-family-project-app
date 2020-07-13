import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { FamilyService } from 'src/app/services/family/family.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-family-member-add',
  templateUrl: './family-member-add.page.html',
  styleUrls: ['./family-member-add.page.scss'],
})
export class FamilyMemberAddPage implements OnInit {

  public memberData = {
    uid: '',
    rid: '',
    first_name: '',
    birth_date: new Date(),
    last_name: ''
  }

  relationships = [
    {id: 1, name: 'Mother'},
    {id: 2, name: 'Father'},
    {id: 3, name: 'Son'},
    {id: 4, name: 'Daughter'}
  ];

  @Input() uid: string;
  constructor(
    private modalCtrl: ModalController,
    private familyService: FamilyService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    if(this.uid) {
      this.memberData.uid = this.uid;
    }
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  saveMember() {
    const formattedMember: any = this.memberData;
    const birthDate = moment(formattedMember.birth_date).format('YYYY-MM-DD hh:mm')
    formattedMember.birth_date = birthDate;

    this.familyService.addMember(this.memberData).subscribe((res: any) => {
      this.toastService.presentToast('Successfully added member');
      this.dismiss();
    },
    (error: any) => {
    });
  }

}
