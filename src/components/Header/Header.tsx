import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../Button';
import { Routes } from '../../constants';

import styles from './Header.module.scss';

type Props = { hasSignedIn?: boolean };
export const Header: FC<Props> = ({ hasSignedIn = false }) => {
  return (
    <ul className={styles.container}>
      <li className={styles.item}>
        <Link to={Routes.default}>
          <Button>About us</Button>
        </Link>
      </li>
      {hasSignedIn && (
        <li className={styles.item}>
          <Link to={Routes.profile}>
            <Button>Profile</Button>
          </Link>
        </li>
      )}
      {hasSignedIn ? (
        <li className={styles.item}>
          <Button>Sign out</Button>
        </li>
      ) : (
        <li className={styles.item}>
          <Link to={Routes.signIn}>
            <Button>Sign in</Button>
          </Link>
        </li>
      )}
    </ul>
  );
};
