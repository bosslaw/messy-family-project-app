import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CheckInFormPage } from '../check-in-form/check-in-form.page';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.page.html',
  styleUrls: ['./check-in.page.scss'],
})
export class CheckInPage implements OnInit {

  constructor(
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  async newCheckinModal() {
    const modal = await this.modalCtrl.create({
      component: CheckInFormPage,
      componentProps: {
      }
    });

    // modal.onDidDismiss().then((events: any)=> {
    //   if(events.data) {
    //     events.data.forEach((event: any) => {
    //       this.addEvent(event);
    //     });
    //   }

    // });


    return await modal.present();
  }

}
