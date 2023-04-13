import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFormComponent } from './student-form.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { StudentsRoutingModule } from '../../students-routing.module';
import { StudentService } from '../../services/student.service';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import { studentFeatureKey } from '../../state/student.reducer';
import { reducer } from '../../../authentication/state/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StudentStateEffects } from '../../state/student.effects';

describe('Pruebas unitarias de student-form-component', () => {
  let component: StudentFormComponent;
  let fixture: ComponentFixture<StudentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFormComponent ],
      imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        SharedModule,
        StudentsRoutingModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(studentFeatureKey,reducer),
        EffectsModule.forRoot({}),
        EffectsModule.forFeature(StudentStateEffects)
      ],
      providers: [
        StudentService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente se crea correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario se mantine inválido cuando los campos requeridos son vacíos', () => {
    const form = component.studentForm;

    expect(form.valid).toBeFalse();
  })

  it('El formulario es válido cuando los campos requeridos están completos', () =>{
    const form = component.studentForm;

    const name = form.controls["name"];
    const surname = form.controls["surname"];
    const email = form.controls["email"];
    const cellphone = form.controls["cellphone"];
    const bornDate = form.controls["bornDate"];
    const isActive = form.controls["isActive"];

    name.setValue('nombre');
    surname.setValue('apellido');
    email.setValue('email@email.com');
    cellphone.setValue(123456789);
    bornDate.setValue('1997/08/01');
    isActive.setValue(true);

    expect(form.valid).toBeTrue();
  })

  it('El formulario es inválido cuando alguno de los campos requeridos no tienen el formato adecuado', () =>{
    const form = component.studentForm;

    const name = form.controls["name"];
    const surname = form.controls["surname"];
    const email = form.controls["email"];
    const cellphone = form.controls["cellphone"];
    const bornDate = form.controls["bornDate"];
    const isActive = form.controls["isActive"];

    name.setValue('nombre');
    surname.setValue('apellido');
    email.setValue('email'); //incorrecto
    cellphone.setValue(123456789);
    bornDate.setValue('1997/08/01');
    isActive.setValue(true);

    expect(form.valid).toBeFalse();
  })
});
