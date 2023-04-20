import { Optional } from '../../types';

export const useFirstName = (fullname: Optional<string>): Optional<string> => {
  return fullname?.split(' ')?.at(0);
};
