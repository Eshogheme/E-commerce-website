import { useState } from 'react';
import logo from '../assets/logo.jpeg';
import { FaSearch, FaHeart, FaShoppingCart, FaMoon, FaUser,  FaBars  } from 'react-icons/fa';
import { MobileSidebar } from './MobileSidebar';
import { NavLinks } from './NavLinks';

export function NavBar() {
    const[ActiveSidebar, setActiveSidebar]= useState(null);
  return (
    <>
    <nav className="bg-white flex justify-between">
        <img className="w-[10%] m-2 md:w-[7%] lg:w-[5%] xl:w-[5%] " 
            src={logo} 
            alt="" 
        />

        <div>
            <NavLinks />
        </div>
       <div className="p-2 flex justify-between mr-5 gap-6 lg:p-0">
            <div className="relative flex lg:block w-full lg:w-[70%] lg:mt-7lg:flex lg:mt-3 xl:mt-6">
                <input
                    type="text"
                    placeholder="Search"
                    className="hidden lg:block lg:w-full lg:border lg:rounded-lg lg:py-2 lg:pl-12 lg:pr-4 lg:text-gray-800 lg:placeholder:text-lg lg:placeholder:text-gray-400 lg:placeholder:pl-2 2xl:mt-6"
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

            <button
            className='lg:hidden'
             onClick={()=>{
                setActiveSidebar("user");
            }}
            > 
                <FaUser size={23} />
            </button>

            
            <button 
                className="hidden lg:inline-block lg:transition-shadow duration-200"
            > 
                <FaHeart size={23} />
            </button>
            <button 
            
            > 
                <FaShoppingCart size={23} />
            </button>

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
