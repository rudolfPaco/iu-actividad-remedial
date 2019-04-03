import {Component, OnInit} from '@angular/core';
import {EquipoService} from "../service/equipo.service";
import {ActivatedRoute} from "@angular/router";
import {Equipo} from "../shared/equipo";

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  termino: string;
  equipos: Equipo[];

  constructor(private equipoService: EquipoService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.termino = params['cat'];
      this.equipoService.buscarEquiposCategoria(params['cat']).subscribe(equipos => {
        this.equipos = equipos;
        console.log(equipos);
      });
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
