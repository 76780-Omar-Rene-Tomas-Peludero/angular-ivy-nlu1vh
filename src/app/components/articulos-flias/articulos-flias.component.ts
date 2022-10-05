import { Component, OnInit } from '@angular/core';
//import { ArticulosFamilias } from '../../models/articulo-familia';
//llamamos al servicio de articulos flias
//import { MockArtFliaService } from '../../services/mock-art-flia.service';
import { ArtFliaService } from '../../services/art-flia.service';
//no llamamos a la tabla construida si no que llamamos al tipo de elemento
import { ArticuloFamilia } from '../../models/articulo-familia';

@Component({
  selector: 'app-articulos-flias',
  templateUrl: './articulos-flias.component.html',
  styleUrls: ['./articulos-flias.component.css'],
})
export class ArticulosFliasComponent implements OnInit {
  Titulo = 'Articulos Familias';
  //Items = ArticulosFamilias;
  Items: ArticuloFamilia[] = [];

  //aca creamos la variable que usaremos para llamar las funciones en el servicio
  //private articulosFamiliasService:  MockArticulosFamiliasService
  constructor(private artFliaSs: ArtFliaService) {}

  ngOnInit() {
    this.getFliaArt();
  }

  //se crea el get propio de art flia
  getFliaArt() {
    this.artFliaSs.get().subscribe((rdo: ArticuloFamilia[]) => {
      this.Items = rdo;
    });
  }
}
