import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { SessionService } from '../../core/services/session.service';
import { Session } from '../../models/session';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/environment/environment';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private session: SessionService,
    private httpClient: HttpClient,
    private router: Router
  ) { }

  login(user: User): Observable<Session>{ //users?username=admin
    return this.httpClient.get<User[]>(`${env.apiURL}/users`).pipe(
      map((users: User[]) => {
        let validatedUser = users.find((u: User) => u.username === user.username && u.password === user.password && u.isAdmin === user.isAdmin);
        if(validatedUser) {
          const session: Session = {
            activeSession: true,
            activeUser: validatedUser
          }
          return session;
        }else{
          const session: Session = {
            activeSession: false
          }
          return session;
        }
      })
    );
  }
}
