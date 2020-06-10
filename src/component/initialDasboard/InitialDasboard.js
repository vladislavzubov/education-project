import React from 'react';
import Styles from './InitialDashboard.module.scss';
import HelperSpinner from '../../helper/helperSpinner/HelperSpinner';

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

  if (isLoading) {
    return <HelperSpinner />;
  }

  return (
    <div className={Styles.Content}>
      <p>> Hi, Initial Dasboard </p>
    </div>
  );
}

export default Content;
