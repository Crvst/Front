import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonAvatar, IonLabel, IonButton, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { Canal } from './canal';
import { CanalService } from './canal-service';
import { PlaylistService } from '../get-table/get-playlist-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist-vie',
  templateUrl: './playlist-vie.page.html',
  styleUrls: ['./playlist-vie.page.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonAvatar, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSelect, IonSelectOption]
})
export class PlaylistViePage implements OnInit {
  canales: Canal[] = [];
  grupos: string[] = [];
  playlists: any[] = [];
  playlistSeleccionada: any;

  grupoSeleccionado = 'Todos'; // Grupo seleccionado por defecto

  constructor(private canalService: CanalService, private playlistService: PlaylistService, private router: Router) { }

  ngOnInit() {
    this.getCanales();
    this.getPlaylists();
  }

  get canalesFiltrados() {
    if (this.grupoSeleccionado === 'Todos') {
      return this.canales;
    }
    return this.canales.filter(canal => canal.group_title === this.grupoSeleccionado);
  }

  extraerGrupos(canales: Canal[]): string[] {
    const gruposSet = new Set<string>();
    canales.forEach(canal => gruposSet.add(canal.group_title));
    return [...Array.from(gruposSet)];
  }

  getCanales(): void {
    this.canalService.getCanals()
      .subscribe(canales => {
        this.canales = canales;
        this.grupos = this.extraerGrupos(this.canales);
      });
  }
  agregarCanalAPlaylist(canalId: number): void {
    if (this.playlistSeleccionada) {
      console.log('Playlist ID:', this.playlistSeleccionada.id, 'Canal ID:', canalId);
      this.playlistService.agregarCanalAPlaylist(this.playlistSeleccionada.id, canalId).subscribe(response => {
        console.log('Canal agregado a la playlist:', response);
      }, error => {
        console.error('Error al agregar canal a la playlist:', error);
        if (error.status === 400 && error.error.errors) {
          console.error('Detalles del error:', error.error.errors);
        }
      });
    }
  }
  getPlaylists(): void {
    this.playlistService.obtenerPlaylists().subscribe(playlists => {
      this.playlists = playlists;
    });
  }


  abrirReproductor(url: any): void {
    // Abre el reproductor con la URL proporcionada
    this.router.navigate(['/video-player'], { queryParams: { url } });
  }
}
