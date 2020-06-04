import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  date: string;
  type: 'string';
  dateRange: { from: string; to: string; };

  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi'
  };

  optionsRange: CalendarComponentOptions = {
    pickMode: 'range'
  };

  constructor() { }

  ngOnInit() {
  }

  onChange($event) {
    console.log($event);
  }

}
