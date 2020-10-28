import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CheckinService } from 'src/app/services/checkin/checkin.service';

@Component({
  selector: 'app-check-in-form',
  templateUrl: './check-in-form.page.html',
  styleUrls: ['./check-in-form.page.scss'],
})
export class CheckInFormPage implements OnInit {

  form: any;
  devotions = [];
  latitude: any;
  longitude: any;
  // devotions = [
  //   { id: 1, name: 'Praying'},
  //   { id: 2, name: 'Family Fun'},
  //   { id: 3, name: 'Date Night'}
  // ];
  user: any;

  constructor(
    public modalCtrl: ModalController,
    private checkinService: CheckinService,
    private authService: AuthService
  ) {
    this.form = {
      devotion: 1,
      location: '',
      time: new Date().toISOString(),
      uid: null,
      details: ''
    };

    this.getIntentions();

  }

  ngOnInit() {
    this.authService.userData$.subscribe((res: any) => {
      this.user = res;
    })
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  getIntentions() {
    this.checkinService.getIntentions().subscribe((res: any) => {
      this.devotions = res;
      console.log('intentions', res)
    },
    (error: any) => {
      console.error(error);
    });
  }

  newCheckin() {
    const params = {
      devotion_id: this.form.devotion,
      uid: this.user.Id,
      location: this.form.location,
      time: this.form.time,
      latitude: this.latitude,
      longitude: this.longitude,
      details: this.form.details
    }

    this.checkinService.newCheckin(params).subscribe((res: any) => {
      this.dismiss();
    },
    (error: any) => {
      console.error(error);
    });
  }
}
