import { Button as AntdButton } from 'antd';
import { ButtonType, ButtonHTMLType } from 'antd/es/button/buttonHelpers';
import clsx from 'clsx';

import styles from './Button.module.scss';

type Props = {
  className?: string;
  htmlType?: ButtonHTMLType;
  type?: ButtonType;
  children: string;
};

export const Button = ({ className, type = 'default', htmlType = 'button', children }: Props) => {
  return (
    <AntdButton className={clsx(styles.button, className)} type={type} htmlType={htmlType}>
      {children}
    </AntdButton>
  );
};
