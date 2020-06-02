import React from 'react';
import Styles from './Categories.module.scss';
import Matrix from '../../containers/Matrix/Matrix';
import { Spinner } from '@blueprintjs/core';
import { requests } from '../../services/requests';

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
    console.log('success get all categories');
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
        <div>
          {categoriesAll.map((categor, index) => {
            return <p>{categor.name}</p>;
          })}
        </div>
      )}
    </div>
  );
}

export default Categories;
