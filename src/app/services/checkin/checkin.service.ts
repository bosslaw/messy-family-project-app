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

  newCheckin(checkinData: any) {
    return new Promise((resolve, reject) => {
      return this.httpService.post('checkin', checkinData).then((data: any) => {
        resolve(data);
      }, error=> {
        reject(error);
      });
    });
  }

  getCheckins(uid: number, intentionId: number) {
    return new Promise((resolve, reject) => {
      return this.httpService.post('checkin/'+uid+'/'+intentionId, {}).then((data: any) => {
        resolve(data);
      }, error=> {
        reject(error);
      });
    });
  }

  getIntentions(): Observable<any> {
    return this.httpService.get('intentions');
  }
}


