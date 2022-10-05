import { Injectable } from '@angular/core';

//Se importa la libreria rx.js para poder simular una llamada asincronica, tal cual como será cuando se invoque la webapi del backend.
import { of } from 'rxjs';

import { ArticulosFamilias } from '../models/articulo-familia';

@Injectable({ providedIn: 'root' })
export class MockArtFliaService {
  constructor() {}
  get() {
    return of(ArticulosFamilias);
  }
}
