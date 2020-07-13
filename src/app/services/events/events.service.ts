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

  addEvent(eventData: any): Observable<any> {
    return this.httpService.post('events', eventData);
  }

  getEvents(): Observable<any> {
    return this.httpService.get('events');
  }

  getLatestEvents(uid): Observable<any> {
    return this.httpService.get('latest-events/'+uid);
  }
}
