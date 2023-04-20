import { Reducer } from 'react';

import { UserActionTypes, UserState } from './user.types';
import { UserAction } from './user.actions';

export const userInitialState: UserState = { isAuthenticated: false, user: null };

export const userReducer: Reducer<UserState, UserActionTypes> = (
  state,
  { type, payload },
): UserState => {
  const reducer = {
    [UserAction.signIn]: { isAuthenticated: true, user: null },
    [UserAction.setUser]: { ...state, ...payload },
    [UserAction.signOut]: { ...userInitialState },
  };

  return reducer[type] ?? state;
};
