import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonToolbar, IonHeader, IonTitle, IonCol, IonContent, IonText, IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonImg, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [ IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
