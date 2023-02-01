import { Component, OnInit } from '@angular/core';
import {  Shoes } from 'src/app/shared/interface/shoes.interface';
import { TiendaService } from 'src/app/shared/services/tienda.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit{

  zapatillas: Shoes[] = [];



  ngOnInit(): void {
    this.zapas();
  }

  constructor( private tienda: TiendaService){

  }

  zapas():void {
    this.tienda.getZapas()
    .subscribe((zapas) => {
      this.zapatillas = zapas;
    })
  }

}
