import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { concatMap, map } from "rxjs";
import { UsersService } from '../services/users.service';
import { addUser, deleteUser, editUser, loadUsers, usersLoaded } from './user.actions';
import { User } from '../../models/user';

@Injectable()
export class UserStateEffects {
  loadUsers$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loadUsers),
      concatMap(() => {
        return this.userService.getAllUsersObservable().pipe(
          map((u: User[]) => usersLoaded({users: u}))
        )
      })
    );
  });

  addUser$ = createEffect(() => {
    return this.action$.pipe(
      ofType(addUser),
      concatMap(({user}) => {
        return this.userService.addNewUser(user).pipe(
          map((u: User) => loadUsers())
        )
      })
    );
  });

  deleteUser$ = createEffect(() => {
    return this.action$.pipe(
      ofType(deleteUser),
      concatMap(({userId}) => {
        return this.userService.removeUser(userId).pipe(
          map((u: User) => loadUsers())
        )
      })
    );
  });

  editUser$ = createEffect(() => {
    return this.action$.pipe(
      ofType(editUser),
      concatMap(({user, userId}) => {
        return this.userService.editUser(user, userId).pipe(
          map((u: User) => loadUsers())
        )
      })
    );
  });

  constructor(
    private userService: UsersService,
    private action$: Actions
  ){}

}
