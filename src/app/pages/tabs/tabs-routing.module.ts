import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'account',
        pathMatch: 'full',
      },
      {
        path: 'account',
        loadChildren: () => import('../avatar/avatar.module').then((m) => m.AvatarPageModule),
      },
      {
        path: 'contacts',
        loadChildren: () => import('../list/list.module').then((m) => m.ListPageModule),
      },
      {
        path: 'settings',
        loadChildren: () => import('../infinite/infinite.module').then((m) => m.InfinitePageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
