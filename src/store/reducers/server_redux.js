import axios from 'axios'

const initialState = {
  accessToken: '',
  refreshToken: '',
  name: '',
  email: '',
  age: 12,
  value: {},
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
  console.log(action)
  switch (action.type) {
    case 'RECEPTION_TOKEN': {
      return {
        ...state,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
      }
    }
    case 'RECEPTION_TOKEN': {
      return {
        ...state,
        name: action.name,
        email: action.email,
        age: action.age,
      }
    }

    /*case 'TRANSFER_SERVER_LOGIN': {
      const authentication = {
        password: action.value.password,
        email: action.value.email,
      }
      try {
        const response = axios.post(
          'http://localhost:3001/signin',
          authentication
        )
        const succesToken = response.data.tokens.accessToken
        const refreshToken = response.data.tokens.refreshToken
        console.log('success email')

        try {
          const responseUser = axios.get('http://localhost:3001/info-user', {
            token: succesToken,
          })
          console.log('success token')
          const name = responseUser.name
          const email = responseUser.email
          const age = responseUser.age

          window.location.assign('http://localhost:3000/user')
          return {
            ...state,
            succesToken,
            refreshToken,
            name,
            email,
            age,
          }
        } catch (e) {
          // if (response === 987) {
          //   await this.refreshTokenPost(token.refreshToken)
          // }
          console.log('falied succesToken')
          return {
            ...state,
          }
        }
      } catch (e) {
        console.log('email or password is incorrect ')
        return {
          ...state,
        }
      }
    }*/

    default: {
      return state
    }
  }
}
