import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { IdentificarseComponent } from './pages/identificarse/identificarse.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  {
    path:'',
    component: InicioComponent,
    pathMatch: 'full'
  },
  {
    path: 'contacto',
    component:ContactoComponent
  },
  {
    path: 'identificate',
    component:IdentificarseComponent
  },
  {
    path: 'carrito',
    component:CarritoComponent
  },
  {
    path: 'productos',
    component:ProductosComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
