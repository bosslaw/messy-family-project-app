import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgCalendarModule } from 'ionic2-calendar';
import { CalendarImportPageModule } from '../calendar-import/calendar-import.module';
import { EventDetailsPageModule } from '../event-details/event-details.module';
import { EventFormPageModule } from '../event-form/event-form.module';
import { CalendarPageRoutingModule } from './calendar-routing.module';
import { CalendarPage } from './calendar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule,
    NgCalendarModule,
    EventFormPageModule,
    CalendarImportPageModule,
    EventDetailsPageModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [CalendarPage]
})
export class CalendarPageModule {}
