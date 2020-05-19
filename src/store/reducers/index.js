import { combineReducers } from 'redux'
import { reducer as server_redux } from './server_redux'

export const rootReducer = combineReducers({
  server_redux: server_redux,
})
