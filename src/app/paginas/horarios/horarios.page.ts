import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonRow, IonCol, IonCard, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.page.html',
  styleUrls: ['./horarios.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardTitle, IonCard, IonCol, IonRow, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HorariosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
