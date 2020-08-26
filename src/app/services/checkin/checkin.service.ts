import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {

  constructor(
    private httpService: HttpService
  ) { }

  newCheckin(checkinData: any): Observable<any> {
    return this.httpService.post('checkin', checkinData);
  }

  getCheckins(uid: number): Observable<any> {
    return this.httpService.post('checkin/'+uid, {});
  }

  getIntentions(): Observable<any> {
    return this.httpService.get('intentions');
  }
}
