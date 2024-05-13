import { Routes } from '@angular/router';
export const routes: Routes = [
  {path: '', loadComponent:()=> import ('./login/login.page').then(l => l.LoginPage)}


];
