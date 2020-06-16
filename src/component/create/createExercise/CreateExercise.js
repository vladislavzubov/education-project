import React from 'react';
import Styles from './CreateExercise.module.scss';
import HelperSpinner from '../../../helper/helperSpinner/HelperSpinner';
import { Form, Field } from 'react-final-form';
import InputFull from '../../../component/InputFull/InputFull';
import { requests } from '../../../services/requests';

function CreateExercise() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [allLecture, setAllLecture] = React.useState();
  const [isOnAnswer, setIsAnswer] = React.useState(false);
  const [numberAnswer, setNumberAnswer] = React.useState([1]);
  const getAllLectures = async () => {
    setIsLoading(true);
    try {
      const getAllLecture = await requests('get', 'lecture');
      setAllLecture(getAllLecture.data);
      setIsLoading(false);
    } catch (e) {
      console.log('falied get all categories', e);
      setIsLoading(false);
    }
  };
  const postCreateExercise = async (value) => {
    try {
      const response = await requests('post', 'exercise', value);
    } catch (e) {
      console.log('falied create exercise', e);
    }
  };

  React.useEffect(() => {
    getAllLectures();
  }, []);

  const onSubmit = async (value) => {
    let formValue = { ...value };
    formValue.quantity = Object.assign({}, value.quantity);
    if (value.type === 'test') {
      if (value.trueRequest !== undefined) {
        const correctAnswers = value.trueRequest;
        formValue = { ...formValue, correctAnswers };
        delete formValue.trueRequest;
      }
    } else if (value.type === 'text' || 'code') {
      delete formValue.correctAnswers;
      delete formValue.quantity;
    }
    console.log(formValue);
    postCreateExercise(formValue);
  };

  if (isLoading) {
    return <HelperSpinner />;
  }

  return (
    <div className={Styles.CreateExercise}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <div className={Styles.CreateExercise_Content}>
            <h3 className={Styles.CreateExercise_Title}>Сreate a exercise</h3>
            <form onSubmit={handleSubmit}>
              <InputFull
                name="question"
                placeholder="Question"
                type="text_area"
              />

              <Field name="lecture" component="select">
                <option />
                {allLecture.map((lectore, index) => {
                  return <option value={lectore._id}>{lectore.title}</option>;
                })}
              </Field>
              <div className={Styles.TypeQuantity}>
                <label>
                  <Field
                    name="type"
                    component="input"
                    type="radio"
                    value="test"
                    onClick={() => setIsAnswer(true)}
                  />
                  Test
                </label>
                <label>
                  <Field
                    name="type"
                    component="input"
                    type="radio"
                    value="text"
                    onClick={() => setIsAnswer(false)}
                  />
                  Text
                </label>
                <label>
                  <Field
                    name="type"
                    component="input"
                    type="radio"
                    value="code"
                    onClick={() => setIsAnswer(false)}
                  />
                  Code
                </label>
              </div>
              {isOnAnswer ? (
                <div>
                  {numberAnswer.map((num, index) => {
                    return (
                      <div className={Styles.Quantities}>
                        <InputFull
                          name={`quantity[${index}]`}
                          component="input"
                          type="text"
                          placeholder={`Quantity № ${index + 1}`}
                        />
                        <Field
                          name="trueRequest"
                          component="input"
                          type="checkbox"
                          value={`${index}`}
                        />
                      </div>
                    );
                  })}

                  <div>
                    <a
                      onClick={() => {
                        setNumberAnswer([...numberAnswer, 1]);
                      }}
                      className={Styles.IncrementQuantity}
                    >
                      +
                    </a>
                  </div>
                </div>
              ) : null}
              <button
                className={Styles.CreateExercise_Button}
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

export default CreateExercise;
