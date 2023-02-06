import { Component, Input } from '@angular/core';
import {  Shoes } from '../../interface/shoes.interface';

@Component({
  selector: 'app-sneaker-producto',
  templateUrl: './sneaker-producto.component.html',
  styleUrls: ['./sneaker-producto.component.scss']
})
export class SneakerProductoComponent {
  @Input() item!: Shoes;

}
