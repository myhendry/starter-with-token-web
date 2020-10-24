import React, { useState, useContext } from "react"
import { Link, navigate } from "gatsby"
import tw from "tailwind.macro"

import { Form, Input, Button } from "../components/common"
import { AuthContext } from "../context/authContext"

const Signin = () => {
  const { authStatus, signIn } = useContext(AuthContext)

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
      await signIn(formValues)
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
