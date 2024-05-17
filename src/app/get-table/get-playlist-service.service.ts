import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Playlist } from './Playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private apiUrl = 'https://localhost:7251/api/playlists'; // Cambia la URL base por la de tu API

  constructor(private http: HttpClient) { }

  getPlaylists(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(this.apiUrl);
  }

  deletePlaylist(id: any): Observable<any> {
    console.log('ABY');
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
  
}
