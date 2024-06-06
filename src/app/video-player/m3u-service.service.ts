import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class M3uService {

  private apiUrl = 'https://localhost:7251/api/M3u/GetChannelUrls'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  getChannelUrls(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }
}
