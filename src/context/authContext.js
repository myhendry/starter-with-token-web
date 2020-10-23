import React, { useState, useEffect } from "react"

export const AuthContext = React.createContext()

const AuthContextProvider = ({ children }) => {
  const [authStatus, setAuthStatus] = useState({
    isAuthenticated: false,
    isLoading: true,
    user: null,
  })

  return (
    <AuthContext.Provider value={{ authStatus, setAuthStatus }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
