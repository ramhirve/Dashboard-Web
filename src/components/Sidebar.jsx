    import React from "react";
    import { Link } from 'react-router-dom';
    import { FaCog, FaCube, FaDashcube, FaHome, FaPoll, FaUser } from "react-icons/fa"
    const Sidebar = ({ sidebarToggle }) => {
        return (
            <div className={`${sidebarToggle ? "hidden" : "block"} w-64 bg-gray-800 fixed h-full px-4 py-2`}>
                <div className="my-2 mb-4">
                    <h1 className="text-2xl text-white font-semibold">Actions</h1>
                </div>
                <hr className="border-t-2 border-white" />
                <ul className="mt-3 text-white font-bold">
                    <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                        <Link to="/" className="px-3">
                            <FaHome className="inline-block w-6 h-6 mr-2 -mt-2"></FaHome>
                            Home
                        </Link>
                    </li>
                    <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                        <Link to="/dashboard"  className="px-3">
                            <FaCube className="inline-block w-6 h-6 mr-2 -mt-2"></FaCube>
                            Dashboard
                        </Link>
                    </li>
                    <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                        <Link to="/users"  className="px-3">
                            <FaUser className="inline-block w-6 h-6 mr-2 -mt-2"></FaUser>
                            Users
                        </Link>
                    </li>
                    <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                        <Link to="/reports"  className="px-3">
                            <FaPoll className="inline-block w-6 h-6 mr-2 -mt-2"></FaPoll>
                            Reports
                        </Link>
                    </li>
                    <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                        <Link to="/"  className="px-3">
                            <FaCog className="inline-block w-6 h-6 mr-2 -mt-2"></FaCog>
                            Setting
                        </Link>
                    </li>
                </ul>

            </div>
        )
    }
    export default Sidebar;