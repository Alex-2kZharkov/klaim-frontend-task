import { Spin } from 'antd';

import styles from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles.container}>
      <Spin size="large" />
    </div>
  );
};
