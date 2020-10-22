import {
  FETCH_USER,
  AUTH_ERROR,
  SIGNIN_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNOUT,
} from "../actions/types"

const initialState = {
  isAuthenticated: false,
  user: null,
  errMsg: "",
  loading: true,
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SIGNUP_SUCCESS:
    case SIGNIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
      }
    case FETCH_USER:
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        loading: false,
      }
    case AUTH_ERROR:
    case SIGNOUT:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
      }
    default:
      return state
  }
}
