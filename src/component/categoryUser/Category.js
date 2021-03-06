import React from 'react';
import Styles from './Category.module.scss';
import { Icon } from '@blueprintjs/core';
import { requests } from '../../services/requests';
import { useParams } from 'react-router-dom';
import HelperSpinner from '../../helper/helperSpinner/HelperSpinner';
import { useSelector } from 'react-redux';

export default function Category() {
  let icon = '';
  let intent = '';
  const [isLoading, setIsLoading] = React.useState(true);
  const [lecturesAll, setLecturesAll] = React.useState([]);
  const idUser = useSelector((store) => store.server_redux.id);
  const idCategory = React.useMemo(() => {
    return useParams().id;
  }, []);
  const getLectures = async () => {
    setIsLoading(true);
    try {
      const getAllLectures = await requests(
        'get',
        `lectures-of-category/${idCategory}?userId=${idUser}`
      );
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
    return <HelperSpinner />;
  }

  return (
    <div className={Styles.Content}>
      {lecturesAll.map((lecture, index) => {
        console.log(lecture);

        switch (lecture.status) {
          case 'start': {
            icon = 'manual';
            intent = 'Primary';
            break;
          }
          case 'middle': {
            icon = 'edit';
            intent = 'Warning';
            break;
          }
          case 'end': {
            icon = 'confirm';
            intent = 'Success';
            break;
          }
        }

        return (
          <div className={Styles.TitleLecture}>
            <div className={Styles.LectureIcon}>
              <Icon icon={icon} intent={intent} iconSize="20" />
              <a
                href={`https://dashboard-exceed.herokuapp.com/dashboard/lectures/${lecture.lectureId}`}
              >
                <h5 className={Styles.Lecture}>{lecture.LectureTitle}</h5>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
