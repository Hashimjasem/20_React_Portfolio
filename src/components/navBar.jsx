import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function NavBar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="flex justify-between items-center mx-auto max-w-[1240px] px-4 text-white h-24 ">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">HASHIM JASEM</h1>
            <ul className="flex hidden">
                <li className="p-4">home</li>
                <li className="p-4">about me</li>
                <li className="p-4">projects</li>
                <li className="p-4">Blogs</li>
                <li className="p-4">Contact Me</li>
            </ul>

            <div onClick={handleNav}>
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>

            <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full bg-[#000300] border-r border-r-gray-900" : 'fixed left-[-100%]'}>
                <h1 className="w-full text-3xl font-bold text-[#00df9a]">HASHIM JASEM</h1>

                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-600">Blogs</li>
                    <li className="p-4 border-b border-gray-600">home</li>
                    <li className="p-4 border-b border-gray-600">about me</li>
                    <li className="p-4 border-b border-gray-600">projects</li>
                    <li className="p-4">Contact Me</li>
                </ul>
            </div>
        </div>

    );
}

export default NavBar;