import axios from './axios'

export async function requests(methods, route, data, count = 1) {
  try {
    const response = await axios({ method: methods, url: route, data: data })
    console.log(methods, route, data, count)
    return response
  } catch (e) {
    if (e.response.data.errCode === 987 && count === 1) {
      await checkRefreshToken()
      requests(methods, route, data, 2)
    }
    throw e
  }
}

async function checkRefreshToken() {
  const refreshToken = localStorage.getItem('refreshKey')
  try {
    const response = await axios.post('refresh-tokens', {
      refreshToken: refreshToken,
    })
    localStorage.setItem('accessKey', response.data.accessToken)
    axios.defaults.headers.common[
      'Authorization'
    ] = `${response.data.accessToken}`
    console.log('refresh token success update')
    return
  } catch (e) {
    console.log('falied: refresh token invalid')
    return
  }
}
