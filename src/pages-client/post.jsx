import React, { useContext } from "react"
import { Link } from "gatsby"

import { AuthContext } from "../context/authContext"

const Post = () => {
  const {
    authStatus: { user },
  } = useContext(AuthContext)

  return (
    <div>
      <h1>Posts</h1>
      <h3 className="text-blue-600 text-5xl">{user && user.email}</h3>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Post
