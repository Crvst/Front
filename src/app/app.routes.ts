import { Routes } from '@angular/router';
import { AuthGuard } from './guards/AuthGuard';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./login/login.page').then(l => l.LoginPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
  }

 
];
