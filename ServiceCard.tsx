import Image from "next/image";
import React from "react";

interface propsType {
    img: string;
    title:string;
    desc: string;
}

const ServiceCard: React.FC<propsType> = ({img, title, desc}) => {
  return (
    <div className="space-y-4 text-center">
        
        <Image
         className="mx-auto"
          src={img}
           width={100} 
           height={100} 
           alt={title}
           />

           <div className="uppercase">{title}

      <div className="flex gap-2 w-fit me-auto mt-2">
      <div className="bg-accent w-[7px] h-[7px] rounded-full" />
      <div className="bg-accent w-[7px] h-[7px] rounded-full" />
      <div className="bg-accent w-[7px] h-[7px] rounded-full" />
      <div className="bg-accent w-[7px] h-[7px] rounded-full" />
    </div>
   </div>

   <p className="text-[14px] text-gray-700">{desc}</p>
</div>
  );
};

export default ServiceCard;
