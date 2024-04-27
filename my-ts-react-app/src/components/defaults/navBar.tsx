import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/styles.css';
const NavBar: React.FC = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleSearch = () => {
        // Your search logic here
        console.log('Search logic triggered');
      };
    
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-100 py-2 lg:py-0 lg:px-12 shadow border-solid border-t-2 border-gray-300">
        <div className="flex items-center">
          <div className="flex-shrink-0 text-gray-800 mr-4">
            <span className="font-semibold text-xl tracking-tight">Impact Journal</span>
          </div>
          <div className="relative text-gray-600 flex items-center">
            <input
              className="border-2 border-gray-300 bg-white h-8 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
              type="search" name="search" placeholder="Search" onClick={handleSearch}
            />
            <button type="submit" className="absolute right-0 top-0 mt-1 mr-2">
              <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966">
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="lg:hidden">
          <button
            id="nav"
            className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
            onClick={handleMobileMenuToggle}
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
        </div>
        <div className={`menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="text-md font-bold text-gray-700 lg:flex-grow">
            <a href="#responsive-header" className="block mt-2 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2 flex items-center">
              <svg className="fill-current h-6 w-6 mr-1 flex items-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2L0 9l2 2 2-2 3 13h2l1-3h6l1 3h2l3-13 2 2 2-2-12-7zM6.479 10L12 4.432 17.521 10H6.479z"/>
              </svg>
              Home
            </a>
            {/* Add more menu items here */}
          </div>
        </div>
      </nav>
      );
};

export default NavBar;