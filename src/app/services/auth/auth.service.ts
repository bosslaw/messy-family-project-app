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

  signup(postData: any) {
    return new Promise((resolve, reject) => {
      return this.httpService.post('signup', postData).then((data: any) => {
        resolve(data);
      }, error=> {
        reject(error);
      });
    });
  }

  login(postData: any) {

    return new Promise((resolve, reject) => {
      return this.httpService.post('login', postData).then((data: any) => {
        resolve(data);
      }, error=> {
        reject(error);
      });
    });
    
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
