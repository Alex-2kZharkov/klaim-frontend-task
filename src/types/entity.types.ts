export type CompanyDto = {
  info: string;
};

export type LoginDto = {
  email: string;
  password: string;
};

export type RegisterUserDto = LoginDto & {
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
