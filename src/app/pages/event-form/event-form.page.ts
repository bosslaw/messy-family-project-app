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
    description: '',
    start_date: new Date().toISOString(),
    end_date: new Date().toISOString(),
    location: '',
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
    this.event.start_date = this.preselectedDate;
    this.event.end_date = this.preselectedDate;
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  addEvent() {
    this.modalCtrl.dismiss(this.event);
  }

}
