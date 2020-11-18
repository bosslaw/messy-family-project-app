import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarImportPageRoutingModule } from './calendar-import-routing.module';

import { CalendarImportPage } from './calendar-import.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarImportPageRoutingModule
  ],
  declarations: [CalendarImportPage]
})
export class CalendarImportPageModule {}
