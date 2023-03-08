import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { SessionService } from '../../core/services/session.service';
import { Session } from '../../models/session';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/environment/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private session: SessionService,
    private httpClient: HttpClient,
    private router: Router
  ) { }

  login(user: User){ //users?username=admin
    this.httpClient.get<User[]>(`${env.apiURL}/users?username=`+user.username+`&password=`+user.password+`&isAdmin=`+user.isAdmin).subscribe((userDB: User[]) => {
      if(userDB.length > 0){
          let session: Session = {
            activeSession: true,
            activeUser: user
          };
          this.session.createSession(session);
          this.router.navigate(['home']);
      }else{
        alert('Usuario no existente o credenciales incorrectas')
      }
    })
  }
}
