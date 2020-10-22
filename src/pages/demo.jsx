import React, { useState } from "react"
import { Link } from "gatsby"
import tw from "tailwind.macro"
import styled from "@emotion/styled"

import { Input, Form, Button } from "../components/common"
import Layout from "../components/layout/layout"
import Image from "../components/layout/image"
import SEO from "../components/layout/seo"

const CustomButton1 = styled.button`
  ${tw`block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2 mb-2`}
`

const CustomButton = styled.button`
  ${tw`block text-white font-bold py-2 px-4 rounded mt-2 mb-2`}
  ${props =>
    props.primary
      ? tw`bg-purple-600 hover:bg-purple-700`
      : tw`bg-black hover:bg-gray-700`}
`

const CustomButton2 = styled.button`
  ${tw`block text-white font-bold py-2 px-4 rounded mt-2 mb-2`}
  ${({ primary, secondary }) => {
    switch (true) {
      case primary:
        return tw`bg-purple-600 hover:bg-purple-700`
      case secondary:
        return tw`bg-gray-600 hover:bg-gray-700`
      default:
        tw`bg-blue-600 hover:bg-blue-700`
    }
  }}
`

const Demo = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    password: "",
  })

  const onChange = e => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    console.log(formValue)
  }
  return (
    <Layout>
      <SEO title="Home" />
      <h4
        css={tw`font-semibold tracking-wider text-5xl text-pink-600 leading-snug truncate`}
      >
        This is Soumya
      </h4>
      <Form className="form" onSubmit={onSubmit}>
        <Input name="name" value={formValue.name} onChange={onChange} />

        <Button primary>Submit</Button>
      </Form>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder="Name"
          name="name"
          value={formValue.name}
          onChange={onChange}
        />
        <Input
          name="password"
          value={formValue.password}
          onChange={onChange}
          type="password"
        />
        <CustomButton2 secondary>Enter</CustomButton2>
      </Form>
      <CustomButton>Hello</CustomButton>
      <CustomButton1>Hello</CustomButton1>
      <CustomButton2 secondary>Heyy</CustomButton2>
      <Button>Hey</Button>
      <h4 className="to-orange-500">Hello World</h4>
      <button
        css={tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
        onClick={() => {}}
      >
        Test
      </button>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <div css={tw`flex flex-row bg-gray-200 justify-around`}>
        <Link to="/page-2/">
          <h5 css={tw`text-pink-600`}>Go to Page 2</h5>
        </Link>
        <Link to="/app/dashboard">
          <h5 css={tw`text-pink-600`}>Go to Dashboard</h5>
        </Link>
      </div>
    </Layout>
  )
}

export default Demo
