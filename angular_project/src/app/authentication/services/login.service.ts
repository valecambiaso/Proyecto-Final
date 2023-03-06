import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { SessionService } from '../../core/services/session.service';
import { Session } from '../../models/session';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private session: SessionService
  ) { }

  login(user: User){
    let session: Session = {
      activeSession: true,
      activeUser: user
    };
    this.session.createSession(session);
  }
}
