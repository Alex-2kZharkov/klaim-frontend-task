import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '../Button';
import { Endpoints, Routes } from '../../constants';

import { UserAction, UserContext } from '../../store';
import { useAxios } from '../../hooks/useAxios';

import styles from './Header.module.scss';

export const Header = () => {
  const {
    state: { isAuthenticated },
    dispatch,
  } = useContext(UserContext);

  const navigate = useNavigate();
  const { fetchData } = useAxios({});

  const onSignOut = async () => {
    await fetchData({ url: Endpoints.signOut, method: 'DELETE' });
    dispatch({ type: UserAction.signOut, payload: { isAuthenticated: false } });
    navigate(Routes.signIn);
  };

  return (
    <ul className={styles.container}>
      <li className={styles.item}>
        <Link to={Routes.default}>
          <Button>About us</Button>
        </Link>
      </li>
      {isAuthenticated && (
        <li className={styles.item}>
          <Link to={Routes.profile}>
            <Button>Profile</Button>
          </Link>
        </li>
      )}
      {isAuthenticated ? (
        <li className={styles.item}>
          <Button onClick={onSignOut}>Sign out</Button>
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
