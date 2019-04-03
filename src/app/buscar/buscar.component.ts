import {Component, Inject, OnInit} from '@angular/core';
import {Equipo} from "../shared/equipo";
import {EquipoService} from "../service/equipo.service";
import {FotoService} from "../service/foto.service";
import {Foto} from "../shared/foto";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  equipos: Equipo[];
  fotos: Foto[];
  equipo: Equipo;
  id: number;
  termino: string;


  constructor(private equipoService: EquipoService,
              private route: ActivatedRoute,
              private fotoService: FotoService,
              @Inject('BaseURL') private BaseURL) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.termino = params['termino'];
      this.equipos = this.equipoService.buscarEquipos(params['termino']);
    })
  }

  mostrarVendido(estado: String) {
    if (estado == "disponible")
      return true;
  }

  mostrarDisponible(estado: String) {
    if (estado == "vendido")
      return true;
  }

  eliminarEquipo(id: number) {
    this.equipoService.eliminarEquipo(id).subscribe(equipo => {
      console.log(equipo);
      alert("se elimino el equipo correctamente...!");
      window.location.reload();
    })
  }

}
