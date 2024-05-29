import { useContext } from "react";
import { AppContext } from "../context/AppContext";
function Pagination() {
    const {page, handlePageChange,TotalPages} = useContext(AppContext);
    return (
        <>
        <div>
            <div>
                {
                    page >1 &&
                    <button onClick={()=>handlePageChange(page-1)}>
                        Previous
                    </button>
                }
                {
                    page<TotalPages &&
                    <button onClick={()=>handlePageChange(page+1)}>
                        Next
                    </button>
                }
                <p>
                    Page {page} of {TotalPages}
                </p>    
            </div>
        </div>
        </>
    )
}

export default Pagination
