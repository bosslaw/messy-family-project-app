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
  devotions = [
    { id: 1, name: 'Praying'},
    { id: 2, name: 'Family Fun'},
    { id: 3, name: 'Date Night'}
  ];
  user: any;

  constructor(
    public modalCtrl: ModalController,
    private checkinService: CheckinService,
    private authService: AuthService
  ) {
    this.form = {
      devotion: 1,
      location: 'Steubeville',
      time: new Date().toISOString()
    };

  }

  ngOnInit() {
    this.authService.userData$.subscribe((res: any) => {
      this.user = res;

      console.log(this.user)
    })
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  newCheckin() {
    console.log(this.form);
    const params = {
      devotion_id: this.form.devotion,
      uid: this.user.Id,
      location,
      time: this.form.time
    }

    this.checkinService.newCheckin(params).subscribe((res: any) => {
      console.log(res);
    },
    (error: any) => {
    });
  }
}
