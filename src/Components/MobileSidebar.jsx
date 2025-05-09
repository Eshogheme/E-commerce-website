import { FaTimes } from "react-icons/fa";
import { NavLinks } from './NavLinks';
  export function MobileSidebar({ type, onClose }) {
    return (
      <>

      {/* close button */}
     <div className="fixed top-0 right-0 h-screen w-[80%] max-w-sm bg-white shadow-lg p-6 z-50 transition-transform duration-300">
        <button className="absolute top-4 right-4 mb-10" 
          onClick ={onClose}
        >
          <FaTimes size={25} />
        </button>

        {/* search prop */}

        {type === "search" && 
           <div>
           <h1 className="font-bold text-xl mt-7 mb-3">Search</h1>
           <input
             className="border w-full p-2 mb-10 rounded-lg"
             type="text"
             placeholder="Search..."
           />
         </div>
         }
           
           {/* user prop */}

          {type === "user" && <div>
            <h1  className="font-bold text-xl mt-7 mb-3">User</h1>
            <p>Login</p>

            <p>SignUp</p>
            </div>
          }

          {/* hamburger menu prop */}

          {type === "bars" && <div className="flex flex-col justify-between">
              <h1  className="font-bold text-xl mt-7 mb-3">Menu</h1>
                <NavLinks />

                {/* join us and sign up buttons */}
              <div className="flex gap-7 mt-40">
                <button className="border p-3 w-[45%] rounded-xl bg-black text-white">
                  Join Us
                </button>

                <button className="border  p-3 w-[45%] rounded-xl">
                  SignUp
                </button>
              </div>
            </div>}
     </div>
     </>
    );
  }
  