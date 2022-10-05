import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { ArticuloFamilia, ArticulosFamilias } from '../models/articulo-familia';

@Injectable({ providedIn: 'root' })
export class ArtFliaService {
  resUrl: string;
  constructor(private httpCliente: HttpClient) {
    this.resUrl = 'https://pav2.azurewebsites.net/api/ArticulosFamilias/';
  }
  get() {
    return this.httpCliente.get<ArticuloFamilia[]>(this.resUrl);
  }
}
