import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenu, IonButtons, IonMenuButton, IonButton, IonAlert } from '@ionic/angular/standalone';

@Component({
  selector: 'app-alert',
  templateUrl: 'alert.component.html',
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonMenu, IonButtons, IonMenuButton, IonAlert]

})
export class AlertComponent {
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

 
}