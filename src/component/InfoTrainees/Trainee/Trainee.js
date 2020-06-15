import React from 'react';
import Styles from './Trainee.module.scss';
import { Link } from 'react-router-dom';

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
      <Link to={`/dashboard/trainee/${trainee._id}`}>
        {' '}
        Перейти на страницу Стажера?{' '}
      </Link>
    </div>
  );
}
