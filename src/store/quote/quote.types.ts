import { Dispatch } from 'react';

import { AuthorDto, Nullable, QuoteDto } from '../../types';
import { QuoteAction } from './quote.actions';

export type QuoteState = {
  author: Nullable<AuthorDto>;
  quote: Nullable<QuoteDto>;
};

export type QuoteActionTypes = {
  type: (typeof QuoteAction)[keyof typeof QuoteAction];
  payload?: QuoteState;
};

export type QuoteContextType = {
  state: QuoteState;
  dispatch: Dispatch<QuoteActionTypes>;
};
