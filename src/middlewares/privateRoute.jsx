import React, { useContext } from "react"
import { navigate } from "gatsby"

import { AuthContext } from "../context/authContext"

//* Authentication PS2
const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const {
    authStatus: { isAuthenticated },
  } = useContext(AuthContext)

  if (!isAuthenticated && location.pathname !== `/app/signin`) {
    navigate("/app/signin")
    return null
  }
  return <Component {...rest} />
}

export default PrivateRoute
