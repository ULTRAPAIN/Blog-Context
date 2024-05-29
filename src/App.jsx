import Header from "./components/Header"
import Blogs from "./components/Blogs"
import { useContext, useEffect } from "react"
import Pagination from "./components/Pagination"
import { AppContext } from "./context/AppContext"

function App() {
  const {fetchBlogPosts} = useContext(AppContext)
  useEffect(() => 
    {
      fetchBlogPosts()
    },[]);
      return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full gap-y-1">
        <Header/>
        <Blogs />
        <Pagination />
      </div>
    </>
  )
}

export default App
