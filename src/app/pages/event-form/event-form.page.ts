import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.page.html',
  styleUrls: ['./event-form.page.scss'],
})
export class EventFormPage implements OnInit {

  event = {
    title: '',
    desc: '',
    startTime: new Date().toISOString(),
    endTime: new Date().toISOString(),
    allDay: false
  };

  minDate = new Date().toISOString();
  preselectedDate: any;

  constructor(
    private modalCtrl: ModalController,
    public navParams: NavParams
  ) {

  }

  ngOnInit() {
    this.preselectedDate = new Date(this.navParams.data.preselectedDate).toISOString();
    this.event.startTime = this.preselectedDate;
    this.event.endTime = this.preselectedDate;
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  addEvent() {
    this.modalCtrl.dismiss(this.event);
  }

}
