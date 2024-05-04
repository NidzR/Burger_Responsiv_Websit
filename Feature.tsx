import React from 'react';
import Dash from "./Dash";
import Image from 'next/image';

const Feature = () => {
    return (
    <div className="container pt-40">
    <h2 className="text-6xl font-bold">Our</h2>
   <h2 className="text-7xl font-bold pt-4">
    Featured <span className="text-accent">Food</span>
   </h2>
   <p className="max-w-[550px] pt-10 text-gray-700">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe nisi fuga nesciunt neque quam molestiae maxime illo repellendus excepturi! Quod dolorum praesentium blanditiis id doloribus atque placeat, ut ipsa!
   </p>
<Dash />
   <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10">
   <div className="w-fit mx-auto self-end">
        <Image 
        className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl" src="/lok.jpeg"
         width={300} 
         height={600} 
         alt="grid image" 
         />
 <div className="space-y-4">
      <Dash />
        <h2 className="font-medium text-xl">Cheese Burger</h2>
        <p className="text-gray-700 text-[14px] xl:text-[16px]">
        I know you know how to make a cheeseburger ! From the best beef to the best bun to the best cheese, today’s burger recipe also comes with your choice of burger sauces: a tomato one or my quick creamy Special Burger Sauce.
        </p>
      </div>
    </div>


    <div className="w-fit mx-auto">
        <Image 
        className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl" src="/fresh.jpeg"
         width={300} 
         height={600} 
         alt="grid image" 
         />
 <div className="space-y-4">
      <Dash />
        <h2 className="font-medium text-xl">Cheese Burger</h2>
        <p className="text-gray-700 text-[14px] xl:text-[16px]">
        I always hunt down burger buns around 10cm / 4″ in diameter. Why? Because I like my patties to cover the bun from edge to edge, and it becomes a little more logistically challenging to make patties larger than 10cm when you factor in a 25% diameter shrinkage as they cook.
        </p>
      </div>
    </div>

    <div className="w-fit mx-auto">
        <Image 
        className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl" src="/salad.jpeg"
         width={400} 
         height={700} 
         alt="grid image" 
         />
 <div className="space-y-4">
      <Dash />
        <h2 className="font-medium text-xl">Cheese Burger</h2>
        <p className="text-gray-700 text-[14px] xl:text-[16px]">
        <b>1.Lettuce,2.Onion,3.Tomato,4.Pickles </b>
        Opt for big gherkins rather than small ones, else you’ll end up with a burger scattered with dozens of tiny little gherkin rounds! And that ain’t cool
        </p>
      </div>
    </div>
   </div>
  </div>
    
 );
};

export default Feature;