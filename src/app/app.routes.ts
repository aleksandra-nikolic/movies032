import { Routes } from '@angular/router';
import { TvShows } from './components/tv-shows/tv-shows';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home').then((m) => m.Home),
  },
  {
    path: 'movies',
    loadComponent: () => import('./components/movies/movies').then((m) => m.Movies),
  },
  {
    path: 'tv-shows',
    loadComponent: () => import('./components/tv-shows/tv-shows').then((m) => m.TvShows),
  },
  {
    path: 'description/:id/:mediaType',
    loadComponent: () =>
      import('./components/card-description/card-description').then((m) => m.CardDescription),
  },
];
