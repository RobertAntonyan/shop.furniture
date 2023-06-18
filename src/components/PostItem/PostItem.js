import React from 'react'
import './PostItem.css'
function PostItem({id, month, day, post}) {
  return (
    <div className='postItem'>
        <div className='postdate'>
            <span>{month}</span>
            <h2>{day}</h2>
        </div>
        <div className='postText'>
            <span>{post}</span>

        </div>
 

    </div>
  )
}

export default PostItem