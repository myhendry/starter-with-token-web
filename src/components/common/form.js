import React from "react"

export const Form = ({ children, ...props }) => {
  return (
    <form
      {...props}
      className="bg-green-500 shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      {children}
    </form>
  )
}
