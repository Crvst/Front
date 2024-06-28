import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonButton } from '@ionic/angular/standalone';
import { M3uService } from './m3u-service.service';
import Hls from 'hls.js';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.page.html',
  styleUrls: ['./video-player.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonButton]
})
export class VideoPlayerPage implements OnInit, OnDestroy {
  videoUrl: string | null = null;
  private hls: Hls | null = null;

  constructor(private m3uService: M3uService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log('Parámetros de consulta recibidos:', params);
      this.videoUrl = params['url'];
      setTimeout(() => {
        this.setupPlayer(this.videoUrl);
      }, 0);
    });
  }

  ngOnDestroy() {
    if (this.hls) {
      this.hls.destroy();
    }
  }

  setupPlayer(url: string | null) {
    console.log('Configurando reproductor con URL:', url);
    if (!url) {
      console.error('URL no proporcionada.');
      return;
    }

    const video = document.getElementById('video-player') as HTMLVideoElement;
    if (!video) {
      console.error('Elemento de video no encontrado.');
      return;
    }

    if (Hls.isSupported()) {
      console.log('HLS soportado.');
      this.hls = new Hls();

      // Manejo de errores
      this.hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              console.error('Error de red fatal:', data);
              this.hls?.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.error('Error de medios fatal:', data);
              this.hls?.recoverMediaError();
              break;
            default:
              console.error('Error fatal desconocido:', data);
              this.hls?.destroy();
              break;
          }
        }
      });

      this.hls.loadSource(url);
      this.hls.attachMedia(video);
      this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(error => {
          console.error('Error al intentar reproducir el video:', error);
        });
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      console.log('Soporte nativo de HLS.');
      video.src = url;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(error => {
          console.error('Error al intentar reproducir el video:', error);
        });
      });
    } else {
      console.error('Este navegador no soporta HLS.');
    }
  }
}
