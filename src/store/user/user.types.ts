import { Dispatch } from 'react';

import { UserAction } from './user.actions';
import { Nullable, UserProfileDto } from '../../types';

export type UserState = {
  isAuthenticated: boolean;
  user: Nullable<UserProfileDto>;
};

export type UserActionTypes = {
  type: (typeof UserAction)[keyof typeof UserAction];
  payload?: UserState;
};

export type UserContextType = {
  state: UserState;
  dispatch: Dispatch<UserActionTypes>;
};
