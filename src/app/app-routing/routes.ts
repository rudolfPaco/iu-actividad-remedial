import {Routes} from '@angular/router';

import {HomeComponent} from '../home/home.component';
import {DetailComponent} from "../detail/detail.component";
import {FormularioEquipoComponent} from "../formulario-equipo/formulario-equipo.component";
import {FormularioEquipoImageComponent} from "../formulario-equipo-image/formulario-equipo-image.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'formularioEquipo', component: FormularioEquipoComponent},
  {path: 'formularioEquipoImage/:id', component: FormularioEquipoImageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
