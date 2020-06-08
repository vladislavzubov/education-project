import React from 'react';
import Styles from './ChangeExercise.module.scss';
import { Spinner } from '@blueprintjs/core';
import { Form, Field } from 'react-final-form';
import InputFull from '../../component/InputFull/InputFull';
import InputFull_TextArea from '../../component/InputFull/InputFull_TextArea';
import { requests } from '../../services/requests';

export default function ChangeExercise() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [allCategories, setAllCategories] = React.useState([]);
  const [allLecture, setAllLecture] = React.useState([]);
  // console.log({lectures: allLecture});
  // console.log({categories: allCategories});

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

  const getLecture = async () => {
    setIsLoading(true);
    try {
      const getAllLecture = await requests('get', `lecture`);
      setAllLecture(getAllLecture.data);

      console.log('success get own lecture');
      setIsLoading(false);
    } catch (e) {
      console.log('falied get wn lecture', e);
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
    getLecture();
  }, []);
  const onSubmit = async (value) => {
    postCategoryName(value);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={Styles.ChangeExercise}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <div className={Styles.CreateLecture_Content}>
            <h3 className={Styles.CreateLecture_Title}>Change Exercise</h3>
            <form onSubmit={handleSubmit}>
              <Field name="category" component="select">
                <option />
                {allCategories.map((category, index) => {
                  return <option value={category._id}>{category.name} </option>;
                })}
              </Field>
              <Field name="lecture" component="select">
                <option />
                {allLecture.map((lecture, index) => {
                  return <option value={lecture._id}>{lecture.name}</option>;
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
