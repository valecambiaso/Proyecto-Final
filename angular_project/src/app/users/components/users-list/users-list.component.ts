import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, Subscription } from 'rxjs';
import { SessionService } from 'src/app/core/services/session.service';
import { Session } from 'src/app/models/session';
import { User } from '../../../models/user';
import { UsersService } from '../../services/users.service';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserState } from '../../state/user.reducer';
import { loadUsers, deleteUser, usersLoaded } from '../../state/user.actions';
import { loadedUsersSelector, loadingUsersSelector } from '../../state/user.selectors';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy{
    dataSource!: MatTableDataSource<User>;
    dataSource$!: Observable<MatTableDataSource<User>>; 
    columns: string[] = ['username','password','isAdmin','actions'];
    suscription!: Subscription;
    users!: User[];
    session$!: Observable<Session>;
    loading$!: Observable<Boolean>;

    constructor(
      private dialog: MatDialog,
      private usersService: UsersService,
      private router: Router,
      private session: SessionService,
      private store: Store<UserState>,
    ){}

    ngOnInit(): void {
      this.loading$ = this.store.select(loadingUsersSelector);
      this.store.dispatch(loadUsers());

      this.dataSource = new MatTableDataSource<User>();
      this.suscription = this.usersService.getAllUsersObservable().subscribe((users: User[]) => {
        this.dataSource.data = users;
      });
      
      this.dataSource$ = this.store.select(loadedUsersSelector).pipe(map((users) => new MatTableDataSource<User>(users)));
      this.session$ = this.session.getSession();
    }

    ngOnDestroy(): void {
      this.suscription.unsubscribe();
    }

    removeUser(userId: string):void{
      this.loading$ = this.store.select(loadingUsersSelector);
      this.store.dispatch(deleteUser({userId}));
    }

    openModalAdd():void{
      this.openModal('');
    }

    openModalEdit(userId: string):void{
      this.openModal(userId);
    }

    private openModal(user: string){
      const dialogRef = this.dialog.open(UserFormComponent, {data: user}).afterClosed().subscribe(()=>{
        this.loading$ = this.store.select(loadingUsersSelector);
        this.store.dispatch(loadUsers());
        this.usersService.getAllUsersObservable().subscribe((users: User[]) => {
          this.store.dispatch(usersLoaded({users: users}));
        })
        this.dataSource$ = this.store.select(loadedUsersSelector).pipe(map((users) => new MatTableDataSource<User>(users)));  
      });
    }

    seeDetails(user: User){
      this.router.navigate(['users/details', user]);
    }
}
