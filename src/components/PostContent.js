import React from 'react'
import {Link} from "react-router-dom"

function PostContent({post}) {
  return (
    <article>
        <Link to={`/posts/${post.id}`}>
            <p>{post.content}</p>
        </Link>
    </article>
  )
}

export default PostContent