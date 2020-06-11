import React from 'react';
import { Icon } from '@blueprintjs/core';
import Styles from './MenuIteam.module.scss';
import { Link } from 'react-router-dom';

export default function MenuIteam({ data }) {
  const { value, icon, badges, href } = data;

  return (
    <Link className={Styles.MenuIteam} to={href}>
      <div className={Styles.line}>
        <div>{icon === undefined ? null : <Icon icon={icon} />}</div>
        <div className={Styles.value}>{value}</div>
        {badges === undefined ? null : (
          <div className={Styles.badges}>{badges}</div>
        )}
      </div>
    </Link>
  );
}
