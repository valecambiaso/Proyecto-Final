import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { SessionService } from '../services/session.service';
import { Session } from 'src/app/models/session';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private session: SessionService,
    private router: Router
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.session.getSession().pipe(
        map((session: Session) => {
          if(session.activeUser?.isAdmin){
            return true;
          }else{
            alert('No tiene los permisos necesarios')
            this.router.navigate(['home']);
            return false;
          }
        })
      );
  }
  
}
