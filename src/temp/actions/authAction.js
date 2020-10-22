import axios from "axios"
import { navigate } from "gatsby"

import {
  FETCH_USER,
  AUTH_ERROR,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNOUT,
} from "./types"

export const fetchUser = () => async dispatch => {
  try {
    const res = await axios.get("http://localhost:5000/api/users/me", {
      withCredentials: true,
    })
    dispatch({
      type: FETCH_USER,
      payload: res.data,
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: AUTH_ERROR,
    })
  }
}

export const signIn = (email, password) => async dispatch => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/users/signin",
      { email, password },
      { withCredentials: true }
    )
    dispatch({
      type: SIGNIN_SUCCESS,
      payload: res.data,
    })
    dispatch(fetchUser())
    navigate("/app/post")
  } catch (err) {
    console.error(err)
    dispatch({
      type: SIGNIN_FAIL,
    })
  }
}

export const signUp = (email, password) => async dispatch => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/users/signup",
      { email, password },
      { withCredentials: true }
    )
    console.log(res.data)
    dispatch({
      type: SIGNUP_SUCCESS,
    })
    dispatch(fetchUser())
    navigate("/app/post")
  } catch (err) {
    console.error(err)
    dispatch({
      type: SIGNUP_FAIL,
    })
  }
}

export const signOut = () => async dispatch => {
  const res = await axios.get("http://localhost:5000/api/users/signout")
  console.log(res)
  dispatch({
    type: SIGNOUT,
  })
  navigate("/app/signin")
}
