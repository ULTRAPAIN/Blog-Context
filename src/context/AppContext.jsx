import { createContext  } from "react";
import {useState} from "react";
import { baseUrl } from "../../baseUrl";
//first step done by creating the Context 
//since you want to use the context then you need to expose the context to the component you want to send it.

//step1
export const AppContext=createContext();


export default function AppContextProvider({children}){
    const [Loading,setLoading]=useState(false);
    const [posts,setPosts] = useState([]);
    const [Page,setPage]=useState(1);
    const [TotalPages,setTotalPages] = useState(null);

    //data Filling 
    async  function fetchBlogPosts(page=1){
        setLoading(true);
        let url=`${baseUrl}?page=${page}`
        try{
            const result=await fetch(url)
            // convert it into Json format
            const data=await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts)
            setTotalPages(data.totalPages);
        }
        catch(error){
            console.log("Error in fetching Data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);

        }
        setLoading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }
    const value={ 
        Loading,
        setLoading,
        posts,
        setPosts,
        Page,
        setPage,
        TotalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange

    }

    //step 2
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}