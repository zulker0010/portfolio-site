import React from "react";

const NavBar: React.FC = () =>{
 return(
  <ul className="py-4 font-mono font-extrabold text-lg">
            <a  className="font-mono font-extrabold text-lg mr-4">Projects</a>
            <a href="https://substack.com/@zulkeryusuf" target="_blank" className="font-mono font-extrabold text-lg underline mr-4 hover:text-white hover:bg-black">Essays</a>                      
   </ul>
 );
};

export default NavBar;