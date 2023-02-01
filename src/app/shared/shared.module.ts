import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardContactComponent } from './components/card-contact/card-contact.component';
import { CardLoginComponent } from './components/card-login/card-login.component';
import { CardSneakersComponent } from './components/card-sneakers/card-sneakers.component';
import { SneakerProductoComponent } from './components/sneaker-producto/sneaker-producto.component';
import { SneakerImgComponent } from './components/sneaker-img/sneaker-img.component';
import { CardCestaComponent } from './components/card-cesta/card-cesta.component';
import { CardMetodoPagoComponent } from './components/card-metodo-pago/card-metodo-pago.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CarruselComponent,
    FooterComponent,
    CardContactComponent,
    CardLoginComponent,
    CardSneakersComponent,
    SneakerProductoComponent,
    SneakerImgComponent,
    CardCestaComponent,
    CardMetodoPagoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
