import React from 'react';
import Styles from './Resp.module.scss';
import { Link } from 'react-router-dom';

export default function Resp({ resp }) {
//   const [lecture, setLecture] = React.useState([]);

//   const getlecture = async () => {
//     try {
//       const getLectureAll = await requests(
//         'get',
//         `/api/lecture-one/${resp.lectureId}`
//       );

//       setLecture(getLectureAll.data);
//     } catch (e) {
//       console.log('falied get all Responses', e);
//     }
//   };

//   React.useEffect(() => {
//     getlecture();
//   }, []);

  return (
    <div className={Styles.Resp}>
      <div>{resp.userId}</div>

      {/* <div> Имя: {resp.name}</div>
      <div> Имя: {resp.name}</div>
      <div> Имя: {resp.name}</div>
      <div> email: {resp.email}</div>
      <div> Возраст:{resp.age}</div>
      <div> Роль: {resp.role}</div>
      <div> Дата регистрации: {resp.dateRegistration}</div>
      <div>{resp.active ? resp.dateActive : 'Не перешел по ссылке'}</div>
      <div>{resp.dateLink ? resp.dateLink : 'Ссылка еще не выслана'}</div> */}
    </div>
  );
}
