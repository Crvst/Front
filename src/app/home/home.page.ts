import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenu, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { MenuComponent } from '../menu/menu.component';
import { GetTableComponent } from '../get-table/get-table.component';
import { AlertComponent } from '../alert/alert.component';

Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, MenuComponent, GetTableComponent, IonMenu, IonButtons, IonMenuButton, AlertComponent]
})
export class HomePage {

  constructor() { }

}
