import React from 'react';
import styles from './index.module.scss';
import { times } from 'lodash';

const Snow = () => {
  return (
    <div>
      {times(100, (i) => (
        <div className={styles.snow} key={i} />
      ))}
    </div>
  );
};

export default Snow;
