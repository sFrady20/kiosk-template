import React from 'react';
import styles from './index.module.scss';
import { times } from 'lodash';

const Snow = () => {
  return (
    <div className="absolute left-0 top-0 w-full h-full -z-1">
      {times(20, (i) => (
        <div className={styles.snow} key={i} />
      ))}
    </div>
  );
};

export default Snow;
