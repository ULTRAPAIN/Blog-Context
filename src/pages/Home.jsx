import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

function Home() {
    return (
        <div className='duration-500 bg-white dark:bg-black transition-color'>
            <Header />
            <div>
                <Blogs />
                <Pagination />
            </div>
        </div>
    )
}

export default Home
