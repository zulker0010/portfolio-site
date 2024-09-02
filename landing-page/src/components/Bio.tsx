import React from "react";


const Bio: React.FC = () => {
 return(
   <section className="flex flex-col text-wrap">
        <img 
            src="https://drive.google.com/uc?export=view&id=1mrh0LdDvF6RQZ5je3oMjJdLc9YruXRqW"
            className="w-40 h-40 md:w-44 md:h-44 rounded-full border mb-4 md:mb-0 md:mr-8"
      />
      <div>
          <h2 className="text-xl p-4 text-left font-mono">Hello! I'm Zulker Yusuf.</h2>
          <p className="text-gray-950 mt-4"></p>
       </div>
   </section>
 );
}; 

export default Bio;