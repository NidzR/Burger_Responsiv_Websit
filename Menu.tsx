import React from "react";
import Dash from "./Dash";
import Image from "next/image";
import MenuCard from "./MenuCard";

const menuData = [
    {
      img: "/sld.jpeg",
      title: "Delicious Creamy Salad",
      desc: "Healthy nDelicious Fruit Salad",
      price: "$29.50",
    },
  {
      img: "/ops.jpeg",
      title: "Hot n spicey Cheesy Burger",
     desc: "Full Hot n Spicey Flavour",
     price: "$35.50",
  },
  {
      img: "/drinks.jpeg",
      title: "Fresh Juices",
      desc: "Available Fresh Juices n Soft Drinks ",
      price: "$30.20"
  },
  {
      img: "/ice.jpeg",
      title: "Creamy Ice-Cream",
      desc: "All Flavours Rich Creamy Ice-Creams",
      price: "$60.00"
  },
  {
      img: "/look.jpeg",
      title: "Creamy Double layers",
      desc: "Juicy Creamy Rich Cheesy Flavour Burger",
      price: "$70.20"
  },
  {
      img: "/pop.jpeg",
      title: "Burger With Fries",
      desc: "Kids Platter Burger With Fries",
      price: "$60.00"
  },

];

const Menu = () => {
  return (
    <div className="container pt-40">
        <div className="space-y-4 w-fit mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold">
                Our <span className="text-accent">Menu</span>
            </h2>
            <p className="text-gray-700">
            Our collection of professionally designed burger menu templates caters to a wide range of burger styles,
            <br />
            from classic cheeseburgers to gourmet creations
            </p>
            <div className="w-fit mx-auto">
                <Dash />
            </div>
        </div>
      <ul className="mt-8 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto">
            <li className="bg-accent text-white p-1">Appetizers</li>
            <li>Deserts</li>
            <li>Full Spicy</li>
            <li>Double Chees Layer</li>
            <li>Cheese Burger</li>
            <li>Salads</li>
            <li>Drinks</li>
        </ul>
<div className="grid lg:grid-cols-[35%,1fr] gap-10 pt-10">
    <div className="w-fit mx-auto">
        <Image className="w-[100%] max-w-[800px] h-auto"
        src="/api.jpeg"
        width={800}
        height={900}
        alt="dish"
        />
    </div>
<div className="grid w-fit max-auto sm:grid-cols-2 gap-4">
{menuData.map((item, index) => (
 <MenuCard 
 key={index} 
 img={item. img} 
 title={item. title} 
 desc={item. desc} 
 price={item. price}
 />
 ))};

     </div>
   </div>
</div>

  );
};

export default Menu;
