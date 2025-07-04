"use client";

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import animationData from "@/data/confetti.json";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import dynamic from "next/dynamic";
import MagicButton from "./MagicButton";

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
const GlobeGL = dynamic(() => import('@/components/ui/GlobeGL'), { ssr: false });

export const BentoGrid = ({className, children} : {className?:string; children?: React.ReactNode;}) => {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto", className)}>
            {children}
        </div>
    );
};

export const BentoGridItem = ({id, className, title, description, img, imgClassName, titleClassName, spareImg}: { id:number; className?:string; title?:string | React.ReactNode; description?:string | React.ReactNode; img?:string; imgClassName?:string; titleClassName?:string; spareImg?:string;}) => {
    const leftLists = ["ReactJS", "Express", "Typescript"];
    const rightLists = ["Vite", "NextJS", "PostgreSQL"];

    const [copied, setCopied] = useState(false);
    const handleCopy = ()=>{
        const text = "alqofnuraji@gmail.com";
        navigator.clipboard.writeText(text);
        setCopied(true);
    };

    return (
        <div className={cn("row-span-1 relative flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none", className)} style={{background:"rgb(29, 4, 4)", backgroundColor:"linear-gradient(90deg, rgb(29, 4, 4) 0%, rgb(35, 12, 12) 100%)"}}>
            <div className={`${id===6 && "flex justify-center"} h-full`}>
                <div className="absolute w-full h-full">
                    { img && (
                        <img src={img} alt={img} className={cn(imgClassName, "object-cover object-center")}/>
                    )}
                </div>

                <div className={`absolute right-0 -bottom-5 ${id===5 && "w-full opacity-80"}`}>
                    { spareImg && (<img src={spareImg} alt={spareImg} className="w-full h-full object-cover object-center" />) }
                </div>

                {id===6 && (
                    // Gradient Animation
                    <BackgroundGradientAnimation>
                        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
                    </BackgroundGradientAnimation>
                )}

                <div className={cn(titleClassName, "relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 group-hover/bento:translate-x-2 transition duration-200")}>
                    <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10"> {description} </div>
                    <div className={`max-w-96 lg:max-w-1/2 text-lg lg:text-3xl font-sans font-bold z-10`}> {title} </div>
    
                    {/* Github Globe */}
                    {id===2 && <GlobeGL />}

                    {id===3 && (
                        <div className="absolute w-fit -right-3 lg:-right-2 flex gap-1 lg:gap-5">
                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-5">
                                {leftLists.map((item, i) => (
                                    <span key={i} className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#2e2310]">
                                        {item}
                                    </span>
                                ))}
                                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#2e2310]"></span>
                            </div>
                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-5">
                                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#2e2310]"></span>
                                {rightLists.map((item, i) => (
                                    <span key={i} className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#2e2310]">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {id===6 && (
                        <div className="relative mt-5">
                            <div className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}>
                                <Lottie 
                                    animationData={animationData} 
                                    loop={copied} 
                                    autoplay={copied} 
                                    height={200} 
                                    width={400}
                                />
                            </div>

                            <MagicButton title={copied ? "Email is Copied!" : "Copy my email address"} icon={<IoCopyOutline />} position="left" handleClick={handleCopy} otherClasses="!bg-[#320000]"/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
