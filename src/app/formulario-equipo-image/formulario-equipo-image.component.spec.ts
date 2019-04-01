import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormularioEquipoImageComponent} from './formulario-equipo-image.component';

describe('FormularioEquipoImageComponent', () => {
  let component: FormularioEquipoImageComponent;
  let fixture: ComponentFixture<FormularioEquipoImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioEquipoImageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEquipoImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
