import React, { useState } from "react"
import { navigate } from "gatsby"

import api from "../utils/api"
export const AuthContext = React.createContext()

const AuthContextProvider = ({ children }) => {
  const [authStatus, setAuthStatus] = useState({
    accessToken: "",
    isAuthenticated: false,
    isLoading: true,
    user: null,
  })

  const signUp = async formValues => {
    try {
      const res = await api.post("/users/signup", formValues)

      setAuthStatus({
        ...authStatus,
        accessToken: res.data.token,
        isAuthenticated: true,
        isLoading: false,
      })

      localStorage.setItem("@token", res.data.token)
      navigate("/app/post")
    } catch (err) {
      console.log(err)
    }
  }

  const signIn = async formValues => {
    try {
      const res = await api.post("/users/signin", formValues)
      setAuthStatus({
        ...authStatus,
        accessToken: res.data.token,
        isAuthenticated: true,
        isLoading: false,
      })

      localStorage.setItem("@token", res.data.token)
      navigate("/app/post")
    } catch (err) {
      console.log(err)
    }
  }

  const signOut = () => {
    setAuthStatus({
      ...authStatus,
      accessToken: "",
      isAuthenticated: false,
      isLoading: false,
      user: null,
    })
    localStorage.setItem("@token", "")
  }

  return (
    <AuthContext.Provider
      value={{
        authStatus,
        setAuthStatus,
        signUp,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
