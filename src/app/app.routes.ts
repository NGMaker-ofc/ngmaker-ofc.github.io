import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    loadComponent() {
      return import('./pages/home/home');
    },
  },
  {
    path: 'gallery',
    loadComponent() {
      return import('./pages/gallery/gallery');
    },
    children: [
      {
        path: ':category',
        loadComponent() {
          return import('./pages/gallery/gallery');
        },
      },
    ],
  },
  {
    path: '**',
    loadComponent() {
      return import('./pages/not-found/not-found');
    },
  },
];
