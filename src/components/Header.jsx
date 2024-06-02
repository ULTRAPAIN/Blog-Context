import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineNightlight } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";

function Header() {
    const { theme, toggleTheme } = useTheme();
    return (
        <>
        <div className="fixed top-0 flex w-full py-2 duration-500 bg-white border shadow-lg transition-color dark:border-none dark:text-white dark:bg-black justify-evenly">
            <header className="text-center">
                <h1 className="py-2 text-2xl font-bold uppercase">Blogs-Context</h1>
            </header>
            <button onClick={toggleTheme}>
        {theme === 'light' ?  <MdOutlineNightlight size="30px"/>:<MdOutlineLightMode  size="30px" />}
      </button>
        </div>
        </>
    )
}

export default Header
