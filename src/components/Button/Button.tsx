import { Button as AntdButton } from 'antd';

import styles from './Button.module.scss';

type Props = {
  children: string;
};

export const Button = ({ children }: Props) => {
  return <AntdButton className={styles.button}>{children}</AntdButton>;
};
