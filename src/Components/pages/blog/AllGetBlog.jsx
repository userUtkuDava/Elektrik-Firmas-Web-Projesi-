import React from 'react'
import { bloglar } from './blogData'
import BlogDesign from './BlogDesign'

const AllGetBlog = () => {
  return (
    <>
      {
        bloglar.map((blog) => (
          <BlogDesign key={blog.id} blog={blog} />
        ))
      }
    </>
  )
}

export default AllGetBlog