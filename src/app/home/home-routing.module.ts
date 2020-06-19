import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeGuard } from '../guards/home.guard';
import { UserDataResolver } from '../resolvers/userData.resolver';
import { HomePage } from './home.page';


const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    canActivate: [HomeGuard],
    resolve: {
      userData: UserDataResolver
    },
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
      },
      {
        path: 'settings',
        loadChildren: () => import('../pages/settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'account-edit',
        loadChildren: () => import('../pages/account-edit/account-edit.module').then( m => m.AccountEditPageModule)
      },
      {
        path: 'blog/:id',
        loadChildren: () => import('../pages/blog-view/blog-view.module').then( m => m.BlogViewPageModule)
      },
      {
        path: '',
        redirectTo: '/home/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
