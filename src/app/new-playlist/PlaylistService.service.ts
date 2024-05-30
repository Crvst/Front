import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  private apiUrl = 'https://localhost:7251/api/Playlists';

  constructor(private http: HttpClient) {}

  guardarPlaylist(nombre: string, idUsuario: number, playlistUrl: string): Observable<any> {
    const playlistData = {
      nombre: nombre,
      id_Usuario: idUsuario,
      playlist_Url: playlistUrl
    };

    return this.http.post(this.apiUrl, playlistData).pipe(
      catchError((error) => {
        console.error('Error al guardar la playlist:', error);
        return throwError(error); // Manejar el error aquí y devolverlo
      })
    );
  }

  actualizarPlaylist(id: number, nombre: string, idUsuario: number, playlistUrl: string): Observable<any> {
    const playlistData = {
      id: id,
      nombre: nombre,
      id_Usuario: idUsuario,
      playlist_Url: playlistUrl
    };

    return this.http.put(`${this.apiUrl}/${id}`, playlistData).pipe(
      catchError((error) => {
        console.error('Error al actualizar la playlist:', error);
        return throwError(error); // Manejar el error aquí y devolverlo
      })
    );
  }
}
