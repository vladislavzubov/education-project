import React from 'react';
import { Icon, Button } from '@blueprintjs/core';
import Styles from './MenuIteamNesting.module.scss';
import Nesting from '../Nesting/Nesting';

export default function MenuIteamNesting({ data }) {
  const [showList, setShowList] = React.useState(false);

  const { value, icon, badges, nesting, href } = data;

  return (
    <div onClick={() => setShowList(!showList)} className={Styles.MenuIteam}>
      <div className={Styles.line}>
        <div>
          <div>{icon === undefined ? null : <Icon icon={icon} />}</div>
          <div className={Styles.value}>{value}</div>
          <div className={Styles.badges}>
            {badges === undefined ? null : badges}
          </div>
          <div className={Styles.icon}>
            {nesting === undefined ? null : showList ? (
              <Button icon="chevron-down" minimal={true} />
            ) : (
              <Button icon="chevron-right" minimal={true} />
            )}
          </div>
        </div>
      </div>
      <div>
        {nesting === undefined ? null : showList ? (
          <div className={Styles.nesting}>
            <ul>
              {nesting.map((props, index) => {
                return <Nesting key={index} props={props} />;
              })}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
