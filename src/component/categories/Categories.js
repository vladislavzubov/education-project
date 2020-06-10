import React from 'react';
import Styles from './Categories.module.scss';
import { requests } from '../../services/requests';
import TitleCategory from '../titleCategor/TitleCategor';
import HelperSpinner from '../../helper/helperSpinner/HelperSpinner';

export default function Categories() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoriesAll, setCategoriesAll] = React.useState([]);
  const [lecturesAll, setLecturesAll] = React.useState([]);

  const getCategories = async () => {
    setIsLoading(true);
    try {
      const getAllCategories = await requests('get', 'category');
      setCategoriesAll(getAllCategories.data);
      setIsLoading(false);
    } catch (e) {
      console.log('falied get all categories', e);
      setIsLoading(false);
    }
  };

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

  const handleCategoryChange = React.useCallback(
    async (categoryInfo, categoryId) => {
      try {
        const response = await requests(
          'put',
          `category/${categoryId}`,
          categoryInfo
        );
        getCategories();
      } catch (e) {
        console.log('falied update categories', e);
      }
    },
    []
  );

  const handleCategoryDelete = React.useCallback(async (categoryId) => {
    try {
      const deleteCategor = await requests('delete', `category/${categoryId}`);

      try {
        const deleteCategor = await requests(
          'delete',
          `lecture-all/${categoryId}`
        );
        getCategories();
      } catch (e) {
        getCategories();
      }
    } catch (e) {
      console.log('falied delete categories', e);
    }
  }, []);

  const handleLectureDelete = React.useCallback(async (lectureId) => {
    try {
      const deleteLecture = await requests('delete', `lecture/${lectureId}`);
      getLectures();
    } catch (e) {
      console.log('falied delete lecture', e);
    }
  }, []);

  React.useEffect(() => {
    getCategories();
    getLectures();
  }, []);

  if (isLoading) {
    return <HelperSpinner />;
  }

  return (
    <div className={Styles.Content}>
      <div className={Styles.Category}>
        {categoriesAll.map((category, index) => {
          return (
            <TitleCategory
              key={index}
              lectures={lecturesAll}
              category={category}
              getCategories={getCategories}
              onChange={handleCategoryChange}
              onDelete={handleCategoryDelete}
              onDeleteLecture={handleLectureDelete}
            />
          );
        })}
      </div>
    </div>
  );
}
