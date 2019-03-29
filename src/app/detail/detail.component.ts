import {Component, OnInit} from '@angular/core';
import {Equipo} from "../shared/equipo";
import {ActivatedRoute, Params} from "@angular/router";
import {EquipoService} from "../service/equipo.service";
import {FotoService} from "../service/foto.service";
import "rxjs-compat/add/operator/switchMap";
import {Foto} from "../shared/foto";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  fotos: Foto[];
  equipo: Equipo;


  constructor(private equipoService: EquipoService,
              private fotoService: FotoService,
              private route: ActivatedRoute) {
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

}
