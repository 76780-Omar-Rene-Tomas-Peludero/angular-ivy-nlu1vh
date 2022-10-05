import { Injectable } from '@angular/core';
import { Articulo } from '../models/articulo';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ArtService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.resourceUrl = 'https://pav2.azurewebsites.net/api/Articulos/';
  }

  get() {
    return this.httpClient.get<Articulo[]>(this.resourceUrl);
  }
}
