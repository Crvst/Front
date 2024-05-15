import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonInput, IonList, IonButtons } from '@ionic/angular/standalone';
import { PlaylistService } from './get-playlist-service.service';
import { Playlist } from './Playlist';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-get-table',
  templateUrl: './get-table.component.html',
  styleUrls: ['./get-table.component.scss'],
  standalone: true,
  imports: [IonButtons, IonList, IonInput, IonButton, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],

})
export class GetTableComponent  implements OnInit {

  playlists!: Playlist[];

  constructor(private playlistService : PlaylistService) { }

  ngOnInit() {
    this.loadPlaylists();
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
}

