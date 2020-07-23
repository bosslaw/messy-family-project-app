import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { EventsService } from 'src/app/services/events/events.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { EventFormPage } from '../event-form/event-form.page';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {

  @Input() event: any;

  constructor(
    private modalCtrl: ModalController,
    private eventService: EventsService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  async editEvent() {
    const modal = await this.modalCtrl.create({
      component: EventFormPage,
      componentProps: {
        eventData: this.event
      }
    });

    modal.onDidDismiss().then((event: any)=> {
      if(event.data) {
        this.updateEvent(event.data);
      }
    });

    return await modal.present();
  }

  updateEvent(event) {
    const formattedEvent = {
      title: event.title,
      start_date:  moment(event.start_date).format('YYYY-MM-DD hh:mm'),
      end_date: moment(event.end_date).format('YYYY-MM-DD hh:mm'),
      // allDay: event.data.allDay,
      description: event.description,
      location: event.location,
      id: event.id
    };

    this.eventService.updateEvent(formattedEvent).subscribe((res: any) => {
      this.event.title = event.title;
      this.event.start_date = new Date(event.start_date);
      this.event.end_date = new Date(event.end_date);
      this.event.description = event.description;
      this.event.location = event.location;

      this.toastService.presentToast('Successfully updated event');
    },
    (error: any) => {
    });
  }
}
