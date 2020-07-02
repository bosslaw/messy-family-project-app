import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public appPages: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {

    this.appPages = [
      {
        title: 'Marriage Toolkit',
        url: ''
      },
      {
        title: 'Parenting Corner',
        url: ''
      },
      {
        title: 'Family Cultre',
        url: '',
      },
      {
        title: 'Prayer Resources',
        url: ''
      },
      {
        title: 'Messy Family Neighborhood',
        url: '',
      },
      // {
      //   title: 'Settings',
      //   url: '/home/settings',
      //   icon: 'settings'
      // },
      // {
      //   title: 'Update Account',
      //   url: '/home/account-edit',
      //   icon: 'pencil-outline'
      // }
    ];

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
