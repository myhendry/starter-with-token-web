import React, { useContext } from "react"
import { Link } from "gatsby"
import { useQuery } from "react-query"

import { AuthContext } from "../context/authContext"
import api from "../utils/api"

const Post = () => {
  const {
    authStatus: { user, accessToken },
  } = useContext(AuthContext)

  const fetchTodos = async accessToken => {
    const res = await api.get("/todos", {
      headers: {
        authorization: accessToken,
      },
    })
    return res.data
  }

  const { data, status } = useQuery("todos", () => fetchTodos(accessToken))

  if (status === "loading") return <div>Loading</div>

  if (status === "error") return <div>Error Fetch Todo</div>

  return (
    <div>
      <h1>Posts</h1>
      <h3 className="text-blue-600 text-xl">{user && user.email}</h3>
      {data &&
        data.map(d => (
          <h5 key={d._id}>
            {d.name} {d.content}
          </h5>
        ))}
      <Link to="/">Home</Link>
    </div>
  )
}

export default Post
