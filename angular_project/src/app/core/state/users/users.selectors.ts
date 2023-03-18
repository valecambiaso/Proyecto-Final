import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { UserState } from '../../../models/user.state';

export const userSelector = (state: AppState) => {
    return state.users;
};

export const loadingUsersSelector = createSelector(
    userSelector,
    (state: UserState) => {
        return state.loading;
    }
);

export const loadedUsersSelector = createSelector(
    userSelector,
    (state: UserState) => {
        return state.users; 
    }
)