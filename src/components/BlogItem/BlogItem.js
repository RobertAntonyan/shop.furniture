import React from 'react'
import './BlogItem.css'


function BlogItem({ id, date, title, description, img }) {
  return (
    <div className='blogItem'>
      <div className='itemImage'>
        <img src={img} alt='img' className='blogPic' />
      </div>

      <div className='blogitemText'>
        <h2>{date}</h2>
        <h3>{title}</h3>
        <h4>{description}</h4>
      </div>
    </div>
  )
}

export default BlogItem