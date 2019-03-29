import {Component, Inject, OnInit} from '@angular/core';
import {Equipo} from "../shared/equipo";
import {EquipoService} from "../service/equipo.service";
import {FotoService} from "../service/foto.service";
import {Foto} from "../shared/foto";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  equipos: Equipo[];
  fotos: Foto[];
  equipo: Equipo;
  id: number;


  constructor(private equipoService: EquipoService,
              private fotoService: FotoService,
              @Inject('BaseURL') private BaseURL) {
  }

  ngOnInit(): void {
    this.equipoService.getEquipos().subscribe(equipos => this.equipos = equipos);
  }
}
