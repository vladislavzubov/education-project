import React from 'react';
import Styles from './Category.module.scss';
import { Icon } from '@blueprintjs/core';
import { requests } from '../../services/requests';
import { useParams } from 'react-router-dom';
import HelperSpinner from '../../helper/helperSpinner/HelperSpinner';

export default function Category() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [lecturesAll, setLecturesAll] = React.useState([]);
  const idCategory = React.useMemo(() => {
    return useParams().id;
  }, []);
  const getLectures = async () => {
    setIsLoading(true);
    try {
      const getAllLectures = await requests('get', 'lecture');
      setLecturesAll(getAllLectures.data);
      setIsLoading(false);
    } catch (e) {
      console.log('falied get all lecture', e);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    getLectures();
  }, []);

  //   switch () {
  // case 'start' : {
  // icon='manual';
  //intent = 'Primary';
  // }
  // case 'middle' : {
  //   icon = 'time'; //edit
  //intent = 'Warning';
  // }
  // case 'end' : {
  //   icon = 'confirm';
  //intent = 'Success';
  // }
  //   }

  if (isLoading) {
    return <HelperSpinner />;
  }

  return (
    <div className={Styles.Content}>
      {lecturesAll.map((lecture, index) => {
        if (idCategory === lecture.category) {
          return (
            <div className={Styles.TitleLecture}>
              <div className={Styles.LectureIcon}>
                <Icon icon={'confirm'} intent="Success" iconSize="20" />
                <a
                  href={`http://localhost:3000/dashboard/lectures/${lecture._id}`}
                >
                  <h5 className={Styles.Lecture}>{lecture.title}</h5>
                </a>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
