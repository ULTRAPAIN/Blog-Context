import { createContext  } from "react";
import {useState} from "react";
//first step done by creating the Context 
//since you want to use the context then you need to expose the context to the component you want to send it.
export const AppContext=createContext();


function AppContextProvider({children}){
    const [Loading,setLoading]=useState(false);
    const [posts,setPosts] = useState([]);
    const [Page,setPage]=useState(1);
    const [TotalPages,setTotalPages] = useState(null);

    const value={
        Loading,
        setLoading,
        posts,
        setPosts,
        Page,
        setPage,
        TotalPages,
        setTotalPages
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}