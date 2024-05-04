import Image from 'next/image';
import React from 'react';

import { AiOutlineMenu } from 'react-icons/ai';
 
const Navbar = () => {
    return (
    <div className="container pt-0">
        <div className="flex justify-between items-center">
            <Image src="/png.png" width={160} height={100} alt="logo" />
      <ul className="md:flex hidden gap-8 items-center font-bold text-[35px]">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Food</li>
        <li>Flavours</li>
    </ul>
      <button className="bg-accent text-white px-6 py-4 rounded-2xl">
        SignUp
        </button>
        
        <AiOutlineMenu className="md:hidden text-accent" size={30}/>

        </div>
    </div>
    
    );
};

export default  Navbar;