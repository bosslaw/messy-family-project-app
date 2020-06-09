import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarImportPage } from './calendar-import.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarImportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarImportPageRoutingModule {}
