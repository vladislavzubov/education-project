import axios from '../../services/axios'

const initialState = {
  accessToken: '',
  refreshToken: '',
  name: '',
  email: '',
  age: null,
  value: {},
}

export function checkRefreshToken(refreshToken) {
  return async (dispatch) => {
    try {
      const response = await axios.post('refresh-tokens', {
        refreshToken: refreshToken,
      })
      console.log(response.data.accessToken)
      axios.defaults.headers.common[
        'Authorization'
      ] = `${response.data.accessToken}`
      dispatch({
        type: 'UPDATE_ACCESS_TOKEN',
        accessToken: response.data.accessToken,
      })
    } catch (e) {
      console.log('error falied refresh token')
    }
  }
}

export function changeUserInfo(name, age) {
  return (dispatch) => {
    dispatch({
      type: 'CHANGE_USER_INFO',
      name,
      age,
    })
  }
}

export function receptionToken(accessToken, refreshToken) {
  return (dispatch) => {
    dispatch({
      type: 'RECEPTION_TOKEN',
      accessToken,
      refreshToken,
    })
  }
}

export function receptionUser(name, email, age) {
  return (dispatch) => {
    dispatch({
      type: 'RECEPTION_USER',
      name,
      email,
      age,
    })
  }
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_ACCESS_TOKEN': {
      return {
        ...state,
        accessToken: action.accessToken,
      }
    }
    case 'CHANGE_USER_INFO': {
      return {
        ...state,
        name: action.name,
        age: action.age,
      }
    }
    case 'RECEPTION_TOKEN': {
      return {
        ...state,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
      }
    }
    case 'RECEPTION_USER': {
      return {
        ...state,
        name: action.name,
        email: action.email,
        age: action.age,
      }
    }

    default: {
      return state
    }
  }
}
