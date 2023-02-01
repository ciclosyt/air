import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from "./contacto/contacto.component";
import { IdentificarseComponent } from "./identificarse/identificarse.component";
import { ProductosComponent } from "./productos/productos.component";
import { CarritoComponent } from "./carrito/carrito.component";
import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  declarations: [
    InicioComponent,
    ContactoComponent,
    IdentificarseComponent,
    ProductosComponent,
    CarritoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InicioComponent,
    ContactoComponent,
    IdentificarseComponent,
    ProductosComponent,
    CarritoComponent
  ]
})
export class PageModule { }
