import { createContext, ReactNode, useReducer } from 'react';

import { UserContextType } from './user.types';
import { userInitialState, userReducer } from './user.reducer';

type Props = {
  children?: ReactNode;
};

export const UserContext = createContext<UserContextType>({
  state: userInitialState,
  dispatch: () => undefined,
});

export const UserProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(userReducer, userInitialState);

  return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};
