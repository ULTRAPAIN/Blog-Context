/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"



function BlogDetails({post}) {
    return (
       <div className="px-4 py-4 text-black duration-300 border-2 border-black rounded-lg dark:text-white dark:border-white hover:shadow-2xl dark:hover:shadow-white-glow ">
        <NavLink to={`/blog/${post.id}`}>
            <span className="text-lg font-bold duration-200 transition-color hover:text-red-600 dark:hover:text-orange-500 ">{post.title}</span>
        </NavLink>
        <p className="py-1 text-sm ">
            By  
            <span className="italic"> {post.author}</span>
            on {" "}
            <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span className="font-bold hover:text-blue-500">{post.category}</span>
            </NavLink>
        </p>
        <p>posted on {post.date}</p>
        <p className="mt-3 whitespace-normal">{post.content}</p>
        <div className="mt-2 text-sm ">
            {
                post.tags.map((tag,index)=>(
                    <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                        <span className="px-1 font-semibold text-blue-700 transition-colors duration-200 hover:text-green-700 dark:hover:text-yellow-400">{`#${tag}`}</span>
                    </NavLink>
                ))
            }
        </div>
       </div>
    )
}

export default BlogDetails
