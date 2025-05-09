import { useState } from 'react';
import logo from '../assets/logo.jpeg';
import { FaSearch, FaHeart, FaShoppingCart, FaMoon, FaUser,  FaBars  } from 'react-icons/fa';
import { MobileSidebar } from './MobileSidebar';


export function NavBar() {
    const[ActiveSidebar, setActiveSidebar]= useState(null);
  return (
    <>

    {/* navbar */}

    <nav className="bg-white flex justify-between">
        <img className="w-[10%] m-2 md:w-[7%] lg:w-[5%] xl:w-[5%] " 
            src={logo} 
            alt="" 
        />

        {/* navlinks */}
        <div> 
            <ul className=" hidden lg:flex flex-col gap-6 mt-3 mb-5 lg:flex-row lg:mt-9 lg:ml-20">
                <li  className="text-xl lg:text-sm">New</li>
                <li  className="text-xl lg:text-sm">Men</li>
                <li  className="text-xl lg:text-sm">Women</li>
                <li  className="text-xl lg:text-sm">Kids</li>
                <li  className="text-xl lg:text-sm">Jordan</li>
                <li  className="text-xl lg:text-sm">Sport</li>
            </ul>
        </div>

        {/* search and input  */}

       <div className="p-2 flex justify-between mr-5 gap-6 lg:p-0">
            <div className="relative flex lg:block w-full lg:w-[70%] lg:mt-7lg:flex lg:mt-3 xl:mt-6">
                <input
                    type="text"
                    placeholder="Search"
                    className="hidden lg:block lg:w-full lg:border lg:rounded-lg lg:py-2 lg:pl-12 lg:pr-4 lg:text-gray-800 lg:placeholder:text-lg lg:placeholder:text-gray-400 lg:placeholder:pl-2 2xl:"
                />
                <button 
                    className="lg:absolute lg:left-3 lg:top-[30%] lg:-translate-y-1/2 lg:text-black "

                onClick={()=>{
                    setActiveSidebar("search");
                }}
                >
                <FaSearch
                    className="text-black"
                    size={20}
                />
                </button>
            </div>

                {/* user icon */}

            <button
            className='lg:hidden'
             onClick={()=>{
                setActiveSidebar("user");
            }}
            > 
                <FaUser size={23} />
            </button>

            {/* favorites icon */}

            <button 
                className="hidden lg:inline-block lg:transition-shadow duration-200"
            > 
                <FaHeart size={23} />
            </button>

            {/* cart icon */}

            <button 
            
            > 
                <FaShoppingCart size={23} />
            </button>   

            {/* hamburger menu */}

            <button 
                className='lg:hidden'
                onClick={()=>{
                    setActiveSidebar("bars");
                }}
            > 
                <FaBars size={23} />
            </button>
        </div>
    </nav>

    {/* dropdown and sidebar toggle component and props */}
    {ActiveSidebar &&
     <MobileSidebar 
     type={ActiveSidebar}
    onClose={()=>{
        setActiveSidebar(null)
    }}
     />}
    </>
  );
}
