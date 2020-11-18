import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  updateUser(postData: any) {
    return this.httpService.post('updateUser', postData);
  }
}
