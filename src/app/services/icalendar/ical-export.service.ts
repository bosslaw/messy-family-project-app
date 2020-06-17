import { Injectable } from '@angular/core';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';

declare var window;
declare var cordova: any;

@Injectable({
  providedIn: 'root'
})
export class IcalExportService {

  SEPARATOR = '\n';
  calendarEvents = [];

  calendarStart = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0'
  ].join(this.SEPARATOR);

  calendarEnd = this.SEPARATOR + 'END:VCALENDAR';

  constructor(
    private platform: Platform,
    private file: File,
    private fileTransfer: FileTransfer
  ) {
  }

  addEvent(title, description, start, end) {
    if (typeof title === 'undefined' ||
        typeof description === 'undefined' ||
        typeof start === 'undefined' ||
        typeof end === 'undefined'
    ) {
        return false;
    }

    const startDate = new Date(start);
    const endDate = new Date(end);

    const startYear = ('0000' + (startDate.getFullYear().toString())).slice(-4);
    const startMonth = ('00' + ((startDate.getMonth() + 1).toString())).slice(-2);
    const startDay = ('00' + ((startDate.getDate()).toString())).slice(-2);
    const startHours = ('00' + (startDate.getHours().toString())).slice(-2);
    const startMinutes = ('00' + (startDate.getMinutes().toString())).slice(-2);
    const startSeconds = ('00' + (startDate.getMinutes().toString())).slice(-2);

    const endYear = ('0000' + (endDate.getFullYear().toString())).slice(-4);
    const endMonth = ('00' + ((endDate.getMonth() + 1).toString())).slice(-2);
    const endDay = ('00' + ((endDate.getDate()).toString())).slice(-2);
    const endHours = ('00' + (endDate.getHours().toString())).slice(-2);
    const endMinutes = ('00' + (endDate.getMinutes().toString())).slice(-2);
    const endSeconds = ('00' + (endDate.getMinutes().toString())).slice(-2);

    let startTime = '';
    let endTime = '';
    // if ((startMinutes + startSeconds + endMinutes + endSeconds) !== 0) {
        startTime = 'T' + startHours + startMinutes + startSeconds;
        endTime = 'T' + endHours + endMinutes + endSeconds;
    // }

    const startEvent = startYear + startMonth + startDay + startTime;
    const endEvent = endYear + endMonth + endDay + endTime;

    const calendarEvent = [
      'BEGIN:VEVENT',
      'CLASS:PUBLIC',
      'DESCRIPTION:' + description,
      'DTSTART;VALUE=DATE:' + startEvent,
      'DTEND;VALUE=DATE:' + endEvent,
      'LOCATION:' + location,
      'SUMMARY;LANGUAGE=en-us:' + title,
      'TRANSP:TRANSPARENT',
      'END:VEVENT'
    ].join(this.SEPARATOR);

    this.calendarEvents.push(calendarEvent);
    return calendarEvent;
  }

  download(events) {
    if(!events.length) {
      return false;
    }

    events.forEach(event => {
      this.addEvent(event.title, event.desc, new Date(event.startTime).toUTCString(), new Date(event.endTime).toUTCString());
    });

    if (this.calendarEvents.length < 1) {
      return false;
    }

    const calendar = this.calendarStart + this.SEPARATOR + this.calendarEvents.join(this.SEPARATOR) + this.calendarEnd;
    const fullString = 'data:text/calendar;charset=utf8,' + escape(calendar);

    // return btoa('data:text/calendar;charset=utf8,' + escape(calendar));
    const base64 = btoa(fullString);
    const contentType = 'application/ics';



    const folderPath = cordova.file.applicationStorageDirectory;
    const filename = 'calendar.ics';

    this.saveBase64AsPDF(folderPath,filename,base64,contentType);
    // const DataBlob = this.b64toBlob(base64,'text/calendar','');
    // const file = new Blob([atob(escape(calendar))], {type: 'text/calendar'});

    // const fileURL = URL.createObjectURL(file);
    // window.open(fileURL);
    // return ;
  }

  saveBase64AsPDF(folderPath,filename,content,contentType){
    // Convert the base64 string in a Blob
    const DataBlob = this.b64toBlob(content,contentType,'');

    window.resolveLocalFileSystemURL(folderPath, (dir) => {
        dir.getFile(filename, {create:true}, (file: any) => {
                console.log('File created successfully.');
                file.createWriter((fileWriter) => {
                    console.log('Writing content to file');
                    fileWriter.write(DataBlob);
                    this.processDownload(folderPath, filename);
                }, (err)=>{
                    alert('Unable to save file in path '+ folderPath);
                });
        });
    });

  }

  processDownload(folderPath, filename) {
    let path = null;

    if(this.platform.is('ios')) {
      path = this.file.documentsDirectory;
    } else {
      path = this.file.dataDirectory;
    }
    console.log('path', path);

    const transfer = this.fileTransfer.create();
    transfer.download(folderPath+filename, path + filename)
      .then(entry => {
      //  console.log(entry);
       console.log('download complete: ' + entry.toURL());
      })
  }

  b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }

}
