import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonItem, IonContent, IonMenuButton, IonMenu, IonLabel, IonIcon, IonList, IonHeader, IonButtons, IonToolbar, IonTitle } from "@ionic/angular/standalone";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonButton, IonButtons, IonList, IonApp, IonRouterOutlet, IonMenuButton, IonContent, IonItem, CommonModule, IonMenu, IonLabel, IonIcon, RouterLink, IonHeader, IonToolbar, IonTitle]
})
export class AppComponent {
  constructor() {}
}
