import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, filter, from, map, Observable, of } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students$!: BehaviorSubject<Student[]>;

  private students: Student[] = [
    {
      name: 'Alejo',
      surname: 'Torres',
      email: 'alejo@gmail.com',
      cellphone: 154356789,
      bornDate: new Date(1998,10,28),
      isActive: true
    },
    {
      name: 'Ana',
      surname: 'Carrera',
      email: 'ana@gmail.com',
      cellphone: 155654374,
      bornDate: new Date(1999,11,1),
      isActive: true
    },
    {
      name: 'Paula',
      surname: 'Diez',
      email: 'paula@gmail.com',
      cellphone: 156432435,
      bornDate: new Date(1997,9,23),
      isActive: false
    },
    {
      name: 'Diego',
      surname: 'Barrios',
      email: 'diego@gmail.com',
      cellphone: 154637448,
      bornDate: new Date(1998,1,10),
      isActive: false
    },
  ];

  constructor() {
    this.students$ = new BehaviorSubject(this.students);
  }

  getStudentPromise(index: number): Promise<Student>{
    return new Promise((resolve, reject) => {
      let student = this.students[index];
      if(student){
        resolve(student);
      }else{
        reject({
          errCode: -1,
          description: "error al obtener estudiante " + index
        });
      }
    });
  }

  getAllStudentsObservable(): Observable<Student[]>{
    return this.students$.asObservable();
  }
  
  addNewStudent(student:Student):void{
    this.students.unshift(student);
    this.students$.next(this.students);
  }

  editStudent(student:Student, index:number):void{
    this.students.splice(index,1);
    this.students.unshift(student);
    this.students$.next(this.students);
  }

  removeStudent(studentIndex: number):void{
    this.students.splice(studentIndex,1);
    this.students$.next(this.students);
  }
  
  activeStudents(){
    return from(this.students).pipe(
      filter((student: Student) => student.isActive),
      map((student) => {return student}),
      catchError((error) => {throw new Error(error)})
    );
  }
}
