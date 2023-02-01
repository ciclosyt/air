import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  // private apiUrl: string =  'http://localhost:3000'
  private apiUrl: string =  'https://pokeapi.co/api/v2/'

  constructor(private http: HttpClient) { }

  getZapas() :Observable <any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

}

