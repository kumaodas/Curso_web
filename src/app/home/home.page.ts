import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonImg, IonText, IonButton, IonButtons, IonBackButton, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonBackButton, IonButtons, IonText, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonImg, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle],
})
export class HomePage {
  constructor() {}
}
