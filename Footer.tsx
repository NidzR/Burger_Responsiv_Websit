import React from "react";


import { FaFacebook, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { BsTwitter, BsPinterest } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="container pt-40">
            <div className="grid md:grid-cols-3 gap-20">
                <div className="space-y-4">
                    <h2 className="text-xl font-bold">About Us</h2>
                  <p className="leading-[1.9]">
                  Welcome to our Burger Shop, where quality ingredients meet culinary expertise to create mouthwatering burgers that redefine indulgence. With a commitment to flavor and freshness, we craft each burger with passion, ensuring a delightful experience with every bite. Join us and savor the essence of burger perfection.
                  </p>
             </div>

             <div className="space-y-6">
                <h2 className="text-xl font-bold">The Resturant</h2>

                <ul className="space-y-2">
                    <li>About Us</li>
                    <li>Chefs</li>
                    <li>Events</li>
                    <li>Contact</li>
                </ul>
             </div>

             <div>
                <div className="flex gap-8 text-accent text-6xl pt-20">
                <FaFacebookF />
                <BsTwitter />
                <BsPinterest />
                <FaLinkedinIn />
              </div>
             </div>
            </div>
        </div>
    )
};

export default Footer;