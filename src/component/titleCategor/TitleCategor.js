import React from 'react';
import Styles from './TitleCategor.module.scss';
import { Form, Field } from 'react-final-form';
import InputFull from '../../component/InputFull/InputFull';
import { Spinner, Popover, Button, Alert } from '@blueprintjs/core';

function TitleCategor({
  category,
  lectures,
  onChange,
  onDelete,
  onDeleteLecture,
}) {
  const [isOnChange, setIsOnChange] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
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
          <Button
            onClick={() => {
              setIsOpen(true);
            }}
            text="X"
          />
          <Alert
            cancelButtonText="Нет"
            confirmButtonText="Да"
            icon="annotation"
            isOpen={isOpen}
            onCancel={() => {
              setIsOpen(false);
            }}
            onConfirm={handleDelete}
          >
            <p>Вы точно хотите удалить категорию?</p>
          </Alert>
        </div>
      </div>

      {lectures.map((lecture, index) => {
        if (category._id === lecture.category) {
          return (
            <div className={Styles.TitleLecture}>
              <a
                href={`http://localhost:3000/dashboard/lectures/${lecture._id}`}
              >
                <h5>{lecture.title}</h5>
              </a>
              <div>
                <Button
                  onClick={() => {
                    setIsOpen(true);
                  }}
                  text="X"
                />
                <Alert
                  cancelButtonText="Нет"
                  confirmButtonText="Да"
                  icon="annotation"
                  isOpen={isOpen}
                  onCancel={() => {
                    setIsOpen(false);
                  }}
                  onConfirm={() => {
                    deleteLecture(lecture._id);
                  }}
                >
                  <p>Вы точно хотите удалить лекцию?</p>
                </Alert>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default TitleCategor;
