import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenu, IonButtons, IonMenuButton, IonIcon } from '@ionic/angular/standalone';
import { MenuComponent } from '../../menu/menu.component';
import { GetTableComponent } from '../../get-table/get-table.component';
import { AlertComponent } from '../../alert/alert.component';
import { DragDropComponent } from '../../drag-and-drop/drag-and-drop.component';
import { HttpClient } from '@angular/common/http';

Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, MenuComponent, GetTableComponent, IonMenu, IonButtons, IonMenuButton, AlertComponent, DragDropComponent]
})
export class HomePage {

  constructor(private http: HttpClient) { }

  onFileDropped(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    this.http.post<any>('https://localhost:7251/api/Upload', formData).subscribe(
      (response) => {
        console.log('File uploaded successfully', response);
      },
      (error) => {
        console.error('Error uploading file', error);
      }
    );
  }

}
