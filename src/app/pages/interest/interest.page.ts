import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { AuthService } from 'src/app/services/auth/auth.service';
import { EventsService } from 'src/app/services/events/events.service';
import { EventFormPage } from '../event-form/event-form.page';
@Component({
  selector: 'app-interest',
  templateUrl: './interest.page.html',
  styleUrls: ['./interest.page.scss'],
})
export class InterestPage implements OnInit {

  currentDay = new Date();
  user: any;

  constructor(
    public modalCtrl: ModalController,
    private authService: AuthService,
    private eventService: EventsService
    ) { }

  ngOnInit() {
  }

  async addEventModal() {
    const modal = await this.modalCtrl.create({
      component: EventFormPage,
      componentProps: {
        preselectedDate:this.currentDay
      }
    });

    modal.onDidDismiss().then((event: any)=> {
      if(event.data) {
        this.addEvent(event.data);
      }
    });

    return await modal.present();
  }

  addEvent(event) {

    const formattedEvent = {
      title: event.title,
      start_date:  moment(event.start_date).format('YYYY-MM-DD hh:mm'),
      end_date: moment(event.end_date).format('YYYY-MM-DD hh:mm'),
      // allDay: event.data.allDay,
      description: event.description,
      location: event.location,
      uid: this.user.Id,
      status: 'Upcoming'
    };

    this.eventService.addEvent(formattedEvent).subscribe((res: any) => {
      if(res.success) {
        // this.loadLatestEvents();
      }
    },
    (error: any) => {
    });
  }

  ionViewWillEnter() {
    this.authService.userData$.subscribe((res: any) => {
      this.user = res;
    })
  }

}
