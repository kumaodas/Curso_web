import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonImg, IonText, IonButton, IonButtons, IonBackButton, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonRow, IonCol, IonFooter } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonFooter, IonCol, IonRow, IonText, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonImg, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonButton],
})
export class HomePage {
  productos = [
    {
      id: 1,
      titulo: "MANGA",
      subtitulo: "GACHIAKUTA",
      contenido: "volumen 3 ",
      imagen: "assets/fotos/g3.webp"
    },
    {
      id: 2,
      titulo: "MANGA",
      subtitulo: "GACHIAKUTA",
      contenido: "volumen 5 ",
      imagen: "assets/fotos/g5.webp"
    },
    {
      id: 3,
      titulo: "MANGA",
      subtitulo: "GACHIAKUTA",
      contenido: "volumen 16 ",
      imagen: "assets/fotos/g16.jpg"
    },
    {
      id: 4,
      titulo: "MANGA",
      subtitulo: "GACHIAKUTA",
      contenido: "volumen 6 ",
      imagen: "assets/fotos/g6.webp"
    },
    {
      id: 5,
      titulo: "MANGA",
      subtitulo: "GACHIAKUTA",
      contenido: "volumen 14",
      imagen: "assets/fotos/g14.jpg"
    },
    {
      id: 6,
      titulo: "MANGA",
      subtitulo: "GACHIAKUTA",
      contenido: "volumen ",
      imagen: "assets/fotos/g15.webp"
    }
  ]

  constructor(private router:Router) {}

  irmas(producto: any){
    this.router.navigate(['/mas'], {queryParams: producto});
  }
}
