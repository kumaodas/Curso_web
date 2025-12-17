import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { ModalController, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-masi',
  templateUrl: './masi.component.html',
  styleUrls: ['./masi.component.scss'],
  standalone: true,
  imports: [IonContent, IonTitle, IonHeader, IonContent, CommonModule, IonToolbar, IonButton]
  ,schemas: [ CUSTOM_ELEMENTS_SCHEMA],
})
export class MasiComponent  implements OnInit {
  @Input() imagen: string= '';
  @Input() titulo: string= '';
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  cerrar(){
    this.modalCtrl.dismiss();
  }
}
