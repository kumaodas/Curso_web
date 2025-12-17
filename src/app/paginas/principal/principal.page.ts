import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonCol, IonText, IonRow, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonList, IonItem, IonCardSubtitle, IonThumbnail, IonLabel, IonFooter, IonButton, IonSearchbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { HeaderGlobalComponent } from 'src/app/componentes/header-global/header-global.component';
import { FooterGlobalComponent } from 'src/app/componentes/footer-global/footer-global.component';
import { MasiComponent } from 'src/app/componentes/masi/masi.component';
import { ModalController } from '@ionic/angular/standalone';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Novo9/12
/* Carrusel */
import { register } from 'swiper/element/bundle'; 

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [CommonModule,HttpClientModule,IonSearchbar, IonCardContent, IonCard, IonImg, IonContent,  CommonModule, FormsModule, IonCardHeader, IonCardTitle, IonCardSubtitle, HeaderGlobalComponent, FooterGlobalComponent],
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PrincipalPage implements OnInit {
  productos: any[]=[]; //importacion data variada 9/12
  productoFiltrado: any[]=[]; //se completa automaticamente con el json 9/12
  categoria: any[]=[];//importacion data variada 9/12
  constructor( 
    private router:Router, 
    private modalCtrl: ModalController,
    private http: HttpClient ) {
  }

  ngOnInit() {
    this.cargarPro();
    this.cargarCat();
    register();
  }

  //novo 9/12

  filtrarCat(nombre:string){
    this.productoFiltrado = this.productos.filter(p=>p.categoria === nombre)
  }
  filtrarSubCat(nombre:string){
    this.productoFiltrado = this.productos.filter(p=>p.subcategoria === nombre)
    /* this.productoFiltrado = this.productos.filter(p =>{
      if (!p.subcategoria) return false;

      return p.subcategoria.toLowerCase().includes(nombre.toLowerCase());
    }); */
    console.log("selecion hecha")
  }
  mostrarTodos(){
    this.productoFiltrado= [...this.productos];
  }
  cargarPro(){
    this.http.get('assets/BD/productos.json')
    .subscribe((data:any)=>{this.productos=data;
        this.productoFiltrado=[...this.productos];
      });
  }
   cargarCat(){
    this.http.get('assets/BD/categoria.json').subscribe((data:any)=>{
      this.categoria=data;
    });
  } 
  buscar(event : any){
    const texto = (event?.target.value || '').toLowerCase().trim();
    if(texto===''){
      this.productoFiltrado=[...this.productos];
      return;
    }
    this.productoFiltrado = this.productos.filter(
      p=>p.titulo.toLowerCase().includes(texto) ||
      p.titulo.toLowerCase().includes(texto)
      /* p.precio.toString */
    );
  }
  irmas(producto : any){
    this.router.navigate(['/mas'], {queryParams: producto});
  }
  async verimagen(productos: any){
    //this.router.navigate(['/masi'])
    const modal= await this.modalCtrl.create({
      component: MasiComponent,
      componentProps: {imagen: productos.imagen, titulo: productos.titulo}, cssClass: 'estilo_modal'
    });
    await modal.present();
  }

  imagenesCarrusel = [
  'assets/carru/f1.jpg',
  'assets/carru/f4.png',
  'assets/carru/f5.jpg',
  'assets/carru/f12.jpeg'
  
];

slideOpts = {
  initialSlide: 0,
  speed: 600,
  autoplay: {
    delay: 3000
  },
  loop: true
};

}
