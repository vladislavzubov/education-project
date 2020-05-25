const initialState = {
  name: '',
  email: '',
  age: null,
  value: {},
};

export function changeUserInfo(name, age) {
  return (dispatch) => {
    dispatch({
      type: 'CHANGE_USER_INFO',
      name,
      age,
    });
  };
}

export function receptionUser(name, email, age) {
  return (dispatch) => {
    dispatch({
      type: 'RECEPTION_USER',
      name,
      email,
      age,
    });
  };
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_USER_INFO': {
      return {
        ...state,
        name: action.name,
        age: action.age,
      };
    }
    case 'RECEPTION_USER': {
      return {
        ...state,
        name: action.name,
        email: action.email,
        age: action.age,
      };
    }

    default: {
      return state;
    }
  }
}
