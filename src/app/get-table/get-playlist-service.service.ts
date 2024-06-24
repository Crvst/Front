import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  private apiUrl = 'https://localhost:7251/api/Playlists';
  private apiUrlPlaylistCanales = 'https://localhost:7251/api/PlaylistCanales';

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
        return throwError(error);
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
        return throwError(error);
      })
    );
  }

  obtenerPlaylists(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error al obtener las playlists:', error);
        return throwError(error);
      })
    );
  }
  obtenerPlaylistsPorId(id: number): Observable<any[]> {
    const url = `${this.apiUrl}/${id}`; // Construir la URL con el ID de la playlist
    return this.http.get<any[]>(url).pipe(
      catchError((error) => {
        console.error('Error al obtener la playlist por ID:', error);
        return throwError(error);
      })
    );
  }

  agregarCanalAPlaylist(playlistId: any, canalId: any): Observable<any> {
    const data = {
      PlaylistId: playlistId,
      CanalId: canalId
    };
  
    return this.http.post(this.apiUrlPlaylistCanales, data).pipe(
      catchError((error) => {
        console.error('Error al agregar canal a la playlist:', error);
        if (error.status === 400 && error.error.errors) {
          console.error('Detalles del error:', error.error.errors);
        }
        return throwError(error);
      })
    );  
  }
  
}
