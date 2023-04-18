import { FC, ReactNode } from 'react';

import styles from './Layout.module.scss';

type Props = {
  children: ReactNode;
};
export const Layout: FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
