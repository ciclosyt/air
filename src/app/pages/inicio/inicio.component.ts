import { TiendaService } from './../../shared/services/tienda.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit{


  ngOnInit(): void {
    this.prueba()
  }

  constructor( private tienda: TiendaService ) { }

  prueba(){
    this.tienda.getZapas().subscribe( (zapa) => {
      console.log('Estas son nuestras zapas', zapa)
    });
  }
}
