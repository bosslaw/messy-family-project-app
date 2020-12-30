import { Component, OnInit } from '@angular/core';
import { AuthConstants } from 'src/app/config/auth-constants';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.page.html',
  styleUrls: ['./podcast.page.scss'],
})
export class PodcastPage implements OnInit {
  user: any;
  isLogged = false;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.getUserdata();
  }

  getUserdata() {
    this.storageService.get(AuthConstants.AUTH).then(res => {
      this.user = res;
      if(this.user) {
        this.isLogged = true;
      }
    });
  }

}
