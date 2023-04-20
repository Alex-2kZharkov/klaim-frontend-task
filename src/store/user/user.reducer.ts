import { Reducer } from 'react';

import { UserActionTypes, UserState } from './user.types';
import { UserAction } from './user.actions';

export const useInitialState: UserState = { isAuthenticated: false };

export const userReducer: Reducer<UserState, UserActionTypes> = (
  state,
  { type, payload },
): UserState => {
  const reducer = {
    [UserAction.signIn]: payload,
    [UserAction.signOut]: payload,
  };

  return reducer[type] ?? state;
};
