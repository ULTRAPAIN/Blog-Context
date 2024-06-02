/* eslint-disable no-unused-vars */
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import { useContext, useEffect } from "react"
import { AppContext } from "./context/AppContext"
import { Route,Routes } from "react-router-dom"
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";


function App() {
const [searchParams,setSearchParams]=useSearchParams();
const location =useLocation()
  const {fetchBlogPosts} = useContext(AppContext)
  useEffect(() => 
    {
     const page =searchParams.get("page"?? 1);
     if(location.pathname.includes("tags")){
      //iska matlab tag wala page show karna hai
      const tag=location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),tag)
;     }
else if(location.pathname.includes("categories")){
  const category=location.pathname.split("/").at(-1).replaceAll("-"," ");
  fetchBlogPosts(Number(page),null,category)
}
else{
  fetchBlogPosts(Number(page));
}
    },[location.pathname, location.search]);
      return (
     <Routes >
      <Route path="/" element={<Home/>}/>
      <Route path="/blog/:blogId" element={<BlogPage/>}/>
      <Route path="/tags/:tag" element={<TagPage/>}/>
      <Route path="/categories/:category" element={<CategoryPage/>}/>
     </Routes>
  )
}

export default App
