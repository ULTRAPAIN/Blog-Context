import { createContext  } from "react";
import {useState} from "react";
import { baseUrl } from "../../baseUrl";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
 // Importing PropTypes
//first step done by creating the Context 
//since you want to use the context then you need to expose the context to the component you want to send it.

//step1
export const AppContext=createContext();


export default function AppContextProvider({children}){
    const [Loading,setLoading]=useState(false);
    const [posts,setPosts] = useState([]);
    const [page,setPage]=useState(1);
    const [TotalPages,setTotalPages] = useState(null);
    const navigate=useNavigate();


    //data Filling 
    async  function fetchBlogPosts(page=1,tag=null,category){
        setLoading(true);
        let url=`${baseUrl}?page=${page}`
        if(tag){
            url+=`&tag=${tag}`;
        }
        if(category){
            url+=`&category=${category}`
        }
        console.log("Printing the Api URl",url);
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
    //handled when next and previous buttons are clicked 
    function handlePageChange(page){
        navigate({search:`page=${page}`})
        setPage(page);

    }
    const value={ 
        Loading,
        setLoading,
        posts,
        setPosts,
        page,
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


// Define PropTypes
AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };