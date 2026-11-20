
import Image from "next/image";
import React from "react";
import { workExperience } from "@/data";
import { MovingBorderCard } from "./ui/moving-border";


const WorkExperience = () => {
    return (
        <div className="py-20 w-full">
            <h1 className="heading"> 
                My <span className="text-green-300">work experience</span>
            </h1>

            <div className="w-full my-20 grid grid-cols-1 md:grid-cols-4 gap-10">
                {workExperience.map((card) => (
                    <MovingBorderCard key={card.id} className="flex-1" backgroundColor="rgb(0,15,0)" duration={10000 + card.id * 1750}>
                        <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                            <Image className="h-auto lg:w-32 md:w-20 w-16" src={card.thumbnail} alt="" width={128} height={128} />
                            
                            <div className="lg:ms-5">
                                <h1 className="text-start text-xl md:text-2xl font-bold"> {card.title} </h1>
                                <p className="text-start text-white-100 mt-3 font-semibold"> {card.desc} </p>
                            </div>
                        </div>
                    </MovingBorderCard>
                ))}
            </div>
        </div>
    );
};
export default WorkExperience;
