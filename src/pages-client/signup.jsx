import React, { useState, useContext } from "react"
import { Link, navigate } from "gatsby"
import axios from "axios"
import tw from "tailwind.macro"

import { AuthContext } from "../context/authContext"
import { Form, Input, Button } from "../components/common"

const Signup = () => {
  const { authStatus, setAuthStatus } = useContext(AuthContext)

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  })

  const onChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/signup",
        formValues
      )
      console.log(res)

      setAuthStatus(authStatus => ({
        ...authStatus,
        isAuthenticated: true,
        isLoading: false,
      }))

      localStorage.setItem("x-auth-token", res.data.token)
      navigate("/app/post")
    } catch (err) {
      console.log(err)
    }
  }

  //* Authentication PS4
  if (authStatus && authStatus.isAuthenticated) {
    navigate("/app/post")
  }

  console.log(authStatus)
  return (
    <div>
      <h1>Sign Up</h1>
      <Form onSubmit={onSubmit}>
        <Input
          name="name"
          type="text"
          placeholder="Name"
          value={formValues.name}
          onChange={onChange}
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={formValues.email}
          onChange={onChange}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={formValues.password}
          onChange={onChange}
        />
        <Button type="submit">Submit</Button>
        <div css={tw`my-5`}>
          <Link to="/app/signin">Already a Member?</Link>
        </div>
      </Form>
    </div>
  )
}

export default Signup
