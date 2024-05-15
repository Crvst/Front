// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginPage } from '../login/login.page';
@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate {
  constructor(private loginPage: LoginPage, private router: Router) {}

  canActivate(): boolean {
    if (this.loginPage.isLoggedUser()) {
      return true;
    } else {
      this.router.navigate(['/login']); // Redirige al componente de inicio de sesión si no está autenticado
      return false;
    }
  }
}
