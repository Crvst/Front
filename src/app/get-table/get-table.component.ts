import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonInput, IonList, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { PlaylistService } from './get-playlist-service.service';
import { Playlist } from './Playlist';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-table',
  templateUrl: './get-table.component.html',
  styleUrls: ['./get-table.component.scss'],
  standalone: true,
  imports: [IonIcon,IonButtons, IonList, IonInput, IonButton, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],

})
export class GetTableComponent  implements OnInit {

  playlists!: Playlist[];

  constructor(private playlistService : PlaylistService,private router: Router) { }

  ngOnInit() {
    this.loadPlaylists();
  }

  irANuevoPlaylist() {
    this.router.navigate(['/new-playlist']);
  }

  modificarPlaylist(playlist: any) {
    this.router.navigate(['/new-playlist', { id: playlist.id, nombre: playlist.nombre, playlist_url: playlist.playlist_url }]);
  }
  

  loadPlaylists() {
    this.playlistService.getPlaylists().subscribe(
      (data) => {
        this.playlists = data;
      },
      (error) => {
        console.error('Error al cargar las playlists:', error);
      }
    );
  }

  deletePlaylist(id: any){
    console.log('HOLA');
    this.playlistService.deletePlaylist(id);
  }
}

