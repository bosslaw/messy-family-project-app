import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-calendar-import',
  templateUrl: './calendar-import.page.html',
  styleUrls: ['./calendar-import.page.scss'],
})
export class CalendarImportPage implements OnInit {

  iCalFile: any;
  filename = '';
  type = '';
  base64 = '';

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  upload($event) {
    const file = $event.target.files[0];
    console.log(file);
    this.filename = file.name;
    this.type = file.type;

    const ref = this;
    const reader = new FileReader();

    reader.onloadend = function() {
      const base64 = reader.result;
      ref.base64 = base64.toString();
    }

    reader.readAsDataURL(file);

  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
