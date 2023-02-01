import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shoes } from '../interface/shoes.interface';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  private apiUrl: string =  'http://localhost:3000/shoes'

  constructor(private http: HttpClient) { }

  getZapas():Observable <Shoes[]> {
    return this.http.get<Shoes[]>(this.apiUrl);
  }

}

