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
        <div className="text-black">
            {
                Loading?(<Spinner/>):
                (
                    posts.length===0?
                    (<div>No Post Found</div>):
                    (posts.map((post)=>
                    (
                    <div key={post.id}>
                        <p className="font-bold ">{post.title}</p>
                        <p>By <span>{post.author}</span> on {post.category}</p>
                        <p>Posted on {post.date}</p>
                        <p>{post.content}</p>
                        <div>
                            {
                                post.tags.map((tag,index)=>{
                                    return <span key={index}>{`#${tag}`}
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
