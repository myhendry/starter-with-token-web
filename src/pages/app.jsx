import React, { useEffect, useContext } from "react"
import { Router } from "@reach/router"
//import { ReactQueryDevtools } from "react-query-devtools"

import api from "../utils/api"
import Signin from "../pages-client/signin"
import Signup from "../pages-client/signup"
import Post from "../pages-client/post"
import Layout from "../components/layout/layout"
import PrivateRoute from "../middlewares/privateRoute"
import { AuthContext } from "../context/authContext"

//* Authentication PS1
const App = () => {
  const { authStatus, setAuthStatus } = useContext(AuthContext)

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("@token")
      if (token === null) {
        localStorage.setItem("@token", "")
        token = ""
      }
      const res = await api.get("/users/me", {
        headers: {
          authorization: token,
        },
      })

      //TODO 1
      // const token = localStorage.getItem("@token")
      // console.log("TOKEN", token)
      // if (token) {
      //   setAuthToken(token)
      // }
      // const res = await api.get("http://localhost:5000/api/users/me")

      console.log(res)

      setAuthStatus({
        ...authStatus,
        accessToken: res.data.token,
        isAuthenticated: true,
        isLoading: false,
        user: res.data.user,
      })
    }
    checkLoggedIn()
  }, [setAuthStatus])

  /**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
**/

  // api.interceptors.response.use(
  //   res => res,
  //   err => {
  //     if (err.response.status === 401) {
  //       setAuthStatus({
  //         ...authStatus,
  //         isAuthenticated: false,
  //         isLoading: false,
  //         user: null,
  //       })
  //     }
  //     return Promise.reject(err)
  //   }
  // )

  console.log(authStatus)
  return (
    <>
      <Layout>
        <Router basepath="/app">
          <Signin path="/signin" />
          <Signup path="/signup" />
          <PrivateRoute path="/post" component={Post} />
          {/* <Default path="/" /> */}
        </Router>
      </Layout>
    </>
  )
}
export default App
