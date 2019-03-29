import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Equipo} from "../shared/equipo";
import {Observable} from "rxjs";
import {baseURL} from "../shared/baseurl";

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(private http: HttpClient) {
  }

  getEquipos(): Observable<Equipo[]> {
    // return Observable.of(ITEMS).delay(2000);
    return <Observable<Equipo[]>>this.http.get(baseURL + 'equipos');
  }

  getEquipo(id: number): Observable<Equipo> {
    return <Observable<Equipo>>this.http.get(baseURL + 'equipos/' + id);
  }

  guardarEquipo(equipo: Equipo): Observable<Equipo> {
    const json = JSON.stringify(equipo);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log(json);
    console.log(baseURL + 'fotos');
    return this.http.post<Equipo>(baseURL + 'fotos', json, {headers: headers});
  }
}
