import { Component,CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAccordionGroup, IonAccordion, IonIcon, IonItem, IonLabel } from '@ionic/angular/standalone';
import { HeaderGlobalComponent } from 'src/app/componentes/header-global/header-global.component';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.page.html',
  styleUrls: ['./preguntas.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonIcon, IonAccordionGroup, IonContent, CommonModule, FormsModule, HeaderGlobalComponent, IonAccordion],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PreguntasPage implements OnInit {
  
  preguntas=[
    {
      icono:'logo-whatsapp',
      titulo:'Deseas conococer mas?',
      respuesta:'Contactanos'
    },{

    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
