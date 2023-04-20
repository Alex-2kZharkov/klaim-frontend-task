import {
  AuthorDto,
  CompanyDto,
  LoginDto,
  QuoteDto,
  UserProfileDto,
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
  | UserProfileDto
  | AuthorDto
  | QuoteDto
  | ErrorDto;
