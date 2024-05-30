import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from './PlaylistService.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonInput} from '@ionic/angular/standalone';

@Component({
  selector: 'app-new-playlist',
  templateUrl: './new-playlist.page.html',
  styleUrls: ['./new-playlist.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, ReactiveFormsModule, IonItem, IonLabel, IonButton, IonInput],
  providers: [Injectable]
})
export class NewPlaylistPage implements OnInit{
    nombre: string = '';
    idUsuario: number = 0;
    playlistUrl: string='';

    playlistForm: FormGroup;
    isEditMode = false;

  constructor(private playlistService: PlaylistService, private router: Router,private route: ActivatedRoute, private fb: FormBuilder) {
    this.playlistForm = this.fb.group({
      id: [0],
      nombre: ['', Validators.required],
      id_Usuario: ['', Validators.required],
      playlist_Url: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.playlistForm.patchValue({
          id: params['id'],
          id_Usuario: params['id_Usuario'],
          nombre: params['nombre'],
          playlist_Url: params['playlist_Url']
        });
      }
    });
  }

  

  guardarPlaylist() {
    const playlistData = this.playlistForm.value;
    if (this.isEditMode) {
      this.playlistService.actualizarPlaylist(playlistData.id, playlistData.nombre, playlistData.id_Usuario, playlistData.playlist_Url)
        .subscribe(() => {
          console.log('Playlist actualizada correctamente.');
          this.router.navigate(['/home']);
        }, error => {
          console.error('Error al actualizar la playlist:', error);
        });
    } else {
      if (this.playlistForm.valid) {
        this.playlistService.guardarPlaylist(playlistData.nombre, playlistData.id_Usuario, playlistData.playlist_Url)
          .subscribe(() => {
            console.log('Playlist guardada correctamente.');
            this.router.navigate(['/home']);
          }, error => {
            console.error('Error al guardar la playlist:', error);
          });
      } else {
        console.error('Por favor completa todos los campos.');
      }
    }
  }

  

}
