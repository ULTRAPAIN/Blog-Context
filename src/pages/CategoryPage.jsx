import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { baseUrl } from "../../baseUrl";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import BlogDetails from "../components/BlogDetails";
import Spinner from "../components/Spinner";

function TagPage() {
    const [blogs, setBlogs] = useState([]);
    const [dataFetched, setDataFetched] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
    const { Loading, setLoading } = useContext(AppContext);

    async function fetchBlogsByCategory() {
        setLoading(true);
        let url = `${baseUrl}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            const blogsWithCategory = data.posts.filter(post => post.category==category);
            setBlogs(blogsWithCategory);
            setDataFetched(true);
        } catch (error) {
            console.log("Error in fetching blogs by Category: ", error);
            setBlogs([]);
            setDataFetched(true);
        }
        setLoading(false);
    }

    useEffect(() => {
        if (category) {
            fetchBlogsByCategory();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);

    return (
        <div>
            <Header />
            <div className="flex justify-center">
                <div className="w-11/12 max-w-[680px] py-1 flex flex-col gap-y-5 mb-[70px]">
                    <div className="flex mt-20 gap-x-5">
                        <button 
                            className="px-4 py-1 border rounded-md hover:shadow-2xl hover:bg-gray-100"
                            onClick={() => navigate(-1)}
                        >
                            Back
                        </button>
                        <h2 className="text-2xl font-bold">Blogs on <span className="font-bold text-blue-600 ">{category}</span></h2>
                    </div>
                    {Loading ? (
                    <Spinner/>
                    ) : dataFetched && blogs.length === 0 ? (
                        <div>
                            <p>No Blogs Found</p>
                        </div>
                    ) : (
                        blogs.map(blog => (
                            <div key={blog.id} className="mt-5">
                                <BlogDetails post={blog} />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default TagPage;
