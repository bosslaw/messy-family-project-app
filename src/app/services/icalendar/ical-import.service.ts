import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class IcalImportService {

  todoCount = 0;

  constructor() { }

  parse(encodedData) {
    const lines = encodedData.split('\n');
    const formattedEvents = [];
    this.todoCount = 0;
    let eventStarted = false;

    lines.forEach(event => {
        if(event.includes('BEGIN:VEVENT')) {
          eventStarted = true;
          formattedEvents[this.todoCount] = {};
        }
        if(eventStarted) {
          if(event.includes('DTSTART')) {
            const date = event.split(':');
            const timezone = date[0].split('=');
            formattedEvents[this.todoCount].start_date = this.calendarDate(date[1], timezone[1]);
          } else if(event.includes('DTEND')) {
            const date = event.split(':');
            const timezone = date[0].split('=');
            formattedEvents[this.todoCount].end_date = this.calendarDate(date[1], timezone[1]);
          } else if(event.includes('RRULE')) {
            const rule = event.split(':');
            formattedEvents[this.todoCount].rRule = this.iCalendarRule(rule[1]);
          } else if (event.includes('SUMMARY')) {
            const title = event.split(':');
            formattedEvents[this.todoCount].title = title[1];
          }else if (event.includes('LOCATION')) {
            const location = event.split(':');
            location.shift();
            formattedEvents[this.todoCount].location = location.join(':');
          }else if (event.includes('DESCRIPTION')) {
            const matches = event.match(/([^:]+)[:]([\w\W]+)/);
            formattedEvents[this.todoCount].description = decodeURI(matches[2]);
          } else { }
        }

        if(event.includes('END:VEVENT')) {
          eventStarted = false;
          this.todoCount = this.todoCount + 1;
        }
    });

    return formattedEvents;

  }

  iCalendarRule(rule) {
    const rRules = rule.split(';');
    const result = [];
    rRules.forEach(r => {
      const rContent = r.split('=');
      result[rContent[0]] = rContent[1];
    });

    return result;
  }

  calendarDate(iCalStr: any, timezone)  {
    const strYear = iCalStr.substr(0,4);
    const strMonth = iCalStr.substr(4,2);
    const strDay = iCalStr.substr(6,2);
    const strHour = iCalStr.substr(9,2);
    const strMin = iCalStr.substr(11,2);
    const strSec = iCalStr.substr(13,2);
    const strFormat = iCalStr.substr(8,1);

    const oDate = moment(strYear+'-'+strMonth+'-'+strDay+' '+strHour+':'+strMin+':'+strSec, moment.defaultFormat).toDate();
    return oDate;
  }
}
