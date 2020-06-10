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
        href: `${REACT_CLIENT_URL}/dashboard`,
        icon: 'home',
        text: 'Home',
      },
    ];
  }

  if (arrUrl[2] === 'category') {
    if (category) {
      getCategory(arrUrl[3]);
    }

    items = [
      ...items,
      {
        href: `${REACT_CLIENT_URL}/dashboard/category/${category._id}`,
        icon: 'applications',
        text: category.name,
      },
    ];
  }

  if (arrUrl[2] === 'lectures') {
    getLecture(arrUrl[3]);
    if (lecture.category) {
      getCategory(lecture.category);
    }

    items = [
      ...items,
      {
        href: `${REACT_CLIENT_URL}/dashboard/category/${category._id}`,
        icon: 'applications',
        text: category.name,
      },
      ,
      { icon: 'application', text: lecture.title },
    ];
  }

  return (
    <div className={Styles.SitePath}>
      <Breadcrumbs items={items} />
    </div>
  );
}
