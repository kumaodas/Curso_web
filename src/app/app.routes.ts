import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full',
  },
  {
    path: 'principal',
    loadComponent: () => import('./paginas/principal/principal.page').then( m => m.PrincipalPage)
  },
  {
    path: 'mas',
    loadComponent: () => import('./paginas/mas/mas.page').then( m => m.MasPage)
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./paginas/nosotros/nosotros.page').then( m => m.NosotrosPage)
  },
  {
    path: 'preguntas',
    loadComponent: () => import('./paginas/preguntas/preguntas.page').then( m => m.PreguntasPage)
  },
  {
    path: 'horarios',
    loadComponent: () => import('./paginas/horarios/horarios.page').then( m => m.HorariosPage)
  },
  {
    path: 'pronto',
    loadComponent: () => import('./paginas/pronto/pronto.page').then( m => m.ProntoPage)
  },
  {
    path: 'prueba',
    loadComponent: () => import('./paginas/prueba/prueba.page').then( m => m.PruebaPage)
  },
];
