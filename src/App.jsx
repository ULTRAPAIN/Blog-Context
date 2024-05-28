import Header from "./components/Header"
import Blogs from "./components/Blogs"
import Pagination from "./components/Pagination"
// const url=https://codehelp-apis.vercel.app/api/get-blogs
function App() {

  return (
    <>
      <div>
        <Header/>
        <Blogs />
        <Pagination />
      </div>
    </>
  )
}

export default App
