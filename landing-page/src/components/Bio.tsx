
import React from "react";
import { Image } from "astro:assets"; 
import myImage from 'src/assets/profile.jpeg';

const Bio: React.FC = () => {
 return(
   <section className="object-left-top text-left flex-col p-6 max-w-lg mx-auto box-border border-r-2 ml-4 border-slate-200">
      <div className="flex flex-col items-start">
        <img 
            src='src/assets/bnw.jpg'
            className="w-96 h-96 md:w-56 md:h-56 rounded-full border mb-4 md:mb-0 md:mr-8 border-slate-200"/>
      </div>
      <div className="font-mono my-8">
          <h2 className=" text-2xl font-extrabold font-mono my-6">Hello! I'm Zulker Yusuf. </h2>
          <p className="text-gray-950 font-light text-xl">A 22 y/o Information Systems and Finance Major & Mathematics Minor.</p>
          <p className="text-gray-950 font-light text-xl"> Currently a senior year under-grad at NSU.</p>
          <p className="text-gray-950 font-bold text-2xl my-6"> Fun facts about me:</p>
          <p className="text-gray-900 font-normal text-xl">1. I once ran a 7.5k marathon </p>
          <p className="text-gray-900 font-normal text-xl">2. Made at least 30 hip-hop playlists</p>
          <p className="text-gray-900 font-normal text-xl">3. Traveled to 5/8 divisions of Bangladesh </p>
          <p className="text-gray-900 font-normal text-xl">4. Current interests include: data pipeline engineering & correlation of vintage and modern UI</p>
       </div>
   </section>
 );
}; 

export default Bio;