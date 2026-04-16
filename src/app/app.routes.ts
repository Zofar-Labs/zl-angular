import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'components',
    loadChildren: () => import('./features/custom-components/components.routes')
  },
  {
    path: '',
    loadComponent: () => import('./features/home/home-page')
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
