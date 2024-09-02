import React from "react";

const Header: React.FC = () => {
 return (
  <header className="bg-white shadow-md py-4">
    <nav className="container mx-auto flex justify-between items-center">       
        <ul className="flex space-x-4">
           <li><a href="/" className="text-gray-500">Home</a></li>
           <li><a href="/about" className="text-gray-500">About</a></li>
           <li><a href="/projects" className="text-gray-500">Projects</a></li>
           <li><a href="/contact" className="text-gray-500">Contact</a></li>
        </ul>
     </nav>
   </header>
 )
}

export default Header;