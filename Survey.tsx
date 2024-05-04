import Image from "next/image";
import React from "react";

function Survey() {
  return (
    <div className="container pt-30">
        <div className="grid lg:grid-cols-[100%,1fr] gap-20">
  <Image
      className="w-[300%] h-auto lg:w-auto lg:h-[90vh]"
      src="/survey.jpeg"
      width={1000}
      height={600}
      alt="survey image"
      />
      </div>
    <div className="self-center">
        <h2 className="text-4xl md:text-6xl font-bold">Survey</h2>
        <h2 className="text-4xl md:text-6xl font-bold pt-3">
            About Our <span className="text-accent">Food</span>
        </h2>
       
       <p className="text-gray-700 pt-16">
        The food is an excellent source of pleasure for both eater and the maker. Witnessing the food is approved is such a happy feeling for you! To make them happier and increase the quality of the food, you only need to share survey questions about food.
      </p>
       <p className="text-gray-700 pt-8">
        A good food survey is a helpful tool for you to gain valuable feedback from your target audience, including service, restaurant, etc. Collecting their positive and negative reviews will let you know your strong and weak sides.
        </p>
    </div>
</div>
  );
};

export default Survey;
