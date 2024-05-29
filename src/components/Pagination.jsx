import { useContext } from "react";
import { AppContext } from "../context/AppContext";
function Pagination() {
    const {page, handlePageChange,TotalPages,posts} = useContext(AppContext);
    return (
        <>
        <div className="fixed bottom-0 flex items-center justify-center w-full bg-white border">
            <div className="flex justify-between w-11/12 max-w-[680px] py-1">
                {
                    page >1 &&
                    <button className="px-4 py-1 border rounded-md hover:shadow-2xl hover:bg-gray-100 " onClick={()=>handlePageChange(page-1)}>
                        Previous
                    </button>
                }
                {
                    page<TotalPages &&
                    <button className="px-4 py-1 border rounded-md hover:shadow-2xl hover:bg-gray-100" onClick={()=>handlePageChange(page+1)}>
                        Next
                    </button>
                }
                {
                    posts.length>0&&
                    <div className="py-2">
                    <p className="font-semibold text-md">
                        Page {page} of {TotalPages}
                    </p> 
                    </div> 
                }
               
                  
            </div>
        </div>
        </>
    )
}

export default Pagination
