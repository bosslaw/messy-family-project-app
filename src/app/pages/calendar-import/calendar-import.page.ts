import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IcalImportService } from 'src/app/services/icalendar/ical-import.service';

@Component({
  selector: 'app-calendar-import',
  templateUrl: './calendar-import.page.html',
  styleUrls: ['./calendar-import.page.scss'],
})
export class CalendarImportPage implements OnInit {

  iCalFile: any;
  filename = '';
  type = '';
  base64 = '';
  events = [];
  lastKey: any;
  cal = [];
  eventCount = 0;
  todoCount = 0;

  constructor(
    private modalCtrl: ModalController,
    private iCalImportService: IcalImportService
  ) { }

  ngOnInit() {
  }

  upload($event) {
    const file = $event.target.files[0];

    // this.filename = file.name;
    // this.type = file.type;

    const ref = this;
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;
      ref.base64 = base64.toString();

      const cal = ref.base64.split(',');
      this.events = this.iCalImportService.parse(atob(cal[1]));
      console.log(this.events);
    }

    reader.readAsDataURL(file);
  }

  importEvent() {
    this.modalCtrl.dismiss(this.events);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
