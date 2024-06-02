import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../../baseUrl";
import BlogDetails from "../components/BlogDetails";
import Header from "../components/Header";
import Spinner from "../components/Spinner";

function BlogPage() {
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const [dataFetched, setDataFetched] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { Loading, setLoading } = useContext(AppContext);
    const blogId = location.pathname.split('/').at("-1");

    async function fetchRelatedBlogs() {
        setLoading(true);
        setDataFetched(false);
        let url = `${baseUrl}?blogId=${blogId}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            const currentBlog = data.posts.find(post => post.id === blogId);
            const relatedBlogs = data.posts.filter(post => post.id !== blogId);

            setBlog(currentBlog);
            setRelatedBlogs(relatedBlogs);
        } catch (error) {
            console.log("Error in Blog Id call ", error);
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
        setDataFetched(true);
    }

    useEffect(() => {
        if (blogId) {
            fetchRelatedBlogs();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);

    return (
        <div>
            <Header />
            <div className="flex justify-center">
                <div className="w-11/12 max-w-[680px] py-1 flex flex-col gap-y-5 mb-[70px]">
                    <div className="mt-20">
                        <button
                            className="px-4 py-1 border rounded-md hover:shadow-2xl hover:bg-gray-100"
                            onClick={() => navigate(-1)}>
                            Back
                        </button>
                    </div>
                    {
                        Loading ? (
                          <Spinner />
                        ) : dataFetched && !blog ? (
                            <div>
                                <p>No Blog Found</p>

                            </div>
                        ) : (
                            blog && (
                                <div>
                                    <BlogDetails post={blog} />
                                    <h2 className="text-3xl font-bold mt-7">Related Blogs</h2>
                                    <div className="mt-7">
                                        {
                                            relatedBlogs.map((post) => (
                                                <div className="mt-5" key={post.id}>
                                                    <BlogDetails post={post} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default BlogPage;
