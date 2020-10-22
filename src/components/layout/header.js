import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import tw from "tailwind.macro"

import { Button } from "../common"

const Header = ({ siteTitle }) => (
  <header css={tw`bg-green-600 mb-2 flex flex-row`}>
    <div css={tw`mx-auto my-auto px-5 py-5`}>
      <h1 css={tw`m-0`}>
        <Link to="/" css={tw`text-white no-underline`}>
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div>
      <ul css={tw`flex flex-row items-center mx-10`}>
        <li css={tw`mx-5`}>
          <Link to="/app/post">Posts</Link>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
