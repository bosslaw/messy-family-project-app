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
    return this.httpService.post('family-member', memberData);
  }

  updateMember(memberData: any): Observable<any> {
    return this.httpService.post('family-member/' + memberData.id, memberData);
  }

  getMembers(uid: number): Observable<any> {
    return this.httpService.get('family-members/'+uid);
  }

  getMemberDetails(uid: number): Observable<any> {
    return this.httpService.get('family-member-details/'+uid);
  }

  
}
