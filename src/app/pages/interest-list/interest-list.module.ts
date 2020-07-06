import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { InterestListPageRoutingModule } from './interest-list-routing.module';
import { InterestListPage } from './interest-list.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterestListPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InterestListPage]
})
export class InterestListPageModule {}
