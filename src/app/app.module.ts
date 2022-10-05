import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ArticulosFliasComponent } from './components/articulos-flias/articulos-flias.component';
import { MenuComponent } from './components/menu/menu.component';
import { ArticuloComponent } from './components/articulo/articulo.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'articulosfamilias', component: ArticulosFliasComponent },
      { path: 'articulos', component: ArticuloComponent },
    ]),
  ],
  exports: [RouterModule],
  declarations: [
    AppComponent,
    InicioComponent,
    ArticulosFliasComponent,
    MenuComponent,
    ArticuloComponent,
  ],
  bootstrap: [AppComponent, InicioComponent, ArticulosFliasComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppModule {}
