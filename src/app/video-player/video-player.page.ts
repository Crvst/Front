import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonButton} from '@ionic/angular/standalone';
import { M3uService } from './m3u-service.service';


@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.page.html',
  styleUrls: ['./video-player.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonButton]
})
export class VideoPlayerPage {
  channelUrls: string[] = [];

  constructor(private m3uService: M3uService) { }

  ionViewDidEnter() {
    this.loadChannelUrls();
  }

  loadChannelUrls() {
    this.m3uService.getChannelUrls().subscribe(
      (data: string[]) => {
        this.channelUrls = data;
      },
      (error) => {
        console.error('Error loading channel URLs:', error);
      }
    );
  }

  playChannel(url: string) {
    const videoPlayer = document.createElement('video');
    videoPlayer.controls = true; // Muestra los controles de reproducción
    videoPlayer.src = url; // Establece la URL del canal como fuente del video
    videoPlayer.style.width = '100%'; // Ajusta el ancho del reproductor al 100% del contenedor
  
    // Verifica si videoContainer no es null antes de intentar agregar el reproductor de video
    const videoContainer = document.getElementById('video-container');
    if (videoContainer) {
      // Limpia cualquier contenido existente en el contenedor de video
      videoContainer.innerHTML = '';
      
      // Agrega el reproductor de video al contenedor
      videoContainer.appendChild(videoPlayer);
    } else {
      console.error('El contenedor de video no se encontró en el DOM.');
    }
  }
  
  
}