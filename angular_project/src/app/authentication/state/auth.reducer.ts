import { createFeature, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { Session } from '../../models/session';

export const authFeatureKey = 'auth';

export interface AuthState {
  session: Session
}

export const initialState: AuthState = {
  session: {
    activeSession: false
  }
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.loadAuths, (state, {session}) => {
    return {...state, session: {
      activeSession: true,
      activeUser: session.activeUser
    }}
  }),

);