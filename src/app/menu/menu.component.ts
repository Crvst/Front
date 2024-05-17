import { Component } from '@angular/core';
import { IonItem, IonContent, IonMenuButton, IonMenu, IonLabel, IonIcon, IonList, IonHeader, IonButtons, IonToolbar, IonTitle } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [IonButtons, IonList, IonMenuButton, IonContent, IonItem, CommonModule, IonMenu, IonLabel, IonIcon, RouterLink, IonHeader, IonToolbar, IonTitle]
  
})
export class MenuComponent {
  sidebarVisible: boolean = true;

  constructor() {}

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

}
