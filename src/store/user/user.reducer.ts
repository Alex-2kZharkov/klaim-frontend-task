import { Reducer } from 'react';

import { UserActionTypes, UserState } from './user.types';
import { UserAction } from './user.actions';

export const initialState: UserState = { isAuthenticated: false };

export const userReducer: Reducer<UserState, UserActionTypes> = (state, action): UserState => {
  const reducer = {
    [UserAction.signIn]: { isAuthenticated: true },
    [UserAction.signOut]: { isAuthenticated: false },
  };

  return reducer[action.type] ?? state;
};
