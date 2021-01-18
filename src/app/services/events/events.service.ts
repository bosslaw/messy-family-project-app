import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(
    private httpService: HttpService
  ) { }

  addEvent(eventData: any) {
    return new Promise((resolve, reject) => {
      return this.httpService.post('events', eventData).then((data: any) => {
        resolve(data);
      }, error=> {
        reject(error);
      });
    });
  }

  updateEvent(eventData) {
    return new Promise((resolve, reject) => {
      return this.httpService.post('events/' + eventData.id, eventData).then((data: any) => {
        resolve(data);
      }, error=> {
        reject(error);
      });
    });
  }

  getEvents(): Observable<any> {
    return this.httpService.get('events');
  }

  getLatestEvents(uid): Observable<any> {
    return this.httpService.get('latest-events/'+uid);
  }
}
