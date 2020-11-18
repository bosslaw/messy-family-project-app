import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FamilyMemberFormPageRoutingModule } from './family-member-form-routing.module';
import { FamilyMemberFormPage } from './family-member-form.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamilyMemberFormPageRoutingModule
  ],
  declarations: [FamilyMemberFormPage]
})
export class FamilyMemberFormPageModule {}
