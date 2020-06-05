import React from 'react';
import Styles from './CreateExercise.module.scss';
import { Spinner } from '@blueprintjs/core';
import { Form, Field } from 'react-final-form';
import InputFull from '../../../component/InputFull/InputFull';
import { requests } from '../../../services/requests';
import { useSelector } from 'react-redux';

function CreateExercise() {
  const name = useSelector((store) => store.server_redux.name);
  const [isLoading, setIsLoading] = React.useState(true);
  const [allLecture, setAllLecture] = React.useState();
  const [isOnAnswer, setIsAnswer] = React.useState(false);
  const [numberAnswer, setNumberAnswer] = React.useState([1]);
  const getAllLectures = async () => {
    setIsLoading(true);
    try {
      const getAllLecture = await requests('get', 'lecture');
      setAllLecture(getAllLecture.data);
      console.log('success get all categories');
      setIsLoading(false);
    } catch (e) {
      console.log('falied get all categories', e);
      setIsLoading(false);
    }
  };
  console.log(numberAnswer);

  const onAnswer = () => {
    setIsAnswer(!isOnAnswer);
  };
  const postCreateExercise = async (value) => {
    try {
      const response = await requests('post', 'exercise', value);
      console.log('success create exercise');
    } catch (e) {
      console.log('falied create exercise', e);
    }
  };
  React.useEffect(() => {
    getAllLectures();
  }, []);

  const onSubmit = async (value) => {
    console.log(value.trueRequest);

    let correctAnswer = value.trueRequest.map((quantityIndex) => {
      return value.quantity[quantityIndex];
    });
    delete value.trueRequest;
    value = { ...value, correctAnswer };
    postCreateExercise(value);
  };

  if (isLoading) {
    return <Spinner />;
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

              <Field name="lectory" component="select">
                <option />
                {allLecture.map((lectore, index) => {
                  return <option value={lectore._id}>{lectore.title}</option>;
                })}
              </Field>
              <div>
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
                    value="number"
                    onClick={() => setIsAnswer(false)}
                  />
                  Text
                </label>
              </div>
              {isOnAnswer ? (
                <div>
                  {numberAnswer.map((num, index) => {
                    return (
                      <div>
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
