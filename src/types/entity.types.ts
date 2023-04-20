export type CompanyDto = {
  info: string;
};

export type TokenDto = {
  token: string;
};

export type LoginDto = {
  email: string;
  password: string;
};

export type UserProfileDto = Pick<LoginDto, 'email'> & {
  fullname: string;
};

export type AuthorDto = {
  authorId: number;
  name: string;
};

export type QuoteDto = Pick<AuthorDto, 'authorId'> & {
  quoteId: number;
  quote: string;
};
