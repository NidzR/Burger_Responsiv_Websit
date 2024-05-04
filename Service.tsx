import React from "react";
import Dash from "./Dash";
import ServiceCard from "./ServiceCard";

const serviceData = [
      {
        img: "/icon.png",
        title: "Professional Kitchen",
        desc: "A professional kitchen is a commercial kitchen typically found in restaurants, hotels, catering companies, and other food service establishments. It is equipped with specialized equipment and tools designed for high-volume cooking and food preparation.",

    },
    {
        img: "/del.png",
        title: "Delivery",
        desc: "online food delivery means prepared meals (food and drink) which are ordered online and delivered to the consumer.",
    },
    {
        img: "/wife.jpeg",
        title: "Free Wifi",
        desc: "Available Here Free and public Wi-Fi simplifies processes and saves time ",
    },
    {
        img: "/menue.png",
        title: "Veraity List",
        desc: "Hamburgers are often served with lettuce, bacon, tomato, onion, pickles, cheese, and condiments such as mustard, mayonnaise, ketchup, and relish.",
    },

]


const Service = () => {
    return (
    <div className="container pt-40">
        <div className="space-y-4 w-fit mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold">
                Choose Best <span className="text-accent">Service</span>
            </h2>
            <p className="text-gray-700">
            Quality foodservice employees have an aptitude for excellent customer service.
            </p>
            <div className="w-fit mx-auto">
                <Dash />
            </div>
        </div>


<div className="grid gap-10 md:grid-flow-cols-4 md:gap-4 pt-8">
 {serviceData.map((item, index) => <ServiceCard 
key={index} 
img={item.img} 
title={item.title} 
desc={item.desc}
/>

)}

    </div>
</div>

);
};

export default Service;