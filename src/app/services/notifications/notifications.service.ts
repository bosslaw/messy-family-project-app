import { Injectable } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private localNotifications: LocalNotifications) { }

  notify() {

    this.localNotifications.schedule([{
      id: 1,
      title: 'Messy Family Notification',
      text: 'Upcoming Event',
      icon: ''
   }]);

  }
}
