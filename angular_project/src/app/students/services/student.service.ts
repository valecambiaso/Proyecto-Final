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

  getStudentById(studentId: string): Observable<Student>{
    return this.httpClient.get<Student>(`${env.apiURL}/students/` + studentId).pipe(
      catchError(this.catchError)
    );
  }

  getAllStudentsObservable(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${env.apiURL}/students`).pipe(
      catchError(this.catchError)
    );
  }
  
  addNewStudent(student:Student):Observable<Student>{
    return this.httpClient.post<Student>(`${env.apiURL}/students`, student).pipe(
      catchError(this.catchError)
    );
  }

  editStudent(student:Student, studentId:string):Observable<Student>{
    return this.httpClient.put<Student>(`${env.apiURL}/students/${studentId}`, student).pipe(
      catchError(this.catchError)
    );
  }

  removeStudent(studentId: string):Observable<Student>{
    return this.httpClient.delete<Student>(`${env.apiURL}/students/${studentId}`).pipe(
      catchError(this.catchError)
    );
  }

  private catchError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      alert(`Error del lado del cliente: ${error.message}`);
    }else{
      alert(`Error del lado del servidor: ${error.message}`);
    }

    return throwError(() => new Error('Error en el procesamiento de alumnos'));
  }
}
