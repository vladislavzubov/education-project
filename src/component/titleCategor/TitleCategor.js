import React from 'react';
import Styles from './TitleCategor.module.scss';
import { requests } from '../../services/requests';
import { Form, Field } from 'react-final-form';
import InputFull from '../../component/InputFull/InputFull';

function TitleCategor({ name, id }) {
  const [isOnChange, setIsOnChange] = React.useState(false);
  const deleteCategor = async () => {
    try {
      const deleteCategor = await requests('delete', `category/${id}`);
      // getCategories();
      location.reload();
      console.log('success delete categories');
    } catch (e) {
      console.log('falied delete categories', e);
    }
  };
  const putTitleCategor = async (value) => {
    try {
      const response = await requests('put', `category/${id}`, value);
      // getCategories();
      location.reload();
      console.log('success update categories');
    } catch (e) {
      console.log('falied update categories', e);
    }
  };

  const onChangeTitle = () => {
    if (isOnChange) {
    }
    setIsOnChange(!isOnChange);
  };
  const onSubmit = async (value) => {
    console.log(value);
    setIsOnChange(!isOnChange);
    putTitleCategor(value);
    //   putTitleCategor();
  };
  return (
    <div className={Styles.TitleCategor}>
      {isOnChange ? (
        <Form
          onSubmit={onSubmit}
          initialValues={{
            name: `${name}`,
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
        <h3 onDoubleClick={onChangeTitle}>{name}</h3>
      )}
      <div>
        <button onClick={deleteCategor}>X</button>
      </div>
    </div>
  );
}

export default TitleCategor;
