import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  constructor(
    private httpService: HttpService
  ) { }

  addMember(memberData: any): Observable<any> {
    return this.httpService.post('family-members', memberData);
  }

  getMembers(uid: number): Observable<any> {
    return this.httpService.get('family-members/'+uid);
  }

}
