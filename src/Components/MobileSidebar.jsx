import { FaTimes } from "react-icons/fa";
  export function MobileSidebar({ type, onClose }) {
    return (
      <aside className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg p-4 z-50">
        <button
        onClick={onClose}
        className="absolute top-4 right-4 text-black-600"
      >
        <FaTimes size={25} />
      </button>

        {type === 'search' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Search</h2>
            <input
              type="text"
              placeholder="Search products..."
              className="w-full p-2 border rounded"
            />
          </div>
        )}
  
        {type === 'user' && (
          <div>
            <h2 className="text-xl font-semibold mt-7 mb-4">User Account</h2>
            <button className="block w-full text-left text-lg mb-2 text-gray-700">Login</button>
            <button className="block w-full text-left text-lg text-gray-700">Register</button>
          </div>
        )}


        
          {type === 'bars' && (
           <div className="flex flex-col items-start gap-y-6 p-6">
           
           <ul className="flex flex-col space-y-4 mt-10 mb-20">
             <li className="text-2xl">New</li>
             <li className="text-2xl">Men</li>
             <li className="text-2xl">Women</li>
             <li className="text-2xl">Kids</li>
             <li className="text-2xl">Jordan</li>
             <li className="text-2xl">Sports</li>
           </ul>
         
           
           <p className="text-xl mb-10">
             Become a Nike member for the best products, inspiration and stories in sport. <a href="#" className="text-black-600 font-bold">Learn More</a>
           </p>
         
          
           <div className="flex gap-4 w-full">
             <button className="flex-1 p-3 rounded-2xl bg-black text-white">
               Join Us
             </button>
             <button className="flex-1 p-3 rounded-2xl border">
               Sign Up
             </button>
           </div>
         </div>
         

        )}
      </aside>
    );
  }
  