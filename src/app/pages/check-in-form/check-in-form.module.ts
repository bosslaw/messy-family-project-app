import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckInFormPageRoutingModule } from './check-in-form-routing.module';

import { CheckInFormPage } from './check-in-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckInFormPageRoutingModule
  ],
  declarations: [CheckInFormPage]
})
export class CheckInFormPageModule {}
