import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.page.html',
  styleUrls: ['./event-form.page.scss'],
})
export class EventFormPage implements OnInit {

  title = 'Add';
  event = {
    id: null,
    title: '',
    description: '',
    start_date: null,
    end_date: null,
    location: '',
    allDay: false
  };

  minDate = new Date().toISOString();
  preselectedDate: any;
  eventData: any;
  eventTitle: any;

  constructor(
    private modalCtrl: ModalController,
    public navParams: NavParams
  ) {

  }

  ngOnInit() {
    if(this.navParams.data.preselectedDate) {
      this.preselectedDate = new Date(this.navParams.data.preselectedDate);


      let curDate = new Date();
      this.preselectedDate.setHours(curDate.getHours());
      this.preselectedDate.setMinutes(curDate.getMinutes());

      this.preselectedDate = this.preselectedDate.toISOString();
      this.event.start_date = this.preselectedDate;
      this.event.end_date = this.preselectedDate;
      this.event.title = this.eventTitle;

    }

    if(this.navParams.data.eventData) {
      console.log(this.eventData);
      this.title = 'Update';
      this.eventData = this.navParams.data.eventData;

      this.event.id = this.eventData.id;
      this.event.title = this.eventData.title;
      this.event.description = this.eventData.description;
      this.event.start_date = new Date(this.eventData.start_date).toISOString();
      this.event.end_date = new Date(this.eventData.end_date).toISOString();
      this.event.location = this.eventData.location;
    }
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  addEvent() {
    this.modalCtrl.dismiss(this.event);
  }

}
