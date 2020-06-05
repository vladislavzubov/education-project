import React from 'react';
import Styles from './CreateCategory.module.scss';
import { Spinner } from '@blueprintjs/core';
import { InputGroup } from '@blueprintjs/core';
import { Form, Field } from 'react-final-form';
import InputFull from '../../../component/InputFull/InputFull';
import { requests } from '../../../services/requests';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function CreateCategory() {
  const onSubmit = async (value) => {
    postCategoryName(value);
  };

  const postCategoryName = async (value) => {
    try {
      const response = await requests('post', 'category', value);
      console.log('success create category');
    } catch (e) {
      console.log('falied create category', e);
    }
  };
  // const [isLoading, setIsLoading] = React.useState(true);
  /*
  const loadLectures = () => {
    setIsLoading(true);
    setTimeout(function () {
      setIsLoading(false);
    }, 2000);
  };

  React.useEffect(() => {
    loadLectures();
  }, []);
*/
  return (
    <div className={Styles.CreateCategory}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <div>
            <h3 className={Styles.CreateCategory_Title}>Сreate a category</h3>
            <form onSubmit={handleSubmit}>
              <InputFull name="name" placeholder="Name" type="text" />
              <InputFull name="alias" placeholder="Alias" type="text" />
              <button
                className={Styles.CreateCategory_Button}
                type="submit"
                disabled={submitting}
              >
                Create category
              </button>
            </form>
          </div>
        )}
      />
    </div>
  );
}

export default CreateCategory;
