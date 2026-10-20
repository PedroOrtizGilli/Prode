import { Routes } from '@angular/router';
import { authGuard } from '../app/guards/auth/auth-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pantallas/inicio/inicio').then(m => m.Inicio),
  },
  {
    path: 'login',
    loadComponent: () => import('./pantallas/login/login').then(m => m.Login),
  },
  {
    path: 'registro',
    loadComponent: () => import('./pantallas/registro/registro').then(m => m.Registro),
  },
  {
    path: 'mi-perfil',
    loadComponent: () => import('./pantallas/perfil/perfil').then(m => m.Perfil),
    canActivate: [authGuard],
  },
  {
    path: 'crear-prode',
    loadComponent: () => import('./pantallas/crear-prode/crear-prode').then(m => m.CrearProde),
    canActivate: [authGuard],
  },
  {
    path: 'unirse-prode',
    loadComponent: () => import('./pantallas/unirse-prode/unirse-prode').then(m => m.UnirseProde),
    canActivate: [authGuard],
  },
  {
    path: 'ver-prode/:id',
    loadComponent: () => import('./pantallas/ver-prode/ver-prode').then(m => m.VerProde),
    canActivate: [authGuard],
  },
  {
    path: 'logout',
    redirectTo: '',
  },
  {
    path: '**',
    redirectTo: '',
  },
];