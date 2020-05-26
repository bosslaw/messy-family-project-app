import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';


const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'calendar',
        loadChildren: () => import('../pages/calendar/calendar.module').then( m => m.CalendarPageModule)
      },
      {
        path: 'profiles',
        loadChildren: () => import('../pages/profiles/profiles.module').then( m => m.ProfilesPageModule)
      },
      {
        path: 'check-in',
        loadChildren: () => import('../pages/check-in/check-in.module').then( m => m.CheckInPageModule)
      },
      {
        path: 'podcast',
        loadChildren: () => import('../pages/podcast/podcast.module').then( m => m.PodcastPageModule)
      },
      {
        path: 'interest',
        loadChildren: () => import('../pages/interest/interest.module').then( m => m.InterestPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
