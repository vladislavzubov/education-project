import axios from './axios'
import { connect } from 'react-redux'

function checkRefreshToken(status_error) {
  if (status_error === 401) {
  }
  console.log('pppppp')
  return
}

const mapStateToProps = (store) => {
  return {
    store: store,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}
