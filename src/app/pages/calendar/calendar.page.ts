import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { Calendar } from '@ionic-native/calendar/ngx';
import { ActionSheetController, AlertController, ModalController, Platform } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import * as moment from 'moment';
import { IcalExportService } from 'src/app/services/ical-export.service';
import { CalendarImportPage } from '../calendar-import/calendar-import.page';
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
    private plt: Platform) {

      // this.plt.ready().then(()=> {
      //   this.cal.listCalendars().then(data=> {
      //     console.log(data);
      //   })
      // })
    }

  ngOnInit() {

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
            // this.icalExportService.download(this.eventSource);
            const icsString = this.icalExportService.download(this.eventSource);
            console.log(icsString);
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
          const eventCopy = {
            title: event.title,
            startTime:  new Date(event.startTime),
            endTime: new Date(event.endTime),
            // allDay: event.allDay,
            desc: event.desc
          }
          this.eventSource.push(eventCopy);
        });

        this.myCal.loadEvents();
        this.formatEvents();
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
        const eventCopy = {
          title: event.data.title,
          startTime:  new Date(event.data.startTime),
          endTime: new Date(event.data.endTime),
          allDay: event.data.allDay,
          desc: event.data.desc
        }

        if (eventCopy.allDay) {
          const start = eventCopy.startTime;
          const end = eventCopy.endTime;

          eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
          eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
        }

        this.eventSource.push(eventCopy);
        this.myCal.loadEvents();
        console.log(this.eventSource);
      }

    });


    return await modal.present();
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
    console.log(event);
    // Use Angular date pipe for conversion
    const start = formatDate(event.startTime, 'medium', this.locale);
    const end = formatDate(event.endTime, 'medium', this.locale);

    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      message: 'From: ' + start + '<br><br>To: ' + end,
      buttons: ['OK']
    });
    alert.present();
  }

}
