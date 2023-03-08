import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from 'src/app/models/user';
import { env } from 'src/environment/environment';

@Injectable()

export class UsersService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUserById(userId: string): Observable<User>{
    return this.httpClient.get<User>(`${env.apiURL}/users/` + userId).pipe(
      catchError(this.catchError)
    );
  }

  getAllUsersObservable(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${env.apiURL}/users`).pipe(
      catchError(this.catchError)
    );
  }
  
  addNewUser(user:User):Observable<User>{
    return this.httpClient.post<User>(`${env.apiURL}/users`, user).pipe(
      catchError(this.catchError)
    );
  }

  editUser(user:User, userId:string):Observable<User>{
    return this.httpClient.put<User>(`${env.apiURL}/users/${userId}`, user).pipe(
      catchError(this.catchError)
    );
  }

  removeUser(userId: string):Observable<User>{
    return this.httpClient.delete<User>(`${env.apiURL}/users/${userId}`).pipe(
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
