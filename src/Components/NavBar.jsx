import { useState } from 'react';
import logo from '../assets/logo.jpeg';
import { FaSearch, FaHeart, FaShoppingCart, FaMoon, FaUser,  FaBars  } from 'react-icons/fa';
import { MobileSidebar } from './MobileSidebar';

export function NavBar() {
    const[ActiveSidebar, setActiveSidebar]= useState(null);
  return (
    <>
    <nav className="bg-white flex justify-between">
        <img className="w-[20%] m-2" 
            src={logo} 
            alt="" 
        />
        <div className="p-2 flex justify-between mr-5 gap-6">
            <button 
            className="" 
            onClick={()=>{
                setActiveSidebar("search");
            }}
            >
                <FaSearch size={23} />
            </button>
                
            <button
             onClick={()=>{
                setActiveSidebar("user");
            }}
            > 
                <FaUser size={23} />
            </button>

            <button 
            
            > 
                <FaShoppingCart size={23} />
            </button>

            <button 
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
