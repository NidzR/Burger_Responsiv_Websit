import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
    return (
    <div className="relative min-h-screen">
        <Image 
        className="lg:w-[600px] xl:w-[680px] h-auto absolute right-3 top-16 -z-10"
         src="/logo.png"
          width={800}
           height={600}
           alt="burger bg"
           />
        <Navbar />

       <div className="container h-[calc(100vh-120px)] grid items-center">|
    <div className="space-y-4 bg-[#ffffff98] w-fit p-2">
        <p className="uppercase font-medium">Wide options of choices</p>
        <h2 className="text-4xl sm:text-7xl font-bold">
            Delicious <span className="text-accent">Food</span>
        </h2>
        <p className="text-gray-700 text-[16px] sm:text-[20px]">
            Deliciouse Food color, aroma and taste.
             <br />
            What are you waiting for?
        </p>
       <button className="bg-accent text-white px-8 py-4 rounded-3xl text-[16px] sm:text-[16px]">
            View More
        </button>
     </div>
   </div>    
  </div>
   
);
};

export default Hero;
