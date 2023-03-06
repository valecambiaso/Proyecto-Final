import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Student } from '../../models/student';
import { env } from 'src/environment/environment';

@Injectable()

export class StudentService {
  
  constructor(
    private httpClient: HttpClient,
  ) {

  }

  getStudentPromise(studentId: string){
    /*return new Promise((resolve, reject) => {
      this.httpClient.get<Student>(`${env}/students/` + studentId).subscribe(student => {
        if(student.id === studentId){
          resolve(student)
        }else{
        reject({
          errCode: -1,
          description: "error al obtener estudiante " + studentId
        });
        }
      })
    });*/
  }

  getAllStudentsObservable(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${env.apiURL}/students`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.captureError)
    );
  }
  
  addNewStudent(student:Student):void{
    
  }

  editStudent(student:Student, index:number):void{
    
  }

  removeStudent(studentIndex: number):void{
    
  }
  
  activeStudents(){
    
  }

  private captureError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      alert(`Error del lado del cliente: ${error.message}`);
    }else{
      alert(`Error del lado del servidor: ${error.message}`);
    }

    return throwError(() => new Error('Error en el procesamiento de alumnos'));
  }
}
