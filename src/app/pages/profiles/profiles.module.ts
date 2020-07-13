import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FamilyMemberAddPageModule } from '../family-member-add/family-member-add.module';
import { ProfilesPageRoutingModule } from './profiles-routing.module';
import { ProfilesPage } from './profiles.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilesPageRoutingModule,
    FamilyMemberAddPageModule
  ],
  declarations: [ProfilesPage]
})
export class ProfilesPageModule {}
