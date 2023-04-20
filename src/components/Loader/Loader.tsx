import { Spin } from 'antd';
import { SpinSize } from 'antd/es/spin';

import styles from './Loader.module.scss';

type Props = {
  size?: SpinSize;
};

export const Loader = ({ size = 'large' }: Props) => {
  return (
    <div className={styles.container}>
      <Spin size={size} />
    </div>
  );
};
