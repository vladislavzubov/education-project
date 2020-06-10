import React from 'react';
import Styles from './CreateLecture.module.scss';
import HelperSpinner from '../../../helper/helperSpinner/HelperSpinner';
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
      setIsLoading(false);
    } catch (e) {
      console.log('falied get all categories', e);
      setIsLoading(false);
    }
  };
  const postCategoryName = async (value) => {
    try {
      const response = await requests('post', 'lecture', value);
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
    value.numberOfCode = Number(value.numberOfCode);
    postCategoryName(value);
    location.reload();
  };

  if (isLoading) {
    return <HelperSpinner />;
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
              <InputFull
                name="numberOfCode"
                placeholder="Quantity code question"
                type="text"
                validate={[haveNotChar]}
              />
              <Field
                name="category"
                component="select"
                className={Styles.custom_drop}
              >
                <option />
                {allCategories.map((category, index) => {
                  return <option value={category._id}>{category.name}</option>;
                })}
              </Field>
              <div>
                <button
                  className={Styles.CreateLecture_Button}
                  type="submit"
                  disabled={submitting}
                >
                  Create lecture
                </button>
              </div>
            </form>
          </div>
        )}
      />
    </div>
  );
}

export default CreateLecture;
