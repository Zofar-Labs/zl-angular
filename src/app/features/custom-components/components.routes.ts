import { Routes } from '@angular/router';

const componentRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/dashboard-layout'),
    loadChildren: () => [
      {
        path: 'table',
        loadComponent: () => import('./pages/table'),
      },
      {
        path: '',
        loadComponent: () => import('./pages/main-page'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

export default componentRoutes;
