import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckInFormPage } from './check-in-form.page';

const routes: Routes = [
  {
    path: '',
    component: CheckInFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckInFormPageRoutingModule {}
