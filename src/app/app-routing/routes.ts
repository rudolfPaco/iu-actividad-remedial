import {Routes} from '@angular/router';

import {HomeComponent} from '../home/home.component';
import {DetailComponent} from "../detail/detail.component";
import {FormularioEquipoComponent} from "../formulario-equipo/formulario-equipo.component";
import {FormularioEquipoImageComponent} from "../formulario-equipo-image/formulario-equipo-image.component";
import {BuscarComponent} from "../buscar/buscar.component";
import {CategoriasComponent} from "../categorias/categorias.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'buscar/:termino', component: BuscarComponent},
  {path: 'categorias/:cat', component: CategoriasComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'formularioEquipo', component: FormularioEquipoComponent},
  {path: 'formularioEquipoImage/:id', component: FormularioEquipoImageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
