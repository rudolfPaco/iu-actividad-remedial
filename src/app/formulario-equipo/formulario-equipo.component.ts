import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Equipo} from "../shared/equipo";
import {HttpClient} from "@angular/common/http";
import {EquipoService} from "../service/equipo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-formulario-equipo',
  templateUrl: './formulario-equipo.component.html',
  styleUrls: ['./formulario-equipo.component.scss']
})
export class FormularioEquipoComponent implements OnInit {

  equipoForm: FormGroup;
  equipo: Equipo;

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private equipoService: EquipoService,
              private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.equipoForm = this.fb.group({
      codigo: ['', Validators.required],
      categoria: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      capacidad: ['', Validators.required],
      precio: [0, Validators.required],
      costoTotal: [0, ''],
      estado: ['disponible', ''],
      urlVideo: ['', Validators.required],
      image: [null, '']
    });
  }

  guardarNuevoEquipo() {
    this.equipo = this.equipoForm.value;
    this.equipoService.guardarEquipo(this.equipo).subscribe(data => {
      this.router.navigate(['/formularioEquipoImage', data.id])
    }, error => console.log(error));

    this.equipoForm.reset({
      codigo: '',
      categoria: '',
      marca: '',
      modelo: '',
      capacidad: '',
      precio: '',
      costoTotal: '',
      urlVideo: '',
      image: '',
      estado: ''
    });
    // work around
    const form: HTMLFormElement = <HTMLFormElement>document.getElementById('form');
    form.reset();
  }

}
