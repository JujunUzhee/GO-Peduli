import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-Green p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/image/logo.png" alt="" className="h-10 mr-2"/>
            <Link to="#" className="  text-white font-semibold text-sm mt-2">
              Go Peduli
            </Link>
          </div>
          <div className="hidden md:block flex-grow">
            <ul className="flex justify-center  space-x-20 text-sm">
              <li>
                <Link to="/" className="text-white hover:text-gray-300">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/donasiku" className="text-white hover:text-gray-300">
                  Donasiku
                </Link>
              </li>
              <li>
                <Link to="/tentang" className="text-white hover:text-gray-300">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/Berita" className="text-white hover:text-gray-300">
                  Berita
                </Link>
              </li>
        
            <li>
                <Link to="/faq" className="text-white hover:text-gray-300">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
