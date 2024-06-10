import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Canal } from './canal';
import { CanalService } from './canal-service';

@Component({
  selector: 'app-playlist-vie',
  templateUrl: './playlist-vie.page.html',
  styleUrls: ['./playlist-vie.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PlaylistViePage implements OnInit {
  canales: Canal[] = [];

  constructor(private canalService: CanalService) { }

  ngOnInit() {
    this.getCanales();
  }

  getCanales(): void {
    this.canalService.getCanals()
      .subscribe(canales => this.canales = canales);
  }
}
