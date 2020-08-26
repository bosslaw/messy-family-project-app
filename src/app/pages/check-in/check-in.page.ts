import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CheckinService } from 'src/app/services/checkin/checkin.service';
import { CheckInFormPage } from '../check-in-form/check-in-form.page';
@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.page.html',
  styleUrls: ['./check-in.page.scss'],
})
export class CheckInPage implements OnInit {

  user: any;
  checkins = [];
  intentions = [];
  intentionId: any;

  constructor(
    public modalCtrl: ModalController,
    public checkinService: CheckinService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.getUser();
    this.getIntentions();
  }

  formatTime(time) {
    return moment(time).format('LLLL');
  }

  getUser() {
    this.authService.userData$.subscribe((res: any) => {
      this.user = res;
      if(this.user) this.getCheckins(this.user.Id, this.intentionId);
    })
  }

  async newCheckinModal() {
    const modal = await this.modalCtrl.create({
      component: CheckInFormPage,
      componentProps: {
      }
    });
    return await modal.present();
  }

  getCheckins(uid, intentionId) {
    this.checkinService.getCheckins(uid, intentionId).subscribe((res: any) => {
      this.checkins = res;
    },
    (error: any) => {
      console.error(error);
    });
  }

  getIntentions() {
    this.checkinService.getIntentions().subscribe((res: any) => {
      this.intentions = res;
      this.intentionId = res[0].id;
      console.log('intentions', res)
    },
    (error: any) => {
      console.error(error);
    });
  }

}
