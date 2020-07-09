import { Component, OnInit } from '@angular/core';
import { AuthConstants } from 'src/app/config/auth-constants';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {

  user: any;

  constructor(
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    this.storageService.get(AuthConstants.AUTH).then((res: any) => {
      this.user = res;
      console.log(this.user);
    });
  }

}
