import { routes } from './../../app.routes';
import { Component,CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonIcon, IonFooter} from '@ionic/angular/standalone'
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-global',
  templateUrl: './footer-global.component.html',
  styleUrls: ['./footer-global.component.scss'],
  standalone: true,
  imports: [IonFooter, CommonModule, IonIcon],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FooterGlobalComponent  implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

  ir1(){
    this.router.navigate(['/nosotros'])
  }
  ir2(){
    this.router.navigate(['/preguntas'])
  }
  ir3(){
    this.router.navigate(['/horarios'])
  }

  ir4(){
    this.router.navigate(['/pronto'])
  }
}
