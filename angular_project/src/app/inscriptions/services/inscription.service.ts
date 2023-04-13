import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError, Observable } from 'rxjs';
import { Inscription } from "src/app/models/inscription";
import { env } from "src/environment/environment";

@Injectable()

export class InscriptionService {
  
  constructor(
    private httpClient: HttpClient
  ) {
  }

  getAllInscriptonsObservable(): Observable<Inscription[]>{
    return this.httpClient.get<Inscription[]>(`${env.apiURL}/inscriptions`).pipe(
      catchError(this.catchError)
    );
  }

  addNewInscription(inscription:Inscription):Observable<Inscription>{
    return this.httpClient.post<Inscription>(`${env.apiURL}/inscriptions`, inscription).pipe(
      catchError(this.catchError)
    );
  }

  getCoursesOfStudent(studentId: string): Observable<Inscription[]>{
    return this.httpClient.get<Inscription[]>(`${env.apiURL}/inscriptions?studentId=`+studentId).pipe(
        catchError(this.catchError)
    )
  }

  getStudentsOfCourse(courseId: string): Observable<Inscription[]>{
    return this.httpClient.get<Inscription[]>(`${env.apiURL}/inscriptions?courseId=`+courseId).pipe(
        catchError(this.catchError)
    )
  }

  removeInscription(inscriptionId: string):Observable<Inscription>{
    return this.httpClient.delete<Inscription>(`${env.apiURL}/inscriptions/${inscriptionId}`).pipe(
      catchError(this.catchError)
    );
  }

  private catchError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      alert(`Error del lado del cliente: ${error.message}`);
    }else{
      alert(`Error del lado del servidor: ${error.message}`);
    }

    return throwError(() => new Error('Error en el procesamiento de inscripciones'));
  }
  
}
