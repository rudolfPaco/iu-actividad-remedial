import {Component, OnInit} from '@angular/core';
import {Equipo} from "../shared/equipo";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {EquipoService} from "../service/equipo.service";
import {FotoService} from "../service/foto.service";
import "rxjs-compat/add/operator/switchMap";
import {Foto} from "../shared/foto";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  fotos: Foto[];
  equipo: Equipo;
  urlVideo: SafeResourceUrl;

  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor(private equipoService: EquipoService,
              private fotoService: FotoService,
              private route: ActivatedRoute,
              private router: Router,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.fotoService.getFotos(+params['id']))
      .subscribe(fotos => {
        this.fotos = fotos;
      });
    this.route.params.switchMap((params: Params) => this.equipoService.getEquipo(+params['id']))
      .subscribe(equipo => {
        this.equipo = equipo;
      });
  }

  mostrar(algo: string) {
    console.log(algo);
    this.urlVideo = this.sanitizer.bypassSecurityTrustResourceUrl(algo);
  }

  limpiarURL(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  comprarEquipo(equipo: Equipo) {
    equipo.estado = 'vendido';
    this.equipoService.modificarEquipo(equipo).subscribe(data => {
      alert("se realizo la compra exitosamente...!")
      this.router.navigate(['/home']);
    }, error => console.log(error));
  }
}
