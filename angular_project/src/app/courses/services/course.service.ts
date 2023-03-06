import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Course } from 'src/app/models/course';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { env } from 'src/environment/environment';
import { catchError, throwError } from 'rxjs';

@Injectable()

export class CourseService {
  
  constructor(
    private httpClient: HttpClient
  ) {
  }

  getCourseById(courseId:string): Observable<Course>{
    return this.httpClient.get<Course>(`${env.apiURL}/courses/`+courseId).pipe(
      catchError(this.catchError)
    );
  }

  getAllCoursesObservable(): Observable<Course[]>{
    return this.httpClient.get<Course[]>(`${env.apiURL}/courses`).pipe(
      catchError(this.catchError)
    );
  }
  
  addNewCourse(course:Course): Observable<Course>{
    return this.httpClient.post<Course>(`${env.apiURL}/courses`, course).pipe(
      catchError(this.catchError)
    );
  }

  editCourses(course:Course, courseId:string): Observable<Course>{
    return this.httpClient.put<Course>(`${env.apiURL}/courses/${courseId}`, course).pipe(
      catchError(this.catchError)
    );
  }

  removeCourse(courseId:string): Observable<Course>{
    return this.httpClient.delete<Course>(`${env.apiURL}/courses/${courseId}`).pipe(
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
