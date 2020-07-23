import { Component, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { Calendar } from '@ionic-native/calendar/ngx';
import { ActionSheetController, AlertController, ModalController, Platform } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import * as moment from 'moment';
import { AuthConstants } from 'src/app/config/auth-constants';
import { EventsService } from 'src/app/services/events/events.service';
import { IcalExportService } from 'src/app/services/icalendar/ical-export.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { CalendarImportPage } from '../calendar-import/calendar-import.page';
import { EventDetailsPage } from '../event-details/event-details.page';
import { EventFormPage } from '../event-form/event-form.page';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  collapseCard = true;
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();
  sortedEvents: any;
  displayMode = 'calendar';
  user: any;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
    daysConfig: {
      cssClass: 'iCalendar'
    }
  };

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(
    private alertCtrl: AlertController,
    @Inject(LOCALE_ID) private locale: string,
    private cal: Calendar,
    private actionSheetController: ActionSheetController,
    private modalCtrl: ModalController,
    private icalExportService: IcalExportService,
    private eventService: EventsService,
    private storageService: StorageService,
    private plt: Platform) {

      // this.plt.ready().then(()=> {
      //   this.cal.listCalendars().then(data=> {
      //     console.log(data);
      //   })
      // })
    }

  ngOnInit() {
    this.storageService.get(AuthConstants.AUTH).then(res => {
      this.user = res;
    });
  }

  ionViewWillEnter() {
    this.getEvents();
  }

  getEvents() {
    this.eventService.getEvents().subscribe((res: any) => {
      res.forEach(event => {
        event = this.formatEvent(event);
      })
      this.eventSource = res;
    },
    (error: any) => {})
  }

  formatEvent(event) {
    event.startTime = new Date(event.start_date);
    event.endTime = new Date(event.end_date);

    return event;
  }

  async showCalendarOptions() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Import Event',
          handler: () => {
            this.importExportModal();
          }
        },{
          text: 'Export Event',
          handler: () => {
            this.icalExportService.download();
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      await actionSheet.present();
  }

  getKeys(obj) {
    return Object.keys(obj)
  }

  formatEvents() {
    const finalObj = []
    this.eventSource.forEach((event) => {
      const date = moment(event.startTime).format('DD ddd')
      if (finalObj[date]) {
        finalObj[date].push(event);
      } else {
        finalObj[date] = [event];
      }
    })
    this.sortedEvents = finalObj.sort()
  }

  async calendarViewOptions() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Day',
          handler: () => {
            this.displayMode = 'event';
            this.formatEvents();
          }
        }, {
          text: 'Month',
          handler: () => {
            this.displayMode = 'calendar';
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      await actionSheet.present();
  }

  async importExportModal() {
    const modal = await this.modalCtrl.create({
      component: CalendarImportPage,
      componentProps: {
      }
    });

    modal.onDidDismiss().then((events: any)=> {
      if(events.data) {
        events.data.forEach((event: any) => {
          this.addEvent(event);
        });
      }

    });


    return await modal.present();
  }

  async addEventModal() {
    const modal = await this.modalCtrl.create({
      component: EventFormPage,
      componentProps: {
        preselectedDate:this.selectedDay
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
        this.eventSource.push(this.formatEvent(res.data));
        this.myCal.loadEvents();
      }
    },
    (error: any) => {
    });
  }


  onTimeSelected(ev) {
    this.selectedDay = new Date(ev.selectedTime);
    this.selectedDay.setHours(this.selectedDay.getHours() + 1);
  }

  next() {
    const swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slideNext();
  }

  back() {
    const swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slidePrev();
  }

  changeMode(mode) {
    this.calendar.mode = mode;
  }

  today() {
    this.calendar.currentDate = new Date();
  }

  onViewTitleChanged(title) {
    console.log(title);
    this.viewTitle = title;
  }

  // Calendar event was clicked
  async onEventSelected(event) {

      const modal = await this.modalCtrl.create({
        component: EventDetailsPage,
        componentProps: {
          event
        }
      });

      return await modal.present();
  }

}
