import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';
import { SessionService } from 'src/app/core/services/session.service';
import { Session } from 'src/app/models/session';
import { User } from '../../../models/user';
import { UsersService } from '../../services/users.service';
import { UserFormComponent } from '../user-form/user-form.component';

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

    constructor(
      private dialog: MatDialog,
      private usersService: UsersService,
      private router: Router,
      private session: SessionService
    ){}

    ngOnInit(): void {
      this.dataSource = new MatTableDataSource<User>();
      this.suscription = this.usersService.getAllUsersObservable().subscribe((users: User[]) => {
        this.dataSource.data = users;
      });
      this.dataSource$ = this.usersService.getAllUsersObservable().pipe(map((users) => new MatTableDataSource<User>(users)));
      this.session$ = this.session.getSession();
    }

    ngOnDestroy(): void {
      this.suscription.unsubscribe();
    }

    removeUser(userId: string):void{
      this.usersService.removeUser(userId).subscribe((user: User) => {
        this.dataSource$ = this.usersService.getAllUsersObservable().pipe(map((users) => new MatTableDataSource<User>(users)));
      });
    }

    openModalAdd():void{
      this.openModal('');
    }

    openModalEdit(userId: string):void{
      this.openModal(userId);
    }

    private openModal(user: string){
       const dialogRef = this.dialog.open(UserFormComponent, {data: user}).afterClosed().subscribe(()=>{
         this.dataSource$ = this.usersService.getAllUsersObservable().pipe(map((users) => new MatTableDataSource<User>(users)));
      });
    }

    seeDetails(user: User){
      this.router.navigate(['users/details', user]);
    }
}
