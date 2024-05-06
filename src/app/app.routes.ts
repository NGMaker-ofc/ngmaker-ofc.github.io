import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    loadComponent() {
      return import('./components/home/home.component').then(
        (m) => m.HomeComponent
      );
    },
  },
  {
    path: 'gallery',
    loadComponent() {
      return import('./components/gallery/gallery.component').then(
        (m) => m.GalleryComponent
      );
    },
  },
  {
    path: 'gallery/:category',
    loadComponent() {
      return import('./components/gallery/gallery.component').then(
        (m) => m.GalleryComponent
      );
    },
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
