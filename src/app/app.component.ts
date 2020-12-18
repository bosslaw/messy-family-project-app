import { Component, ElementRef, ViewChild } from '@angular/core';
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
  public routerHidden = true;
  @ViewChild('splash') splash: ElementRef;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {

    this.appPages = [
      {
        title: 'Marriage Toolkit',
        url: '/home/interest-list/20'
      },
      {
        title: 'Parenting Corner',
        url: '/home/interest-list/21'
      },
      {
        title: 'Family Cultre',
        url: '/home/interest-list/102',
      },
      {
        title: 'Prayer Resources',
        url: '/home/interest-list/68'
      },
      {
        title: 'Messy Family Neighborhood',
        url: '/home/interest-list/20',
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

      setTimeout(() => {
        this.routerHidden = false;
        this.splash.nativeElement.style.display = 'none';
      }, 3000);
    });
  }
}
