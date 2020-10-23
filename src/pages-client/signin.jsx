import React, { useState, useContext } from "react"
import { Link, navigate } from "gatsby"
import tw from "tailwind.macro"
import axios from "axios"

import { Form, Input, Button } from "../components/common"
import { AuthContext } from "../context/authContext"

const Signin = () => {
  const { authStatus, setAuthStatus } = useContext(AuthContext)

  const [formValues, setFormValues] = useState({
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
        "http://localhost:5000/api/users/signin",
        formValues
      )

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

  //* Authentication PS3
  if (authStatus && authStatus.isAuthenticated) {
    navigate("/app/post")
  }

  return (
    <div>
      <h1>Sign In</h1>
      <Form onSubmit={onSubmit}>
        <Input
          name="email"
          type="text"
          value={formValues.email}
          onChange={onChange}
        />
        <Input
          name="password"
          type="password"
          value={formValues.password}
          onChange={onChange}
        />
        <Button type="submit">Submit</Button>

        <div css={tw`my-5`}>
          <Link to="/app/signup">Not Member Yet?</Link>
        </div>
      </Form>
    </div>
  )
}

export default Signin
