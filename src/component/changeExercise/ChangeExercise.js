import React from 'react';
import Styles from './ChangeExercise.module.scss';
import { Spinner, Button } from '@blueprintjs/core';
import { Form, Field, useForm, FormSpy } from 'react-final-form';
import { requests } from '../../services/requests';
import InputDisabled from '../InputDisabled/InputDisabled';

export default function ChangeExercise() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [allCategories, setAllCategories] = React.useState([]);
  const [allLecture, setAllLecture] = React.useState([]);
  const [allExercise, setAllexercise] = React.useState([]);
  const [exerciseId, setExerciseId] = React.useState();
  const [exercise, setExercise] = React.useState();

  const getExerciseOnId = async () => {
    try {
      const getExercise = await requests('get', `exercise-info/${exerciseId}`);
      setExercise(getExercise.data);

      // console.log('success get all categories');
    } catch (e) {
      // console.log('falied get all categories', e);
    }
  };

  const getCategories = async () => {
    setIsLoading(true);
    try {
      const getAllCategories = await requests('get', 'category');
      setAllCategories(getAllCategories.data);

      // console.log('success get all categories');
      setIsLoading(false);
    } catch (e) {
      // console.log('falied get all categories', e);
      setIsLoading(false);
    }
  };

  const getLecture = async () => {
    setIsLoading(true);
    try {
      const getAllLecture = await requests('get', `lecture`);
      setAllLecture(getAllLecture.data);

      // console.log('success get own lecture');
      setIsLoading(false);
    } catch (e) {
      // console.log('falied get wn lecture', e);
      setIsLoading(false);
    }
  };

  const getExercise = async () => {
    setIsLoading(true);
    try {
      const getAllExercise = await requests('get', `exercise`);
      setAllexercise(getAllExercise.data);

      // console.log('success get own exercise');
      setIsLoading(false);
    } catch (e) {
      // console.log('falied get wn exercise', e);
      setIsLoading(false);
    }
  };

  const getLecturesByCategory = (categoryId) => {
    return allLecture.filter((lecture) => lecture.category === categoryId);
  };

  const getExercisesByLecture = (lectureId) => {
    return allExercise.filter((exercise) => exercise.lecture === lectureId);
  };
  
  const putExercise = async (value) => {
    const {
      answer0,
      answer1,
      answer2,
      answer3,
      answer4,
      answer5,
      answer6,
      answer7,
      answer8,
      answer9,
      exerciseQuestion,
      type,
    } = value;

    const modefiedExercise = {
      quantity: [
        answer0,
        answer1,
        answer2,
        answer3,
        answer4,
        answer5,
        answer6,
        answer7,
        answer8,
        answer9,
      ],
      question: exerciseQuestion,
      type: type,
    };
    console.log(modefiedExercise);

    try {
      await requests('put', `exercise/${exerciseId}`, modefiedExercise);
    } catch (e) {}
  };

  React.useEffect(() => {
    getExercise();
    getCategories();
    getLecture();
  }, []);

  const onSubmit = async (value) => {
    setExerciseId(value.exercise);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={Styles.ChangeExercise}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <FormSpy subscription={{ values: true }}>
            {({ values }) => (
              <div className={Styles.ChangeExercise_Content}>
                <h3 className={Styles.CreateLecture_Title}>Change Exercise</h3>
                <form onSubmit={handleSubmit}>
                  <div className={Styles.Select}>
                    <Field name="category" component="select">
                      <option />
                      {allCategories.map((category, index) => {
                        return (
                          <option value={category._id}>{category.name} </option>
                        );
                      })}
                    </Field>
                    <Field name="lecture" component="select">
                      <option />
                      {getLecturesByCategory(values.category).map(
                        (lecture, index) => {
                          return (
                            <option value={lecture._id}>{lecture.title}</option>
                          );
                        }
                      )}
                    </Field>
                    <Field name="exercise" component="select">
                      <option />
                      {getExercisesByLecture(values.lecture).map(
                        (exercise, index) => {
                          return (
                            <option value={exercise._id}>
                              {exercise.question}
                            </option>
                          );
                        }
                      )}
                    </Field>
                  </div>
                  <button
                    className={Styles.CreateLecture_Button}
                    type="submit"
                    disabled={submitting}
                    onClick={getExerciseOnId}
                  >
                    Submit
                  </button>
                  {!!exercise ? (
                    <div>
                      <h4> Question</h4>
                      <InputDisabled
                        name="exerciseQuestion"
                        placeholder={exercise.question}
                        type="text"
                        show={false}
                      />

                      <h4> Type</h4>
                      <h5>text</h5>
                      <Field
                        name="text"
                        component="input"
                        type="checkbox"
                        value="text"
                      />
                      <h5>test</h5>
                      <Field
                        name="test"
                        component="input"
                        type="checkbox"
                        value="test"
                      />
                      <div>
                        {exercise.quantity.map((answer, index) => {
                          return (
                            <label>
                              <h5>{`answer ${index}`}</h5>
                              <InputDisabled
                                name={`answer${index}`}
                                placeholder={answer}
                                type="text"
                                show={false}
                              />
                            </label>
                          );
                        })}
                      </div>

                      <button
                        className={Styles.CreateLecture_Button}
                        onClick={putExercise(values)}
                      >
                        Change exercise
                      </button>
                    </div>
                  ) : null}
                </form>
              </div>
            )}
          </FormSpy>
        )}
      />
    </div>
  );
}
