import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Playlist } from './Playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private apiUrl = 'https://localhost:7251/api/Playlists'; // API mia

  constructor(private http: HttpClient) { }

  getPlaylists(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(this.apiUrl);
  }

  deletePlaylist(id: number): Observable<any> {
    console.log('ABY');
    console.log(`${this.apiUrl}/${id}`);
    
    return this.http.delete(this.apiUrl+`/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error al eliminar la playlist:', error);
        return throwError('Error al eliminar la playlist');
      })
    );
  }
  
}
