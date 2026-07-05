import {Link} from 'react-router-dom'
import { CiSquarePlus } from "react-icons/ci";
import { CiCloudSun } from "react-icons/ci";
import { BiStoreAlt } from "react-icons/bi";
import { useState, useEffect } from "react";

export default function Navbar(){

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [darkMode])

    return (
        <nav className="flex justify-between items-center p-4 ml-10 md:ml-10 mr-10 md:mr-10">
            <Link to = "/" className="flex items-center gap-2">
                <BiStoreAlt size={24} />
            </Link>
            <div className="flex items-center gap-4">
            <Link to = "/create" className="flex items-center gap-2">
                <CiSquarePlus size={24} />
            </Link>
            <button onClick={() => setDarkMode(!darkMode)} className="flex items-center gap-2 cursor-pointer">
                <CiCloudSun size={24} />
            </button>
            </div>
        </nav>
    )


}