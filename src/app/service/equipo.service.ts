import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Equipo} from "../shared/equipo";
import {Observable} from "rxjs";
import 'rxjs/Rx';
import {baseURL} from "../shared/baseurl";

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipos: Equipo[];

  constructor(private http: HttpClient) {
  }

  eliminarEquipo(id: number): Observable<Equipo> {
    return <Observable<Equipo>>this.http.delete(baseURL + 'equipos/' + id);
  }

  modificarEquipo(equipo: Equipo): Observable<Equipo> {
    const json = JSON.stringify(equipo);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.put<Equipo>(baseURL + 'equipos/update/estado', json, {headers: headers}).map(res => {
      console.log(res);
      return res;
    });
  }

  buscarEquiposCategoria(cat: string): Observable<Equipo[]> {
    return <Observable<Equipo[]>>this.http.get(baseURL + 'equipos/byCategoria/' + cat);
  }

  buscarEquipos(termino: string): Equipo[] {
    let equiposEncontrados: Equipo[] = [];
    termino = termino.toLowerCase();
    this.getEquipos().subscribe(equipos => this.equipos = equipos);
    console.log(this.equipos);
    if (this.equipos != null) {
      for (let equipo of this.equipos) {
        let categoria = equipo.categoria.toLowerCase();
        let marca = equipo.marca.toLowerCase();
        let modelo = equipo.modelo.toLowerCase();
        let capacidad = equipo.capacidad.toLowerCase();
        let precio = String(equipo.precio).toLowerCase();
        if (categoria.indexOf(termino) >= 0 || marca.indexOf(termino) >= 0 || modelo.indexOf(termino) >= 0 || capacidad.indexOf(termino) >= 0 || precio.indexOf(termino) >= 0) {
          equiposEncontrados.push(equipo);
        }
      }
    }


    return equiposEncontrados;
  }

  getCategorias(): Observable<String[]> {
    return <Observable<String[]>>this.http.get(baseURL + 'equipos/categorias');
  }

  getEquipos(): Observable<Equipo[]> {
    // return Observable.of(ITEMS).delay(2000);
    return <Observable<Equipo[]>>this.http.get(baseURL + 'equipos');
  }

  getEquipo(id: number): Observable<Equipo> {
    return <Observable<Equipo>>this.http.get(baseURL + 'equipos/' + id);
  }

  guardarImagen(file: File, id: number): Observable<Response> {
    let form = new FormData();
    form.append('file', file);
    return this.http.post<Response>(baseURL + 'equipos/' + id + '/image', form);
  }

  guardarEquipo(equipo: Equipo): Observable<Equipo> {
    const json = JSON.stringify(equipo);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<Equipo>(baseURL + 'equipos', json, {headers: headers}).map(res => {
      console.log(res);
      return res;
    });
  }
}
