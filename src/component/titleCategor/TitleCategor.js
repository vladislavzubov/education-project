import React from 'react';
import Styles from './TitleCategor.module.scss';
import { Form, Field } from 'react-final-form';
import InputFull from '../../component/InputFull/InputFull';

function TitleCategor({
  category,
  lectures,
  onChange,
  onDelete,
  onDeleteLecture,
}) {
  const [isOnChange, setIsOnChange] = React.useState(false);
  const handleChange = (newCategory, id) => {
    if (typeof onChange === 'function') {
      onChange(newCategory, id);
    }
    onChangeTitle();
  };

  const handleDelete = () => {
    if (typeof onDelete === 'function') {
      onDelete(category._id);
    }
  };

  const deleteLecture = (lecturesId) => {
    if (typeof onDeleteLecture === 'function') {
      onDeleteLecture(lecturesId);
    }
  };

  const onChangeTitle = () => {
    if (isOnChange) {
    }
    setIsOnChange(!isOnChange);
  };
  const onSubmit = async (value) => {
    handleChange(value, category._id);
    setIsOnChange(!isOnChange);
  };

  return (
    <div className={Styles.ContenetCategor}>
      <div className={Styles.TitleCategor}>
        {isOnChange ? (
          <Form
            onSubmit={onSubmit}
            initialValues={{
              name: `${category.name}`,
            }}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <div>
                <form onSubmit={handleSubmit} className={Styles.EditTitle}>
                  <InputFull name="name" placeholder="Name" />
                  <button className={Styles.Edit_Button} type="submit">
                    Edit
                  </button>
                </form>
              </div>
            )}
          />
        ) : (
          <h3 onDoubleClick={handleChange}>{category.name}</h3>
        )}
        <div>
          <button onClick={handleDelete}>X</button>
        </div>
      </div>

      {lectures.map((lecture, index) => {
        if (category._id === lecture.category) {
          return (
            <div className={Styles.TitleLecture}>
              <a
                href={`https://dashboard-exceed.herokuapp.com//dashboard/lectures/${lecture._id}`}
              >
                <h5>{lecture.title}</h5>
              </a>
              <button
                onClick={() => {
                  deleteLecture(lecture._id);
                }}
                className={Styles.TitleLecture_Button}
              >
                X
              </button>
            </div>
          );
        }
      })}
    </div>
  );
}

export default TitleCategor;
