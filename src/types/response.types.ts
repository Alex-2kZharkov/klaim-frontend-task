import {
  AuthorDto,
  CompanyDto,
  LoginDto,
  QuoteDto,
  RegisterUserDto,
  TokenDto,
} from './entity.types';

export type Response<T> = {
  success: boolean;
  data: T;
};

export type ErrorDto = {
  message: string;
};

export type ResponseDto =
  | CompanyDto
  | TokenDto
  | LoginDto
  | RegisterUserDto
  | AuthorDto
  | QuoteDto
  | ErrorDto;
