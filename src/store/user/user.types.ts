import { Dispatch } from 'react';

import { UserAction } from './user.actions';

export type UserState = {
  isAuthenticated: boolean;
};

export type UserActionTypes = {
  type: (typeof UserAction)[keyof typeof UserAction];
};

export type UserContextType = {
  state: UserState;
  dispatch: Dispatch<UserActionTypes>;
};
