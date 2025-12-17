import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonFooter, IonImg } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { HeaderGlobalComponent } from 'src/app/componentes/header-global/header-global.component';

@Component({
  selector: 'app-mas',
  templateUrl: './mas.page.html',
  styleUrls: ['./mas.page.scss'],
  standalone: true,
  imports: [IonImg, IonContent, CommonModule, FormsModule, IonButton, IonFooter, HeaderGlobalComponent]
})
export class MasPage implements OnInit {
  producto:any ={};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      this.producto=params;
    });
  }

}
