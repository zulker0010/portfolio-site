import React from "react";

const Bio: React.FC = () => {
 return(
   <section className="flex flex-col font-mono text-wrap text-center">
        <img 
            src="https://drive.google.com/uc?export=view&id=1iQa1_a1wUCCX8z7jnhbIgpRY9pwuprrr" 
            alt="My BIO Image" 
            className="w-32 h-32 md:w-48 md:h-48 rounded-full"
      />
      <div>
          <h2 className="text-2xl">Hello! I'm Zulker Yusuf.</h2>
          <p className="text-gray-950 mt-4"></p>
       </div>
   </section>
 );
}; 

export default Bio;