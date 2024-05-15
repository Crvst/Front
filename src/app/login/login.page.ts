import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonInput } from '@ionic/angular/standalone';
import { LoginActionService } from '../login-action.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonInput, IonButton, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
  providers: [Injectable]
})


export class LoginPage  {
  email: string = '';
  password: string = '';
  isLogged: boolean = false;
  message: string = '';
  constructor(private loginActionService: LoginActionService, private router: Router) { }

  login() {
  console.log(this.email);
  this.loginActionService.login(this.email, this.password)
    .subscribe(
      (response) => {
        console.log('Inicio de sesión exitoso:', response);
        this.message = 'Inicio de sesión exitoso';
        this.isLogged = true;
        
        // Navegar a la página de inicio
        this.router.navigate(['/home']);
      },
    
      (error) => {
        console.error('Error al iniciar sesión:', error);
        // Manejar el error
      }
    );
}

  logout(){
    this.isLogged = false;
  }
  isLoggedUser(){
    return this.isLogged;
  }
}
