import React from 'react'
import PostContent from './PostContent'

function Postlist({posts}) {
  return (
    <div>
        {
            posts.map( (post) => (
                <PostContent key={post._id}  post={post} /> 
            ))
        }    
    </div>
  )
}

export default Postlist