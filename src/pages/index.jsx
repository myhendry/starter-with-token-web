import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Image from "../components/layout/image"

const IndexPage = () => (
  <Layout>
    <h1 className="text-3xl bg-yellow-300">Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div className="w-full">
      <div className="mx-auto max-w-sm">
        <Image />
      </div>
    </div>
    <Link className="text-accent" to="/page-2/">
      Go to page 2
    </Link>
  </Layout>
)
export default IndexPage
