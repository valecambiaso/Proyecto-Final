import { createAction, props } from '@ngrx/store';
import { Session } from '../../models/session';

export const loadAuths = createAction(
  '[Auth] Load Auths',
  props<{session: Session}>()
);


