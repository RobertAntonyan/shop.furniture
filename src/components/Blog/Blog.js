import React from 'react'
import './Blog.css'
import BlogItem from '../BlogItem/BlogItem'
import PostItem from '../PostItem/PostItem'
import Footer from '../Footer/Footer'
function Blog({ blogData, postItem }) {
  return (
    <div className='blog'>
      <div className='container'>
        <div className='blogItems'>

        {
          blogData.map(el => (
            <BlogItem
              key={el.id}
              id={el.id}
              date={el.date}
              title={el.title}
              description={el.description}
              img={el.img}

            />
          ))
        }

      </div>


      <div className='blogCategory'>
        <div className='blogInput'>
          <input type='search' placeholder='Search the blog' />
          <button>Go!</button>

        </div>

        <div className='blogCategories'>
          <h2>BLOG CATEGORIES</h2>
          <ul>
            <li>Interior ideas</li>
            <li>Modern design</li>
            <li>Best of 2021</li>
            <li>Home styler</li>
            <li>Tips for you</li>
          </ul>
        </div>
          <div  className='blogPosts'>
            <h2>POPULAR POSTS</h2>
           {
            postItem.map(el => (
              <PostItem 
              key={el.id}
              id={el.id}
              day={el.day}
              month={el.month}
              post={el.post}
              />
            ))
           }

          </div>
      </div>
      </div>
      
    <Footer />
    </div>
  )
}

export default Blog