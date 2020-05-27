import React from 'react';
import Styles from './Box.module.css';
import { helperGradient } from '../../helper/helperGradient/helperGradient';

function Box({ link, percent }) {
  const backgroundColor = React.useMemo(() => {
    return helperGradient(percent);
  }, [percent]);

  return (
    <a href={link}>
      <div className={Styles.Box} style={{ background: backgroundColor }}>
        <p>{percent}%</p>
      </div>
    </a>
  );
}

export default Box;
