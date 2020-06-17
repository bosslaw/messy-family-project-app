import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthConstants } from '../../config/auth-constants';
import { HttpService } from '../http/http.service';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData$ = new BehaviorSubject<any>('');

  constructor(private httpService: HttpService, private storageService: StorageService, private router: Router) { }

  getUserData() {
    this.storageService.get(AuthConstants.AUTH).then(res => {
      this.userData$.next(res);
    })
  }

  signup(postData: any): Observable<any> {
    return this.httpService.get('signup', postData);
  }

  login(postData: any): Observable<any> {
    return this.httpService.post('login', postData);
  }

  logout() {
    // this.storageService.clear();
    // return this.httpService.post('logout');
    this.storageService.removeItem(AuthConstants.AUTH).then(res => {
      this.userData$.next('');
      this.router.navigate([''])
    })
  }
}
