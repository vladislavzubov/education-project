import React from 'react';
import Styles from './CreateLecture.module.scss';
import { Spinner, NumericInput } from '@blueprintjs/core';
import { Form, Field } from 'react-final-form';
import InputFull from '../../../component/InputFull/InputFull';
import { requests } from '../../../services/requests';
import { haveNotChar } from '../../../services/validation';

function CreateLecture() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [allCategories, setAllCategories] = React.useState();
  const getCategories = async () => {
    setIsLoading(true);
    try {
      const getAllCategories = await requests('get', 'category');
      setAllCategories(getAllCategories.data);
      console.log(getAllCategories.data);

      console.log('success get all categories');
      setIsLoading(false);
    } catch (e) {
      console.log('falied get all categories', e);
      setIsLoading(false);
    }
  };
  const postCategoryName = async (value) => {
    try {
      const response = await requests('post', 'lecture', value);
      console.log('success create lecture');
    } catch (e) {
      console.log('falied create lecture', e);
    }
  };
  React.useEffect(() => {
    getCategories();
  }, []);
  const onSubmit = async (value) => {
    value.numberOfText = Number(value.numberOfText);
    value.numberOfTest = Number(value.numberOfTest);
    postCategoryName(value);
    location.reload();
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={Styles.CreateLecture}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <div className={Styles.CreateLecture_Content}>
            <h3 className={Styles.CreateLecture_Title}>Сreate a lecture</h3>
            <form onSubmit={handleSubmit}>
              <InputFull
                className={Styles.CreateLecture_Input}
                name="title"
                placeholder="Title"
                type="text"
              />
              <InputFull name="value" placeholder="Value" type="text_area" />
              <InputFull name="author" placeholder="Author" type="text" />
              <InputFull name="link" placeholder="Link" type="text" />
              <InputFull
                name="numberOfText"
                placeholder="Quantity text question"
                type="text"
                validate={[haveNotChar]}
              />
              <InputFull
                name="numberOfTest"
                placeholder="Quantity test question"
                type="text"
                validate={[haveNotChar]}
              />
              <Field name="category" component="select">
                <option />
                {allCategories.map((category, index) => {
                  return <option value={category._id}>{category.name}</option>;
                })}
              </Field>
              <button
                className={Styles.CreateLecture_Button}
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

export default CreateLecture;
