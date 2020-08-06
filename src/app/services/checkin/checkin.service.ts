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
}
