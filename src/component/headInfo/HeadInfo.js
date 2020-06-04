import React from 'react';
import Styles from './HeadInfo.module.scss';
import HeaderUserInfo from '../headerUserInfo/HeaderUserInfo';

export default function HeadInfo() {
  function output() {
    //localStorage.removeItem('accessKey');
    location.reload();
  }
  return (
    <div className={Styles.Header}>
      <HeaderUserInfo />
      <a onClick={output} className={Styles.Exit}>
        Выход
      </a>
    </div>
  );
}
