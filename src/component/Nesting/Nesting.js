import React from 'react';
import Styles from './Nesting.module.scss';

export default function Nesting(props) {
  const { value, href } = props.props;

  return (
    <li className={Styles.Nesting}>
      <a href={href} >
        {value}
      </a>
    </li>
  );
}
