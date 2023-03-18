import { createReducer, on } from '@ngrx/store';
import { UserState } from '../../../models/user.state';
import { usersLoaded, loadUsers } from './users.actions';
const initialState: UserState = {
    loading: false,
    users: []
}

export const usersReducer = createReducer(
    initialState,
    on(loadUsers, (state) => {
        const newState: UserState = {
            loading: true,
            users: state.users
        }
        return newState;
    }),
    on(usersLoaded, (state, {users}) => {
        const newState: UserState = {
            loading: false,
            users: users
        }
        return newState;
    })
);