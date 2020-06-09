import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IcalService {

  fileText: any;
  cal: any;
  eventCount: any;
  todoCount: any;
  lastKey:any;
  file: any;

  constructor() { }

  parse(encodedData) {
    this.fileText = encodedData.split('\n');

  }

}
