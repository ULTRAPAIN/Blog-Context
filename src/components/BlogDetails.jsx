/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"



function BlogDetails({post}) {
    return (
       <div className="px-4 py-4 duration-300 border-2 border-black rounded-lg hover:shadow-2xl">
        <NavLink to={`/blog/${post.id}`}>
            <span className="text-lg font-bold hover:text-red-600 hover:underline">{post.title}</span>
        </NavLink>
        <p className="py-1 text-sm ">
            By  
            <span className="italic"> {post.author}</span>
            on {" "}
            <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span className="font-bold hover:underline">{post.category}</span>
            </NavLink>
        </p>
        <p>posted on {post.date}</p>
        <p className="mt-3 whitespace-normal">{post.content}</p>
        <div className="mt-2 text-sm ">
            {
                post.tags.map((tag,index)=>(
                    <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                        <span className="px-1 font-semibold text-blue-700 hover:text-green-700 ">{`#${tag}`}</span>
                    </NavLink>
                ))
            }
        </div>
       </div>
    )
}

export default BlogDetails
