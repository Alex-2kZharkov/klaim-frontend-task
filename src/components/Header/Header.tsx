import { FC } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import { ROUTES } from '../../constants';

type Props = { hasSignedIn: boolean };
export const Header: FC<Props> = ({ hasSignedIn }) => {
  return (
    <ul className={styles.container}>
      <li className={styles.item}>
        <Link to={ROUTES.default}>
          <Button>About us</Button>
        </Link>
      </li>
      {hasSignedIn && (
        <li className={styles.item}>
          <Link to={ROUTES.profile}>
            <Button>Profile</Button>
          </Link>
        </li>
      )}
      {hasSignedIn ? (
        <li className={styles.item}>
          <Button>
            <Button>Sign out</Button>
          </Button>
        </li>
      ) : (
        <li className={styles.item}>
          <Link to={ROUTES.signIn}>
            <Button>Sign in</Button>
          </Link>
        </li>
      )}
    </ul>
  );
};
