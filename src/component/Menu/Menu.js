import React from 'react';
import Styles from './Menu.module.scss';
import Category from '../Category/Category';

export default function Menu({ categories }) {
  return (
    <div className={Styles.Menu}>
      <h2>Focus</h2>
      {categories.map((props, index) => {
        return (
          <Category
            key={index}
            menuIteam={props.menuIteam}
            value={props.value}
          />
        );
      })}
    </div>
  );
}
