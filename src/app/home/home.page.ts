import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { MenuComponent } from '../menu/menu.component';
import { GetTableComponent } from '../get-table/get-table.component';

Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, MenuComponent, GetTableComponent]
})
export class HomePage {

  constructor() { }

}
