import React from 'react';
import Styles from './Lecture.module.scss';
import Matrix from '../../containers/Matrix/Matrix';
import { Spinner } from '@blueprintjs/core';
import { requests } from '../../services/requests';
import TitleCategory from '../titleCategor/TitleCategor';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import { Remarkable } from 'remarkable';
import InputFull_TextArea from '../InputFull/InputFull_TextArea';
import { Form, Field } from 'react-final-form';

function Lecture() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [lecture, setLecture] = React.useState([]);
  const [isOnChange, setIsOnChange] = React.useState(false);

  const getLecture = async (id) => {
    setIsLoading(true);
    try {
      const lecture = await requests('get', `lecture-one/${id}`);
      setLecture(lecture.data);

      console.log('success get own lecture');
      setIsLoading(false);
    } catch (e) {
      console.log('falied get wn lecture', e);
      setIsLoading(false);
    }
  };
  const onSubmit = async (value) => {
    setIsOnChange(!isOnChange);
    handleChange(value, category._id);
  };
  console.log(lecture.title);
  //попытаться другим способом
  //let md = new Remarkable();
  // let m = md.render(lecture);
  // function createMarkup() {
  //  return { __html: m };
  // }
  //

  React.useEffect(() => {
    const url = window.location.pathname.split('/').pop();
    console.log(url);
    getLecture(url);
  }, []);

  const handleChange = () => {
    setIsOnChange(!isOnChange);
    return;
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
                name: `${lecture.value}`,
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
                    <InputFull_TextArea name="name" placeholder="Name" />
                    <button
                      className={Styles.Edit_Button}
                      type="submit"
                      onClick={handleChange}
                    >
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

          {
            //  <p dangerouslySetInnerHTML={createMarkup()} />
          }
        </div>
      )}
    </div>
  );
}

export default Lecture;
