import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyMemberFormPage } from './family-member-form.page';


const routes: Routes = [
  {
    path: '',
    component: FamilyMemberFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamilyMemberFormPageRoutingModule {}
