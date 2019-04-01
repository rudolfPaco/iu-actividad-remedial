import {Component, OnInit} from '@angular/core';
import {Equipo} from "../shared/equipo";
import {FormBuilder} from "@angular/forms";
import {EquipoService} from "../service/equipo.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Location} from '@angular/common';
import {FotoService} from "../service/foto.service";
import {Foto} from "../shared/foto";

@Component({
  selector: 'app-formulario-equipo-image',
  templateUrl: './formulario-equipo-image.component.html',
  styleUrls: ['./formulario-equipo-image.component.scss']
})
export class FormularioEquipoImageComponent implements OnInit {

  equipo: Equipo;
  fotos: Foto[];


  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private equipoService: EquipoService,
              private fotoService: FotoService) {
  }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.equipoService.getEquipo(+params['id']))
      .subscribe(equipo => {
        this.equipo = equipo;
      });
    this.route.params.switchMap((params: Params) => this.fotoService.getFotos(+params['id']))
      .subscribe(fotos => {
        this.fotos = fotos;
      });
  }

  mostrar() {
    return this.equipo.image == null;
  }

  ocultar() {
    return this.equipo.image != null;
  }

  mostrarFoto(indice: number): boolean {
    if (this.fotos.length > 0 && indice <= (this.fotos.length - 1))
      return true;
    else
      return false;
  }

  ocultarFoto(indice: number): boolean {
    if (this.fotos.length > 0 && indice <= (this.fotos.length - 1))
      return false;
    else
      return true;
  }

  urlFoto(indice: number): string {
    if (this.fotos.length > 0 && indice <= (this.fotos.length - 1))
      return this.fotos[indice].image;
    else
      return ".../assets/img/imgA1.jpg";
  }

  recargar(id: number) {
    this.route.params.switchMap((params: Params) => this.fotoService.getFotos(+params['id']))
      .subscribe(fotos => {
        this.fotos = fotos;
      });
  }

  subiendoando(ev: any, id: number) {
    let img: any = ev.target;
    if (img.files.length > 0) {
      this.equipoService.guardarImagen(img.files[0], id).subscribe(
        resp => {
          this.recargar(id);
          console.log(resp);
        },
        error => {
          window.location.reload();
          console.error(error);
        }
      );
    }
  }

  guardandoFoto(ev: any, id: number) {
    let img: any = ev.target;
    if (img.files.length > 0) {
      this.fotoService.guardarImagen(img.files[0], id).subscribe(
        resp => {
          console.log(resp);
        },
        error => {
          window.location.reload();
          console.error(error);
        }
      );
    }
    this.recargar(id);
  }

}
