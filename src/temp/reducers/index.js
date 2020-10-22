import { combineReducers } from "redux"

import testReducer from "./testReducer"
import alertReducer from "./alertReducer"
import authReducer from "./authReducer"

const appReducer = combineReducers({
  test: testReducer,
  alert: alertReducer,
  auth: authReducer,
})

export default appReducer
