import React from 'react';
import Styles from './Trainee.module.scss';


export default function Trainee({ trainee }) {
  return (
    <div className={Styles.Trainee}>
      <div> Имя: {trainee.name}</div>
      <div> email: {trainee.email}</div>
      <div> Возраст:{trainee.age}</div>
      <div> Роль: {trainee.role}</div>
      <div> Дата регистрации: {trainee.dateRegistration}</div>
      <div>{trainee.active ? trainee.dateActive : 'Не перешел по ссылке'}</div>
      <div>{trainee.dateLink ? trainee.dateLink : 'Ссылка еще не выслана'}</div>
      <a href={`http://localhost:3000/dashboard/trainees/${trainee._id}`}>
        {' '}
        Перейти на страницу Стажера?{' '}
      </a>
    </div>
  );
}
