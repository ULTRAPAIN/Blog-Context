import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import Spinner from "./Spinner"
import BlogDetails from "./BlogDetails"
function Blogs() {
    //consuming the data by context Hooks
    const {posts,Loading}=useContext(AppContext)
    console.log("Printing inside blogs component")
    console.log(posts);
    return (
        <>
        <div className="flex justify-center">
        <div className="mt-20 w-11/12 max-w-[680px] py-3 flex flex-col gap-y-7 mb-[70px]">
            {
                Loading?(<Spinner/>):
                (
                    posts.length===0?
                    (<div
                     className="flex items-center justify-center w-full h-screen text-6xl font-semibold ">No Post Found</div>):
                    (posts.map((post)=>
                    (

                    <BlogDetails key={post.id} post={post} />
                    )
                        ))
                )
                
            }
        </div> 
        </div>
        </>
    )
}

export default Blogs
