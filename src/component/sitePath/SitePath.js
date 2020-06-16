import React from 'react';
import Styles from './SitePath.module.scss';
import { Breadcrumbs } from '@blueprintjs/core';
import { useLocation } from 'react-router-dom';
import { requests } from '../../services/requests';

export default function SitePath() {
  const url = useLocation().pathname;

  const [lecture, setLecture] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  let items = [];
  const arrUrl = url.split('/');
  const getCategory = async (categoryId) => {
    if (category.length === 0) {
      try {
        const categoryRequest = await requests('get', `category/${categoryId}`);
        setCategory(categoryRequest.data);
      } catch (e) {
        console.log('falied get wn category', e);
      }
    }
  };

  const getLecture = async (lectureId) => {
    if (lecture.length === 0) {
      try {
        const lectureRequest = await requests(
          'get',
          `lecture-one/${lectureId}`
        );
        setLecture(lectureRequest.data);
      } catch (e) {
        console.log('falied get wn lecture', e);
      }
    }
  };

  if (arrUrl[1] === 'dashboard') {
    items = [
      ...items,
      {
        href: 'http://localhost:3000/dashboard',
        icon: 'home',
        text: 'Главная',
      },
    ];
  }

  switch (arrUrl[2]) {
    case 'category': {
      if (category) {
        getCategory(arrUrl[3]);
      }

      items = [
        ...items,
        {
          href: `http://localhost:3000/dashboard/category/${category._id}`,
          icon: 'applications',
          text: category.name,
        },
      ];
      break;
    }
    case 'change_user_data': {
      items = [
        ...items,
        {
          href: `http://localhost:3000/dashboard/change_user_data`,
          icon: 'user',
          text: 'Мой профиль',
        },
      ];
      break;
    }
    case 'lectures': {
      getLecture(arrUrl[3]);
      if (lecture.category) {
        getCategory(lecture.category);
      }

      items = [
        ...items,
        {
          href: `http://localhost:3000/dashboard/category/${category._id}`,
          icon: 'applications',
          text: category.name,
        },
        ,
        { icon: 'application', text: lecture.title },
      ];
      break;
    }
    case 'trainees': {
      items = [
        ...items,
        {
          href: `http://localhost:3000/dashboard/trainees`,
          icon: 'people',
          text: 'Стажеры',
        },
      ];
      break;
    }
    case 'registration': {
      items = [
        ...items,
        {
          href: `http://localhost:3000/dashboard/registration`,
          icon: 'new-person',
          text: 'Регистрация',
        },
      ];
      break;
    }
    case 'create-category': {
      items = [
        ...items,
        {
          href: `http://localhost:3000/dashboard/create-category`,
          icon: 'application',
          text: 'Категории',
        },
      ];
      break;
    }
    case 'create-exercise': {
      items = [
        ...items,
        {
          href: `http://localhost:3000/dashboard/create-exercise`,
          icon: 'annotation',
          text: 'Упражнения',
        },
      ];
      break;
    }
    case 'create-lecture': {
      items = [
        ...items,
        {
          href: `http://localhost:3000/dashboard/create-lecture`,
          icon: 'applications',
          text: 'Лекции',
        },
      ];
      break;
    }
  }

  return (
    <div className={Styles.SitePath}>
      <Breadcrumbs items={items} />
    </div>
  );
}
