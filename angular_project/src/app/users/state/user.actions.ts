import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user';

export const loadUsers = createAction(
  '[UserState] Load Users'
);

export const usersLoaded = createAction(
  '[UserState] Users Loaded', 
  props<{users: User[]}>()
);

export const addUser = createAction(
  '[UserState] User Added',
  props<{user: User}>()
);

export const deleteUser = createAction(
  '[UserState] User Deleted',
  props<{userId: string}>()
);

export const editUser = createAction(
  '[UserState] User Edited',
  props<{user: User, userId: string}>()
);






