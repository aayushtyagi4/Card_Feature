import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const{cart} = useSelector((state)=>state);
  
  return <div>
    <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
      <NavLink to="/">
        <div className="ml-5">
          <img src="../logo.png" className="h-14" />
        </div>
      </NavLink>

      <div className="flex items-center font-medium text-slate-500 mr-5 space-x-6">
        <NavLink to="/">
          <p className="text-white">Home</p>
        </NavLink>

        <NavLink to="/cart">
          <div className="text-white relative">
            <FaCartArrowDown className="text-2xl" />
            {
              cart.length>0 &&
              <span className="absolute -top-1 -right-2 bg-green-600 rounded-full 
              text-xs w-4 h-4 flex items-center justify-center">
                {cart.length}
              </span>
            }
            
          </div>
        </NavLink>
      </div>

    </nav>
  </div>;
};

export default Navbar;
