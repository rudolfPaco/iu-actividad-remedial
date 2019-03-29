import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {baseURL} from "../shared/baseurl";
import {Foto} from "../shared/foto";

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor(private http: HttpClient) {
  }

  getFotos(id: number): Observable<Foto[]> {
    // return Observable.of(ITEMS).delay(2000);
    return <Observable<Foto[]>>this.http.get(baseURL + 'fotos/' + id);
  }

  getFoto(id: number): Observable<Foto> {
    return <Observable<Foto>>this.http.get(baseURL + 'fotos/' + id);
  }

  guardarEquipo(foto: Foto): Observable<Foto> {
    const json = JSON.stringify(foto);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log(json);
    console.log(baseURL + 'fotos');
    return this.http.post<Foto>(baseURL + 'fotos', json, {headers: headers});
  }
}
