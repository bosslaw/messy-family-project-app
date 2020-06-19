import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthConstants } from '../config/auth-constants';
import { StorageService } from '../services/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {

  constructor(private storageServices: StorageService, private router: Router) {}

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.storageServices.get(AuthConstants.AUTH).then(res => {
        if(res) {
          resolve(true);
        } else {
          this.router.navigate(['']);
          resolve(false);
        }
      }).catch(err => {
        resolve(false);
      })
    });
  }
}