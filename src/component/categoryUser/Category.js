import React from 'react';
import Styles from './Category.module.scss';
import { Spinner } from '@blueprintjs/core';
import { requests } from '../../services/requests';
import { useParams } from 'react-router-dom';

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

  if (isLoading) {
    <Spinner className={Styles.Spinner} />;
  }

  return (
    <div className={Styles.Content}>
      {lecturesAll.map((lecture, index) => {
        if (idCategory === lecture.category) {
          return (
            <div className={Styles.TitleLecture}>
              <a
                href={`http://localhost:3000/dashboard/lectures/${lecture._id}`}
              >
                <h5 className={Styles.Lecture}>{lecture.title}</h5>
              </a>
            </div>
          );
        }
      })}
    </div>
  );
}
