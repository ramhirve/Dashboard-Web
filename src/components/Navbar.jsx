import React from "react";
import { FaBars, FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
const Navbar = ({ sidebarToggle, setSidebarToggle, search, setSearch, darkMode, setDarkMode }) => {
    return (
        <nav className={`bg-gray-800 w-full px-4 py-3 flex justify-between fixed top-0 z-50 ${!sidebarToggle ? "w-[calc(100%-16rem)]" : "w-full"}`}>

            <div className="flex items-center text-xl">
                <FaBars className="text-white me-4 cursor-pointer"
                    onClick={() => setSidebarToggle(!sidebarToggle)}
                />
                <h1 className="text-2xl text-white font-bold">Dashboard-Web</h1>
            </div>
            <div className="flex items-center gap-x-5  px-2 py-1">
                <div className="relative md:w-65">
                    <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
                        <button className="p-1 focus:outline-none text-white md:text-black"><FaSearch /></button>
                    </span>
                    <input
                        type="text"
                        placeholder="Search.."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full px-4 py-1 pl-12 outline-none hidden md:block text-black bg-white rounded shadow" />
                </div>

                <div className="text-white"><FaBell className="w-6 h-6" /></div>

                <div className="relative">
                    <button className="text-white group">
                        <FaUserCircle className="w-6 h-6 mt-1" />
                        <div className="z-10 hidden bg-white absolute rounded-lg shadow w-32 group-focus:block top-full right-0">
                            <ul className="py-2 text-sm text-gray-950">
                                <li><a href="">Profile</a></li>
                                <li><a href="">Setting</a></li>
                                <li><a href="">Logout</a></li>
                            </ul>
                        </div>
                    </button>
                </div>

                <div className="relative">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="bg-gray-700 text-white px-3 py-1 rounded"
                    >
                        {darkMode ? "🌞 Light" : "🌙 Dark"}
                    </button>
                </div>

            </div>

        </nav>
    )
}
export default Navbar;