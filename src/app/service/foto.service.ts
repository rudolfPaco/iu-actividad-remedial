import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
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

  guardarImagen(file: File, id: number): Observable<Response> {
    let form = new FormData();
    form.append('file', file);
    return this.http.post<Response>(baseURL + 'fotos/' + id + '/image', form);
  }
}
