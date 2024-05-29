import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import Spinner from "./Spinner"
function Blogs() {
    //consuming the data by context Hooks
    const {posts,Loading}=useContext(AppContext)
    console.log("Printing inside blogs component")
    console.log(posts);
    return (
        <>
        <div className="mt-20 w-11/12 max-w-[680px] py-3 flex flex-col gap-y-7 mb-[70px]">
            {
                Loading?(<Spinner/>):
                (
                    posts.length===0?
                    (<div
                     className="flex items-center justify-center w-full h-screen text-6xl font-semibold ">No Post Found</div>):
                    (posts.map((post)=>
                    (
                    <div key={post.id}>
                        <p className="text-lg font-bold">{post.title}</p>
                        <p className="py-1 text-sm ">By <span className="italic">{post.author}</span> on <span className="font-semibold underline ">{post.category}</span></p>
                        <p>Posted on {post.date}</p>
                        <p className="mt-3 whitespace-normal">{post.content}</p>
                        <div className="mt-2 text-sm ">
                            {
                                post.tags.map((tag,index)=>{
                                    return <span className="px-1 font-semibold text-blue-700 underline " key={index}>{`#${tag}`}
                                    </span>
                                })
                            }
                        </div>
                    </div>
                    )
                        ))
                )
                
            }
        </div>
        </>
    )
}

export default Blogs
