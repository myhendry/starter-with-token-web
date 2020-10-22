import React from "react"

import { Redirect } from "@reach/router"

//* Authentication PS2
const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (location.pathname !== `/app/signin`) {
    // navigate("/app/signin")
    // return null
    return <Redirect to="/app/signin" noThrow />
  }
  return <Component {...rest} />
}

export default PrivateRoute
