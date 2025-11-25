import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonCol, IonText, IonRow, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonList, IonItem, IonCardSubtitle, IonThumbnail, IonLabel, IonFooter, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonFooter, IonCardContent, IonCard, IonCol, IonImg, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonText, IonRow, IonCardHeader, IonCardTitle, IonList, IonItem, IonCardSubtitle, IonThumbnail, IonLabel, IonButton]
})
export class PrincipalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
