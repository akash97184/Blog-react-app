import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className=' mt-8 ' >
        <NavLink to={`/blog/${post.id}`}>
            <span className=' text-xl font-bold'>{post.title}</span>
        </NavLink> 

        <p className=' text-sm mt-[4px]' >
            By
            <span className='italic' >{post.author}</span>
            on {" "}
            <NavLink to={`/categories/${post.category.replaceAll(" ", "-" )}`}>
                <span className=' underline font-semibold' >{post.category}</span>
            </NavLink>
        </p>

        <p className='text-sm mt-[4px]' >Posted on {post.date}</p>
        <p className=' text-md mt-[14px]' >{post.content}</p>
        <div className=' flex gap-x-3'>
            {
                post.tags.map( (tag, index) => (
                    <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`} >
                        <span className=' text-blue-500 underline font-bold text-xs mt-[4px]'>{`#${tag}`}</span>
                    </NavLink>
                ))
            }
        </div>

    </div>
  )
}

export default BlogDetails