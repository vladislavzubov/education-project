import React from 'react';
import Styles from './TitleCategor.module.scss';
import { requests } from '../../services/requests';
import { Form, Field } from 'react-final-form';
import InputFull from '../../component/InputFull/InputFull';

function TitleCategor({ category, onChange, onDelete }) {
  const [isOnChange, setIsOnChange] = React.useState(false);

  const handleChange = (newCategory, id) => {
    onChangeTitle();
    if (typeof onChange === 'function') {
      onChange(newCategory, id);
    }
  };

  const handleDelete = () => {
    if (typeof onDelete === 'function') {
      onDelete(category._id);
    }
  };

  const onChangeTitle = () => {
    if (isOnChange) {
    }
    setIsOnChange(!isOnChange);
  };
  const onSubmit = async (value) => {
    setIsOnChange(!isOnChange);
    handleChange(value, category._id);
  };

  return (
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
                <button
                  className={Styles.Edit_Button}
                  type="submit"
                  //onClick={onChangeTitle}
                >
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
  );
}

export default TitleCategor;
