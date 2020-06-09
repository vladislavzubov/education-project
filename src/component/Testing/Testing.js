import React from 'react';
import Styles from './Testing.module.scss';
import Test from '../Exercises/Test/Test';
import Text from '../Exercises/Text/Text';
import { Button, Spinner } from '@blueprintjs/core';
import { Form, Field } from 'react-final-form';
import { requests } from '../../services/requests';

export default function Testing(props) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [responses, setResponse] = React.useState({});
  const [userId, setUserId] = React.useState(props.idUser);

  console.log(props);
  const lecturesId = props.lecturesID;
  const tests = props.tests;
  const texts = props.texts;
  console.log(tests, texts);

  const onSubmit = async (value) => {
    const resolve = { response: value };
    putUserResponse(resolve);
  };

  const putUserResponse = async (resolve) => {
    try {
      const exercise = await requests(
        'put',
        `userResponse/${lecturesId}?userId=${userId}`,
        resolve
      );
      props.onPerformExersice();
      console.log('success put own exercise');
    } catch (e) {
      console.log('falied put own exercise', e);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    setUserId(props.idUser);
  }, []);

  return (
    <div className={Styles.Testing}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <div className={Styles.Testing}>
            <form onSubmit={handleSubmit}>
              <div>
                <h1>Test</h1>
              </div>

              <div className={Styles.Content}>
                {tests.map((test, index) => {
                  return (
                    <Field
                      name={test._id}
                      component={Test}
                      test={test}
                      value={`${index}`}
                    />
                  );
                })}
                {texts.map((text, index) => {
                  return (
                    <Field
                      name={text._id}
                      component={Text}
                      text={text}
                      value={`${index}`}
                    />
                  );
                })}
              </div>
              <div >
                <button type="submit" disabled={submitting} className={Styles.Testing_Button} >
                  Сomplete the test
                </button>
              </div>
            </form>
          </div>
        )}
      />
    </div>
  );
}
