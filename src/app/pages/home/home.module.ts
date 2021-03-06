import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { EventDetailsPageModule } from '../event-details/event-details.module';
import { EventFormPageModule } from '../event-form/event-form.module';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentsModule,
    EventDetailsPageModule,
    EventFormPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
