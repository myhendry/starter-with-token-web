import React from "react"
import tw from "tailwind.macro"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import { Button } from "../components/common"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h4
        css={tw`font-semibold tracking-wider text-5xl text-green-600 leading-snug truncate`}
      >
        Hello World
      </h4>

      <Button onClick={() => {}}>Enter</Button>
    </Layout>
  )
}

export default IndexPage
