import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexGuard } from '../guards/index.guard';
import { IndexPage } from './index.page';


const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    canActivate: [IndexGuard],
    children: [
      {
        path: 'login',
        loadChildren: () => import('../pages/login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'signup',
        loadChildren: () => import('../pages/signup/signup.module').then( m => m.SignupPageModule)
      },
      // {
      //   path: 'calendar',
      //   loadChildren: () => import('../pages/calendar/calendar.module').then( m => m.CalendarPageModule)
      // },
      // {
      //   path: 'home',
      //   loadChildren: () => import('../pages/home/home.module').then( m => m.HomePageModule)
      // },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
