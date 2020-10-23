import React, { useEffect, useContext } from "react"
import { Router } from "@reach/router"
import { ReactQueryDevtools } from "react-query-devtools"
import axios from "axios"

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
      let token = localStorage.getItem("x-auth-token")
      if (token === null) {
        localStorage.setItem("x-auth-token", "")
        token = ""
      }
      const res = await axios.get("http://localhost:5000/api/users/me", {
        headers: {
          authorization: token,
        },
      })

      setAuthStatus(authStatus => ({
        ...authStatus,
        isAuthenticated: true,
        isLoading: false,
        user: res.data,
      }))
    }

    checkLoggedIn()
  }, [setAuthStatus])

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
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}
export default App
