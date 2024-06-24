import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { PlaylistService } from '../get-table/get-playlist-service.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-vista-playlists',
  templateUrl: './vista-playlists.page.html',
  styleUrls: ['./vista-playlists.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class VistaPlaylistsPage implements OnInit {
  canales: any[] = []; // Almacena los canales obtenidos
  playlistId: number = 0;
  constructor(private playlistService : PlaylistService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.playlistId = +params['id']; // el '+' convierte el id a un número
    });

    this.loadCanales();
  }
  loadCanales() {
    this.playlistService.obtenerPlaylistsPorId(this.playlistId).subscribe(
      data => {
        this.canales = data; // Asigna los datos obtenidos a la variable canales
      },
      error => {
        console.error('Error al cargar los canales:', error);
      }
    );
  }
}
