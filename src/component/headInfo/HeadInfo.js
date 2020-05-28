import React from 'react';
import Styles from './HeadInfo.module.scss';

export default function HeadInfo() {
  function output() {
    localStorage.setItem('accessKey', undefined);
  }
  return (
    <div className={Styles.Header}>
      <p className={Styles.Name}>Имя и фамилия</p>
      <a onClick={output} className={Styles.Exit}>
        Выход
      </a>
    </div>
  );
}
