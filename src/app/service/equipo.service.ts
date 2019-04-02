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
