import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CheckInFormPageModule } from '../check-in-form/check-in-form.module';
import { CheckInPageRoutingModule } from './check-in-routing.module';
import { CheckInPage } from './check-in.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckInPageRoutingModule,
    CheckInFormPageModule
  ],
  declarations: [CheckInPage]
})
export class CheckInPageModule {}
