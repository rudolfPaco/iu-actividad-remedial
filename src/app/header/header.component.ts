import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EquipoService} from "../service/equipo.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  categorias: String[];
  categoria: string;

  constructor(private router: Router,
              private equipoService: EquipoService) {


  }

  ngOnInit() {
    this.equipoService.getCategorias().subscribe(categorias => {
      this.categorias = categorias;
    })
  }

  mostrarCategorias(cat: String) {
    console.log(cat);
    this.router.navigate(['/categorias', cat]);
  }

  buscarEquipo(termino: String) {
    this.router.navigate(['/buscar', termino]);
  }
}
