import React from 'react'
import { useParams } from 'react-router-dom'
import BlogDesign from './BlogDesign';
import BlogDetailDesign from './BlogDetailDesign';
import { bloglar } from './blogData'
const BlogDetail = () => {
    const params = useParams();
    console.log(params)
    return (
        <>
            {
                bloglar && bloglar.map(blog => {
                    if (params.id == blog.id) {

                        return <BlogDetailDesign blog={blog} />

                    }
                })
            }

        </>
    )
}

export default BlogDetail