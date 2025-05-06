import { useState } from 'react';
import logo from '../assets/logo.jpeg';
import { FaSearch, FaHeart, FaShoppingCart, FaMoon, FaUser,  FaBars  } from 'react-icons/fa';
import { MobileSidebar } from './MobileSidebar';

export function NavBar() {
  const [sidebarType, setSidebarType] = useState(null); 

  const openSidebar = (type) => setSidebarType(type);
  const closeSidebar = () => setSidebarType(null);

  return (
    <>
      <header className='flex justify-between gap-10 lg:flex p-3 justify-between bg-white w-full'>
        <img className='w-[30%]' src={logo} alt="Logo" />

       <div className="flex justify-end">
        <button 
          className="visible p-2 rounded-full hover:bg-black-600 text-black-600 lg:hidden"
          onClick={() => openSidebar('user')}
        >
          <FaUser size={25} />
        </button>

        <ul className="hidden lg:flex justify-center align-middle ml-5 p-6">
          <li className='lg:pr-5'>New</li>
          <li className='lg:pr-5'>Men</li>
          <li className='lg:pr-5'>Women</li>
          <li className='lg:pr-5'>Kids</li>
          <li className='lg:pr-5'>Jordan</li>
          <li className='lg:pr-5'>Sports</li>
        </ul>

        <div className="relative w-fit m-5 flex justify-between lg:relative">
          <input
            className=" hidden bg-gray-300 w-full rounded-lg text-white text-sm lg: visible w-48 h-10 p-2 pl-10"
            type="text"
            placeholder="Search..."
          />

          
          <button
            className="text-black-400 hover:text-gray-700 lg:hidden ml-2"
            onClick={() => openSidebar('search')}
          >
            <FaSearch size={20} />
          </button>

          
          <div className="m-0 lg:flex items-center gap-2 ml-5">
            <button className=" hidden text-black-400 p-2 rounded-full hover:bg-gray-200">
              <FaHeart size={25} />
            </button>
            <button className=" mt-4 text-black-400 p-2 rounded-full hover:bg-gray-200"
            >
              <FaShoppingCart size={25} />
            </button>
            <button className=" hidden text-black-400 p-2 rounded-full hover:bg-gray-200 cursor-pointer">
              <FaMoon size={25} />
            </button>
          </div>
            <button className="ml-3 mb-2 lg:hidden p-2 rounded-full hover:bg-gray-200"
              onClick={() => openSidebar('bars')}
            >
                <FaBars size={25} />
            </button>
        </div>
        </div>
      </header>

      {sidebarType && <MobileSidebar type={sidebarType} onClose={closeSidebar} />}
    </>
  );
}
