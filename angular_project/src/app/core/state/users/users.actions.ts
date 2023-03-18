import { createAction, props } from "@ngrx/store";
import { User } from '../../../models/user';

export const loadUsers = createAction(
    '[User List] Load Users'
);

export const usersLoaded = createAction(
    '[User List] Users Loaded', 
    props<{users: User[]}>()
);