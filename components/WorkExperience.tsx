import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/moving-border";


const WorkExperience = () => {
    return (
        <div className="py-20 w-full">
            <h1 className="heading"> 
                My <span className="text-red-400">work experience</span>
            </h1>

            <div className="w-full mt-12 grid grid-cols-1 lg:grid-cols-4 gap-10">
                {workExperience.map((card) => (
                    <Button key={card.id} className="flex-1 text-black dark:text-white border-neutral-200 dark:border-red-900/[0.5]" style={{background: "rgb(29,4,4)", backgroundColor: "linear-gradient(90deg, rgb(29, 4, 4) 0%, rgb(35, 12, 12) 100%)", borderRadius: `calc(1.75rem* 0.96)`}} duration={Math.floor(Math.random() * 10000) + 10000} borderRadius="1.75rem">
                        <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                            <img className="lg:w-32 md:w-20 w-16" src={card.thumbnail} alt={card.thumbnail}/>
                            
                            <div className="lg:ms-5">
                                <h1 className="text-start text-xl md:text-2xl font-bold"> {card.title} </h1>
                                <p className="text-start text-white-100 mt-3 font-semibold"> {card.desc} </p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    );
};
export default WorkExperience;