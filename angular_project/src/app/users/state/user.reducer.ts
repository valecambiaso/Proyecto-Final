import { createFeature, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { User } from '../../models/user';

export const userFeatureKey = 'userState';

export interface UserState {
  loading: boolean;
  users: User[];
}

export const initialState: UserState = {
  loading: false,
  users: []
};

export const reducer = createReducer(
  initialState,
  on(UserActions.loadUsers, (state) => {
    return {...state, loading: true};
  }),

  on(UserActions.usersLoaded, (state, {users}) => {
    return {...state, loading: false, users: users};
  }),
  on(UserActions.addUser, (state, {user: User}) => {
    return state;
  }),
  on(UserActions.editUser, (state, {user: Usesr,userId: string}) => {
    return state;
  }),
  on(UserActions.deleteUser, (state, {userId: string}) => {
    return state;
  })
);
