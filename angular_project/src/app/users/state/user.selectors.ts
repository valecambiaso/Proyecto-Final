import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from './user.reducer';

export const selectUserState = createFeatureSelector<fromUser.UserState>(
  fromUser.userFeatureKey
);

export const loadingUsersSelector = createSelector(
  selectUserState,
  (state: fromUser.UserState) => state.loading
);

export const loadedUsersSelector = createSelector(
  selectUserState,
  (state: fromUser.UserState) => state.users
);