import { createContext, ReactNode, useReducer } from 'react';

import { QuoteContextType } from './quote.types';
import { quoteInitialState, quoteReducer } from './quote.reducer';

type Props = {
  children?: ReactNode;
};
export const QuoteContext = createContext<QuoteContextType>({
  state: quoteInitialState,
  dispatch: () => undefined,
});

export const QuoteProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(quoteReducer, quoteInitialState);

  return <QuoteContext.Provider value={{ state, dispatch }}>{children}</QuoteContext.Provider>;
};
