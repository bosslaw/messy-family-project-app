import { Injectable } from '@angular/core';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';
import { environment } from 'src/environments/environment';

declare var window;
declare var cordova: any;

@Injectable({
  providedIn: 'root'
})
export class IcalExportService {

  constructor(
    private platform: Platform,
    private file: File,
    private fileTransfer: FileTransfer
  ) {
  }

  download() {
    const url = environment.apiUrl+'cal-events';

    const transfer = this.fileTransfer.create();
    transfer.download(url, this.file.dataDirectory + 'calendar_events.ics').then((entry) => {
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      // handle error
    });
  }
}
