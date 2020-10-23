import React, { useContext } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import tw from "tailwind.macro"

import { AuthContext } from "../../context/authContext"
import { Button } from "../common"

const Header = ({ siteTitle }) => {
  const { authStatus, setAuthStatus } = useContext(AuthContext)

  const signOut = () => {
    setAuthStatus({
      ...authStatus,
      isAuthenticated: false,
      isLoading: false,
      user: null,
    })
    localStorage.setItem("x-auth-token", "")
  }

  const guestLinks = (
    <>
      <li css={tw`mx-5`}>
        <Link to="/app/signin">Sign In</Link>
      </li>
    </>
  )

  const authLinks = (
    <>
      <li css={tw`mx-5`}>
        <Link to="/app/post">Post</Link>
      </li>
      <Button onClick={signOut}>Log Out</Button>
    </>
  )

  return (
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
            <Link to="/">Home</Link>
          </li>
          {!authStatus.isAuthenticated ? guestLinks : authLinks}
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
