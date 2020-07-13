import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamilyMemberAddPageRoutingModule } from './family-member-add-routing.module';

import { FamilyMemberAddPage } from './family-member-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamilyMemberAddPageRoutingModule
  ],
  declarations: [FamilyMemberAddPage]
})
export class FamilyMemberAddPageModule {}
