import React from 'react';
import Styles from './Category.module.scss';
import MenuIteamNesting from '../MenuIteamNesting/MenuIteamNesting';
import MenuIteam from '../MenuIteam/MenuIteam';

export default function Category({ value, menuIteam }) {
  console.log(value);
  
  return (
    <div className={Styles.Category}>
      <h3>{value}</h3>
      {menuIteam.map((props, index) => {
        if (props.nesting === undefined) {
          return <MenuIteam key={index} data={props} />;
        }
        return <MenuIteamNesting key={index} data={props} />;
        
      })}
    </div>
  );
}
