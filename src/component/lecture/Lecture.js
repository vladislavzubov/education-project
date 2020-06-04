import React from 'react';
import Styles from './Lecture.module.scss';
import { Spinner } from '@blueprintjs/core';
import { requests } from '../../services/requests';
import ReactMarkdown from 'react-markdown';
import InputFull_TextArea from '../InputFull/InputFull_TextArea';
import { Form, Field } from 'react-final-form';

function Lecture() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [lecture, setLecture] = React.useState([]);
  const [isOnChange, setIsOnChange] = React.useState(false);
  const [lecturesID, setLecturesID] = React.useState(' ');
  console.log(lecturesID);

  const getLecture = async (url) => {
    setIsLoading(true);
    try {
      console.log(lecturesID);
      const lecture = await requests('get', `lecture-one/${url}`);
      setLecture(lecture.data);

      console.log('success get own lecture');
      setIsLoading(false);
    } catch (e) {
      console.log('falied get wn lecture', e);
      setIsLoading(false);
    }
  };
  const onSubmit = async (value) => {
    console.log(value);
    setIsOnChange(!isOnChange);
    chanheLecture(value);
  };
  React.useEffect(() => {
    const url = window.location.pathname.split('/').pop();
    console.log(url);
    setLecturesID(url);
    getLecture(url);
  }, []);
  const handleChange = () => {
    setIsOnChange(!isOnChange);
    return;
  };
  const chanheLecture = async (value) => {
    setIsLoading(true);
    try {
      const putLecture = await requests('put', `lecture/${lecturesID}`, value);
      getLecture(lecturesID);
      console.log('success put own lecture');
    } catch (e) {
      setIsLoading(false);
      console.log('falied put own lecture');
    }
  };

  return (
    <div className={Styles.Content}>
      {isLoading ? (
        <Spinner className={Styles.Spinner} />
      ) : (
        <div className={Styles.Lecture}>
          <h1>{lecture.title}</h1>
          {isOnChange ? (
            <Form
              onSubmit={onSubmit}
              initialValues={{
                value: `${lecture.value}`,
              }}
              render={({
                handleSubmit,
                form,
                submitting,
                pristine,
                values,
              }) => (
                <div>
                  <form onSubmit={handleSubmit} className={Styles.EditTitle}>
                    <InputFull_TextArea name="value" placeholder="Value" />
                    <button className={Styles.Edit_Button} type="submit">
                      Edit
                    </button>
                  </form>
                </div>
              )}
            />
          ) : (
            <div onDoubleClick={handleChange}>
              <ReactMarkdown source={lecture.value} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Lecture;
