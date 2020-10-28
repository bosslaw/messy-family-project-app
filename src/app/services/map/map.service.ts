import { Injectable } from '@angular/core';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private nativeGeocoder: NativeGeocoder) { }

  getAddressFromCoords(latitude, longitude) {
    console.log('coords section');
    const options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
    };

    this.nativeGeocoder.reverseGeocode(latitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => console.log(JSON.stringify(result[0])))
      .catch((error: any) => console.log(error));
  }
}
