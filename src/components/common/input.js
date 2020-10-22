import React from "react"

export const Input = ({ name, onChange, value, ...props }) => {
  return (
    <input
      className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 mb-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      type="text"
      name={name}
      onChange={onChange}
      value={value}
      {...props}
    ></input>
  )
}
