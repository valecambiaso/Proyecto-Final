import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Session } from 'src/app/models/session';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  session$!: Observable<Session>;

  constructor(
    private router: Router,
    private sessionService: SessionService
  ){}

  ngOnInit(): void {
    this.session$ = this.sessionService.getSession();
  }

  logout(){
    let session: Session = {
      activeSession: false
    }
    this.sessionService.logout(session);
    this.router.navigate(['auth/login']);
  }
}
