import React from 'react';
import Styles from './Categories.module.scss';
import Matrix from '../../containers/Matrix/Matrix';
import { Spinner } from '@blueprintjs/core';
import { requests } from '../../services/requests';
import TitleCategor from '../titleCategor/TitleCategor';

function Categories() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoriesAll, setCategoriesAll] = React.useState();
  const getCategories = async () => {
    console.log('jkj');

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
  console.log(categoriesAll);

  React.useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className={Styles.Content}>
      {isLoading ? (
        <Spinner className={Styles.Spinner} />
      ) : (
        <div className={Styles.Categor}>
          {categoriesAll.map((categor, index) => {
            return (
              <TitleCategor
                name={categor.name}
                id={categor._id}
                getCategories={getCategories}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Categories;
