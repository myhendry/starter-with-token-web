import React from "react"

import ThemeContextProvider from "./src/context/themeContext"
import AuthContextProvider from "./src/context/authContext"
import "./src/styles/globals.css"

export const wrapRootElement = ({ element }) => (
  <ThemeContextProvider>
    <AuthContextProvider>{element}</AuthContextProvider>
  </ThemeContextProvider>
)
