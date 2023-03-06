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
    return this.httpClient.get<Course>(`${env.apiURL}/courses/`+courseId)
  }

  getAllCoursesObservable(): Observable<Course[]>{
    return this.httpClient.get<Course[]>(`${env.apiURL}/courses`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.captureError)
    );
  }
  
  addNewCourse(course:Course): Observable<Course>{
    return this.httpClient.post<Course>(`${env.apiURL}/courses`, course)
  }

  editCourses(course:Course, courseId:string): Observable<Course>{
    return this.httpClient.put<Course>(`${env.apiURL}/courses/${courseId}`, course);
  }

  removeCourse(courseId:string): Observable<Course>{
    return this.httpClient.delete<Course>(`${env.apiURL}/courses/${courseId}`);
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
