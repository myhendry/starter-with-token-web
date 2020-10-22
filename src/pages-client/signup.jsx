import React, { useState } from "react"
import { Link, navigate } from "gatsby"
import tw from "tailwind.macro"

import { Form, Input, Button } from "../components/common"

const Signup = () => {
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

  const onSubmit = e => {
    e.preventDefault()
    const { email, password } = formValues
  }

  //* Authentication PS4
  // if (isAuthenticated) {
  //   navigate("/app/post")
  // }

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
