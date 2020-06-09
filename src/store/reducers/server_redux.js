const initialState = {
  name: '',
  id: '',
  email: '',
  age: null,
  value: {},
  role: '',
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

export function receptionUser(name, email, age, id, role) {
  console.log(name, email, age, id, role);
  return (dispatch) => {
    dispatch({
      type: 'RECEPTION_USER',
      name,
      email,
      age,
      id,
      role,
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
        id: action.id,
        role: action.role,
      };
    }
    case 'PUT_MENU_IN_STORE': {
      return {
        ...state,
        menuAdmin: action.menuAdmin,
      };
    }

    default: {
      return state;
    }
  }
}
