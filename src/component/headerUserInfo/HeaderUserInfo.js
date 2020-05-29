import React from 'react';
import Styles from './HeaderUserInfo.module.scss';
import { useSelector } from 'react-redux';

function HeaderUserInfo(props) {
  const name = useSelector((store) => store.server_redux.name);
  return <p className={Styles.Name}>{name}</p>;
}

export default HeaderUserInfo;
