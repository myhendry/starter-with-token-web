import React, { useEffect } from "react"
import { Router } from "@reach/router"
import { ReactQueryDevtools } from "react-query-devtools"

import Signin from "../pages-client/signin"
import Signup from "../pages-client/signup"
import Post from "../pages-client/post"
import Layout from "../components/layout/layout"

import PrivateRoute from "../middlewares/privateRoute"

//* Authentication PS1
const App = () => {
  return (
    <>
      <Layout>
        <Router basepath="/app">
          <Signin path="/signin" />
          <Signup path="/signup" />
          <Post path="/post" />
          {/* <Default path="/" /> */}
        </Router>
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}
export default App
