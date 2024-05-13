import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonInput } from '@ionic/angular/standalone';
import { LoginActionService } from '../login-action.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonInput, IonButton, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LoginPage  {
  email: string = '';
  password: string = '';
  loginSuccess: boolean = false; // Variable para indicar si el inicio de sesión fue exitoso
  message: string = '';
  constructor(private loginActionService: LoginActionService){}

  login() {
    console.log(this.email);
    this.loginActionService.login(this.email, this.password) 
      .subscribe(
        (response) => {
          console.log('Inicio de sesión exitoso:', response);
          this.message = 'Inicio de sesión exitoso';
          this.loginSuccess = true; // Establecer la variable en true cuando el inicio de sesión es exitoso


          // Manejar la respuesta del servidor
        },
      
        (error) => {
          console.error('Error al iniciar sesión:', error);
          // Manejar el error
        }
      );
  }
 
}
