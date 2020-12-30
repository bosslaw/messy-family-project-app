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
    
    return this.nativeGeocoder.reverseGeocode(latitude, longitude, options);
      // .then((result: NativeGeocoderResult[]) => console.log('the location-> ',JSON.stringify(result[0])))
      // .catch((error: any) => console.log(error));
  }

  getCoordsFromAddress(address) {
    const options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
    };
    return this.nativeGeocoder.forwardGeocode(address, options);
    
  }
}
