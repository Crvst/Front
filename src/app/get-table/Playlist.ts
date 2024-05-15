export class Playlist {
    id: number;
    nombre: string;
    id_usuario: number;
    playlist_url: string;
  
    constructor(id: number, nombre: string, id_usuario: number, playlist_url: string) {
      this.id = id;
      this.nombre = nombre;
      this.id_usuario = id_usuario;
      this.playlist_url = playlist_url;
    }
  }
  