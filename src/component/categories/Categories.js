import React from 'react';
import Styles from './Categories.module.scss';
import Matrix from '../../containers/Matrix/Matrix';
import { Spinner } from '@blueprintjs/core';
import { requests } from '../../services/requests';
import TitleCategory from '../titleCategor/TitleCategor';

function Categories() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoriesAll, setCategoriesAll] = React.useState();
  
  const getCategories = async () => {
    setIsLoading(true);
    try {
      const getAllCategories = await requests('get', 'category');
      setCategoriesAll(getAllCategories.data);
      console.log('success get all categories');
      setIsLoading(false);
    } catch (e) {
      console.log('falied get all categories', e);
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
        console.log('success update categories');
      } catch (e) {
        console.log('falied update categories', e);
      }
    },
    []
  );

  const handleCategoryDelete = React.useCallback(async (categoryId) => {
    try {
      const deleteCategor = await requests('delete', `category/${categoryId}`);
      getCategories();
      location.reload();
      console.log('success delete categories');
    } catch (e) {
      console.log('falied delete categories', e);
    }
  }, []);

  React.useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className={Styles.Content}>
      {isLoading ? (
        <Spinner className={Styles.Spinner} />
      ) : (
        <div className={Styles.Category}>
          {categoriesAll.map((category, index) => {
            return (
              <TitleCategory
                category={category}
                getCategories={getCategories}
                onChange={handleCategoryChange}
                onDelete={handleCategoryDelete}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Categories;
