import React from 'react';
import Styles from './InitialDashboard.module.scss';
import { Spinner } from '@blueprintjs/core';

function Content() {
  const [isLoading, setIsLoading] = React.useState(true);

  const loadLectures = () => {
    setIsLoading(true);
    setTimeout(function () {
      setIsLoading(false);
    }, 2000);
  };

  React.useEffect(() => {
    loadLectures();
  }, []);

  return (
    <div className={Styles.Content}>
      {isLoading ? (
        <Spinner className={Styles.Spinner} />
      ) : (
        <p>> Hi, Initial Dasboard </p>
      )}
    </div>
  );
}

export default Content;
