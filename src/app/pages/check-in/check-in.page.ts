import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CheckinService } from 'src/app/services/checkin/checkin.service';
import { CheckInFormPage } from '../check-in-form/check-in-form.page';
import { Plugins } from '@capacitor/core';
import { MapService } from 'src/app/services/map/map.service';


const { Geolocation } = Plugins;

declare var google;
@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.page.html',
  styleUrls: ['./check-in.page.scss'],
})
export class CheckInPage implements OnInit {

  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  address: string;

  user: any;
  checkins = [];
  intentions = [];
  intentionId = 1;

  latitude: number;
  longitude: number;

  constructor(
    public modalCtrl: ModalController,
    public checkinService: CheckinService,
    public authService: AuthService,
    public mapService: MapService
  ) {
  }

  ngOnInit() {
    this.getUser();
    this.getIntentions();
    this.loadMap();
  }

  loadMap() {
    Geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;

      const latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      const mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.mapService.getAddressFromCoords(this.latitude, this.longitude);


    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  formatTime(time) {
    return moment(time).format('LLLL');
  }

  getUser() {
    this.authService.userData$.subscribe((res: any) => {
      this.user = res;
      if(this.user) this.getCheckins(this.user.Id, this.intentionId);
    })
  }

  async newCheckinModal() {
    const modal = await this.modalCtrl.create({
      component: CheckInFormPage,
      componentProps: {
        latitude: this.latitude,
        longitude: this.longitude
      }
    });
    return await modal.present();
  }

  getCheckins(uid, intentionId) {
    this.checkinService.getCheckins(uid, intentionId).subscribe((res: any) => {
      this.checkins = res;
    },
    (error: any) => {
      console.error(error);
    });
  }

  getIntentions() {
    this.checkinService.getIntentions().subscribe((res: any) => {
      this.intentions = res;
      this.intentionId = res[0].id;
      console.log('intentions', res)
    },
    (error: any) => {
      console.error(error);
    });
  }

  updateFilter() {
    this.getCheckins(this.user.Id, this.intentionId);
  }

}
