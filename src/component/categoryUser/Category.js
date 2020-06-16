import React from 'react';
import Styles from './Category.module.scss';
import { Icon } from '@blueprintjs/core';
import { requests } from '../../services/requests';
import { useParams } from 'react-router-dom';
import HelperSpinner from '../../helper/helperSpinner/HelperSpinner';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Category() {
  let icon = '';
  let intent = '';
  const [isLoading, setIsLoading] = React.useState(true);
  const [lecturesAll, setLecturesAll] = React.useState([]);
  const idUser = useSelector((store) => store.server_redux.id);
  const idCategory = useParams().id;
  console.log(idCategory);

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
  }, [idCategory]);

  if (isLoading) {
    return <HelperSpinner />;
  }

  return (
    <div className={Styles.Content}>
      {lecturesAll.map((lecture, index) => {
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
              <Link to={`/dashboard/lectures/${lecture.lectureId}`}>
                <h5 className={Styles.Lecture}>{lecture.LectureTitle}</h5>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
