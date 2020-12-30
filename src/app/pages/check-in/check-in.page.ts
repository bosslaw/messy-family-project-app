import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CheckinService } from 'src/app/services/checkin/checkin.service';
import { MapService } from 'src/app/services/map/map.service';
import { mapStyle } from 'src/app/shared/map-styles/style';
import { CheckInFormPage } from '../check-in-form/check-in-form.page';
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';

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
    public mapService: MapService,
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.getUser();
    this.loadMap();
  }

  ionViewDidEnter() {
    this.getIntentions();
  }

  async loadMap() {
    console.log('loading map async and cool')

    
    await Geolocation.getCurrentPosition({enableHighAccuracy: true, timeout: 5000, maximumAge: 0}).then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;


      const POSITION = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      

    //   this.getAddress(resp.coords.latitude, resp.coords.longitude).subscribe(decodedAddress => {
    //     this.address = decodedAddress;
    //     console.log('my address +>', this.address);
    //   });

      const mapOptions = {
        zoom: 11,
        center: POSITION,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: false,
        styles: mapStyle,
        fullscreenControl: false
      };

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      

      const icon = {
        url: '/assets/icon/pin2.png',
        // size: {
        //   width: 50,
        //   height: 80.9
        // }
      };

      const config = {
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.map.getCenter(),
        icon
      };

      const content = '<p>This is your current position !</p>';
      const marker = this.addMarker(config);
      this.addInforWindow(marker, content);
      this.mapService.getAddressFromCoords(this.latitude, this.longitude);


    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  private getAddress (lat: number, lan: number) {
    return this.http
    .get<any>(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lan}&key=AIzaSyBv2VBkwTC8ywTDyU7RA-rY7ZX_CjfeR4I`
    )
    .pipe(
      map((geoData: any) => {
        if (!geoData || !geoData.results || geoData.results === 0) {
          return null;
        }
        return geoData.results[0].formatted_address;
      })
    );
  }

  addMarker(config) {
    return new google.maps.Marker(config);
  }

  addInforWindow(marker, content) {
    const infoWindow = new google.maps.InfoWindow({
      content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
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
    })
    return await modal.present();
  }

  getCheckins(uid, intentionId) {
    this.checkinService.getCheckins(uid, intentionId).subscribe((res: any) => {
      this.checkins = res;
      this.checkins.forEach(a => {
        const icon = {
          url: '/assets/icon/pin.png',
          // size: {
          //   width: 50,
          //   height: 80.9
          // }
        };
        const config = {
          map: this.map,
          animation: google.maps.Animation.DROP,
          position:  new google.maps.LatLng(a.latitude, a.longitude),
          icon
        };

        const marker = this.addMarker(config);
        this.addInforWindow(marker, 'At ' + this.formatTime(a.time) + ', in ' + a.location);
      });
    },
    (error: any) => {
      console.error(error);
    });
  }

  getIntentions() {
    this.checkinService.getIntentions().subscribe((res: any) => {
      this.intentions = res;
      this.intentionId = res[0].id;
    },
    (error: any) => {
      console.error(error);
    });
  }

  updateFilter() {
    this.getCheckins(this.user.Id, this.intentionId);
  }

}
