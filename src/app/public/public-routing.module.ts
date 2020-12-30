import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexGuard } from '../guards/index.guard';

import { PublicPage } from './public.page';

const routes: Routes = [
  {
    path: 'public',
    component: PublicPage,
    canActivate: [IndexGuard],
    children: [
      {
        path: 'podcast',
        loadChildren: () => import('../pages/podcast/podcast.module').then( m => m.PodcastPageModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('../pages/blog/blog.module').then( m => m.BlogPageModule)
      },
      {
        path: 'blog/:id',
        loadChildren: () => import('../pages/blog-view/blog-view.module').then( m => m.BlogViewPageModule)
      },
      {
        path: '',
        redirectTo: '/public/blog',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/public/blog',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicPageRoutingModule {}
