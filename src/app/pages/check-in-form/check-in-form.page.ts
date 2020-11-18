import { Component, OnInit } from '@angular/core';
import { NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { ModalController } from '@ionic/angular';
import { AuthConstants } from 'src/app/config/auth-constants';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CheckinService } from 'src/app/services/checkin/checkin.service';
import { MapService } from 'src/app/services/map/map.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-check-in-form',
  templateUrl: './check-in-form.page.html',
  styleUrls: ['./check-in-form.page.scss'],
})
export class CheckInFormPage implements OnInit {

  form: any;
  devotions = [];
  latitude: any;
  longitude: any;
  lastName: any;
  user: any;
  nlatitude: any;
  nlongitude: any;

  constructor(
    public modalCtrl: ModalController,
    private checkinService: CheckinService,
    private authService: AuthService,
    public mapService: MapService,
    private storageService: StorageService
  ) {
    this.form = {
      devotion: 1,
      location: '',
      time: new Date().toISOString(),
      uid: null,
      details: '',
      address_1: '',
      address_2: '',
      city: '',
      state: '',
      country: ''
    };

    this.getIntentions();
    this.getUserData();
  }

  getUserData() {
    this.storageService.get(AuthConstants.AUTH).then((res: any) => {
      this.lastName = res.LastName;

      this.form. location = res.StreetAddress1 + ',' + res.StreetAddress2 + ',' +
                    res.City + ',' +  res.State + ',' + res.Country;
    });
  }

  ngOnInit() {
    this.authService.userData$.subscribe((res: any) => {
      this.user = res;
    })

    this.mapService.getAddressFromCoords(this.latitude, this.longitude).then((result: NativeGeocoderResult[]) => {
      if(result[0]) {
        const res = result[0];
        this.form.location = res.locality + ', ' + res.subAdministrativeArea + ', ' + res.countryName;
        this.nlatitude = res.latitude;
        this.nlongitude = res.longitude;
      }
    })
    .catch((error: any) => console.log(error));
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  getIntentions() {
    this.checkinService.getIntentions().subscribe((res: any) => {
      this.devotions = res;
    },
    (error: any) => {
      console.error(error);
    });
  }

  newCheckin() {

    const params = {
      devotion_id: this.form.devotion,
      uid: this.user.Id,
      location: this.form.location,
      time: this.form.time,
      latitude: (this.nlatitude) ? this.nlatitude : this.latitude,
      longitude: (this.nlongitude) ? this.nlongitude :  this.longitude,
      details: this.form.details
    };

    this.mapService.getCoordsFromAddress(location)
    .then((result: NativeGeocoderResult[]) => {
      params.latitude = result[0].latitude;
      params.latitude = result[0].latitude;

    })
    .catch((error: any) => console.log(error));

    this.checkinService.newCheckin(params).subscribe((res: any) => {
      this.dismiss();
    },
    (error: any) => {
      console.error(error);
    });

  }
}