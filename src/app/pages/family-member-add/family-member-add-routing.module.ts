import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamilyMemberAddPage } from './family-member-add.page';

const routes: Routes = [
  {
    path: '',
    component: FamilyMemberAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamilyMemberAddPageRoutingModule {}
