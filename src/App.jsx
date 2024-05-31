import Header from "./components/Header"
import Blogs from "./components/Blogs"
import { useContext, useEffect } from "react"
import Pagination from "./components/Pagination"
import { AppContext } from "./context/AppContext"
import { Route,Routes } from "react-router-dom"

const [searchParams,setSearchParams]=useSearchParams();
const location =useLocation()
function App() {
  const {fetchBlogPosts} = useContext(AppContext)
  useEffect(() => 
    {
      fetchBlogPosts()
    },[]);
      return (
     <Route >
      <Route path="/" element={<Home/>}/>
      <Route path="/blog/:blogId" element={<BlogPage/>}/>
      <Route path="/tags/:tag" element={<TagPage/>}/>
      <Route path="/categories/:category" element={<CategoryPage/>}/>
     </Route>
  )
}

export default App
