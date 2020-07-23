import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FamilyMemberFormPageModule } from '../family-member-form/family-member-form.module';
import { ProfilesPageRoutingModule } from './profiles-routing.module';
import { ProfilesPage } from './profiles.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilesPageRoutingModule,
    FamilyMemberFormPageModule
  ],
  declarations: [ProfilesPage]
})
export class ProfilesPageModule {}
