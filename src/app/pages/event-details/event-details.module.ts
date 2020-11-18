import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EventFormPageModule } from '../event-form/event-form.module';
import { EventDetailsPageRoutingModule } from './event-details-routing.module';
import { EventDetailsPage } from './event-details.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventDetailsPageRoutingModule,
    EventFormPageModule
  ],
  declarations: [EventDetailsPage]
})
export class EventDetailsPageModule {}
