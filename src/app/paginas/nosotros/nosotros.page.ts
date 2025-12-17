import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonCard, IonImg, IonCardHeader, IonCardTitle, IonCardContent, IonAlert, IonButton, IonFooter } from '@ionic/angular/standalone';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
  standalone: true,
  imports: [IonFooter, IonButton, IonAlert, IonCardContent, IonCardTitle, IonCardHeader, IonImg, IonCard, IonCol, IonRow, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NosotrosPage implements OnInit {
  alertButtons = ['Action'];
  constructor() { }

  ngOnInit() {
  }

}
