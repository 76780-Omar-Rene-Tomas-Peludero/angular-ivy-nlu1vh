import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../models/articulo';
import { ArtService } from '../../services/art.service';
//import { MockArtService } from '../../services/mock-art.service';
//import { MockArtFliaService } from '../../services/mock-art-flia.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
})
export class ArticuloComponent implements OnInit {
  Titulo = 'Articulos';
  Items: Articulo[] = [];

  constructor(private ArtService: ArtService) {}

  ngOnInit() {
    this.GetArticulos();
  }

  GetArticulos() {
    this.ArtService.get().subscribe((data: Articulo[]) => {
      this.Items = (data as any).Items;
    });
  }
  // TituloAccionABMC: { [index: string]: string } = {
  //   A: '(Agregar)',
  //   B: '(Eliminar)',
  //   M: '(Modificar)',
  //   C: '(Consultar)',
  //   L: '(Listado)',
  // };
  // AccionABMC: string = 'L'; // inicia en el listado de articulos (buscar con parametros)

  // Mensajes = {
  //   SD: ' No se encontraron registros...',
  //   RD: ' Revisar los datos ingresados...',
  // };

  // Items: Articulo[] | null = null;
  // RegistrosTotal: number = 1;
  // Familias: ArticuloFamilia[] | null = null;
  // Pagina = 1; // inicia pagina 1

  // // opciones del combo activo
  // OpcionesActivo = [
  //   { Id: null, Nombre: '' },
  //   { Id: true, Nombre: 'SI' },
  //   { Id: false, Nombre: 'NO' },
  // ];

  // constructor(
  //   private articulosService: MockArtService,
  //   private articulosFamiliasService: MockArtFliaService
  // ) {}

  // ngOnInit() {
  //   this.GetFamiliasArticulos();
  // }

  // GetFamiliasArticulos() {
  //   this.articulosFamiliasService.get().subscribe((res: ArticuloFamilia[]) => {
  //     this.Familias = res;
  //   });
  // }

  // Agregar() {
  //   this.AccionABMC = 'A';
  // }

  // // Buscar segun los filtros, establecidos en FormRegistro
  // Buscar() {
  //   this.articulosService.get('', null, this.Pagina).subscribe((res: any) => {
  //     this.Items = res.Items;
  //     this.RegistrosTotal = res.RegistrosTotal;
  //   });
  // }

  // // Obtengo un registro especifico según el Id
  // BuscarPorId(Item: Articulo, AccionABMC: string) {
  //   window.scroll(0, 0); // ir al incio del scroll
  //   this.AccionABMC = AccionABMC;
  // }

  // Consultar(Item: Articulo) {
  //   this.BuscarPorId(Item, 'C');
  // }

  // // comienza la modificacion, luego la confirma con el metodo Grabar
  // Modificar(Item: Articulo) {
  //   if (!Item.Activo) {
  //     alert('No puede modificarse un registro Inactivo.');
  //     return;
  //   }
  //   this.BuscarPorId(Item, 'M');
  // }

  // // grabar tanto altas como modificaciones
  // Grabar() {
  //   alert('Registro Grabado!');
  //   this.Volver();
  // }

  // ActivarDesactivar(Item: Articulo) {
  //   var resp = confirm(
  //     'Esta seguro de ' +
  //       (Item.Activo ? 'desactivar' : 'activar') +
  //       ' este registro?'
  //   );
  //   if (resp === true) alert('registro activado/desactivado!');
  // }

  // // Volver desde Agregar/Modificar
  // Volver() {
  //   this.AccionABMC = 'L';
  // }

  // ImprimirListado() {
  //   alert('Sin desarrollar...');
  // }
}
