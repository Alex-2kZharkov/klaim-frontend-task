import { Reducer } from 'react';

import { QuoteAction } from './quote.actions';
import { QuoteActionTypes, QuoteState } from './quote.types';

export const quoteInitialState: QuoteState = { author: null, quote: null };

export const quoteReducer: Reducer<QuoteState, QuoteActionTypes> = (
  state,
  { type, payload },
): QuoteState => {
  const reducer = {
    [QuoteAction.fetchData]: payload,
    [QuoteAction.reset]: quoteInitialState,
  };

  return reducer[type] ?? state;
};
