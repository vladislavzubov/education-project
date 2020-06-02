import React from 'react';
import Styles from './CreateCategory.module.scss';
import { Spinner } from '@blueprintjs/core';
import { InputGroup } from '@blueprintjs/core';
import { Form, Field } from 'react-final-form';
import InputFull from '../../../component/InputFull/InputFull';
import { requests } from '../../../services/requests';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (value) => {
  postCategoryName(value);
};

const postCategoryName = async (value) => {
  try {
    const response = await requests('post', '/category', value); //проверить правильность адресса
    console.log('success create category');
  } catch (e) {
    console.log('falied create category', e);
  }
};

function Content() {
  /*
  const [isLoading, setIsLoading] = React.useState(true);

  const loadLectures = () => {
    setIsLoading(true);
    setTimeout(function () {
      setIsLoading(false);
    }, 2000);
  };

  React.useEffect(() => {
    loadLectures();
  }, []);

  const getValyeInyput = () => {
    console.log(k);
  };
  const myChangeHandler = (e) => {
    console.log(event.target.value);
    const k = event.target.value;
  };
*/
  return (
    <div className={Styles.CreateCategory}>
      <Form
        onSubmit={onSubmit}
        //  initialValues={{ firstName: 'Bob' }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <div>
            <h3 className={Styles.CreateCategory_Title}>Сreate a category</h3>
            <form onSubmit={handleSubmit}>
              <InputFull name="name" placeholder="Text" />

              <button
                className={Styles.CreateCategory_Button}
                type="submit"
                disabled={submitting}
              >
                Submit
              </button>
            </form>
          </div>
        )}
      />
    </div>
  );
}

export default Content;
