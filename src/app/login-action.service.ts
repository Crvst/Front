import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class LoginActionService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    // Definir la URL de la API de inicio de sesión
    const loginUrl = 'https://localhost:7251/api/Auth/login';

    // Construir el cuerpo de la solicitud
    const body = {
      email: email,
      password: password
    };

    // Realizar la solicitud HTTP POST para iniciar sesión
    return this.http.post(loginUrl, body);
  }
}
