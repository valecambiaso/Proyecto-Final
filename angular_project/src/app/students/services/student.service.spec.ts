import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { StudentService } from './student.service';
import { Student } from '../../models/student';

describe('StudentService', () => {
  let service: StudentService;
  let httpClientSpy: {get: jasmine.Spy}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ],
      providers: [
        StudentService
      ]
    }).compileComponents();
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new StudentService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Servicio retorna arreglo de datos mockeados', (done: DoneFn) => {
    let date = new Date();
    const mockDatos: Student[] = [
      {
        "id": "1",
        "name": "Alejo",
        "surname": "Santos",
        "email": "alejo@gmail.com",
        "cellphone": 154356789,
        "bornDate": date,
        "isActive": true
      },
      {
        "id": "2",
        "name": "Ana",
        "surname": "Carrera",
        "email": "ana@gmail.com",
        "cellphone": 155654374,
        "bornDate": date,
        "isActive": true
      },
      {
        "id": "3",
        "name": "Paula",
        "surname": "Diez",
        "email": "paula@gmail.com",
        "cellphone": 156432435,
        "bornDate": date,
        "isActive": false
      },
      {
        "id": "4",
        "name": "Diego",
        "surname": "Barrio",
        "email": "diego@gmail.com",
        "cellphone": 154637448,
        "bornDate": date,
        "isActive": false
      }
    ];

    httpClientSpy.get.and.returnValue(of(mockDatos));
    service.getAllStudentsObservable().subscribe((students: Student[])=> {
      expect(students).toEqual(mockDatos);
      done();
    })
  })
});
