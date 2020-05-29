import React from 'react';
import { Icon } from '@blueprintjs/core';
import Styles from './MenuIteam.module.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function MenuIteam({ data }) {
  const { value, icon, badges, href } = data;

  return (
    <a className={Styles.MenuIteam} href={href}>
      <div className={Styles.line}>
        <div>{icon === undefined ? null : <Icon icon={icon} />}</div>
        <div className={Styles.value}>{value}</div>
        {badges === undefined ? null : (
          <div className={Styles.badges}>{badges}</div>
        )}
      </div>
    </a>
  );
}
