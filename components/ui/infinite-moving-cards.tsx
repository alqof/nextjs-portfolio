"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = false,
    className,
}: {
    // items: {
        //     quote: string;
        //     name: string;
        //     title: string;
    // }[];
    items: {
        name: string;
        img: string;
        imgName: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);

    const [start, setStart] = useState(false);
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "50s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    
    return (
        <div className={cn("relative scroller z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_30%,white_70%,transparent)]", className)} ref={containerRef}>
            <ul ref={scrollerRef} className={cn("w-max min-w-full py-6 shrink-0 gap-12 md:gap-20 flex flex-nowrap", start && "animate-scroll ", pauseOnHover && "hover:[animation-play-state:paused]")}>
                {items.map((item, idx) => (
                    <li key={idx} className="relative flex items-center justify-center" style={{background: "rgba(0, 0, 0, 0)"}}>
                        <div className="max-w-32 md:max-w-60 flex gap-x-3">
                            <img src={item.img} alt={item.name} className="md:w-10 w-5"/>
                            <img src={item.imgName} alt={item.name} className="md:w-24 w-20"/>
                        </div>
                    </li>
                    
                    // <li key={idx} className="relative w-[90vw] max-w-full p-5 md:p-16 md:w-[60vw] rounded-2xl border border-b-0 flex-shrink-0 border-slate-800" style={{background: "rgb(4,7,29)", backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"}}>
                    //     <blockquote className="flex-none md:flex gap-5">
                    //         <div className="flex md:max-w-60 max-w-32 gap-x-3">
                    //             <img src={item.img} alt={item.name} className="md:w-10 w-5"/>
                    //             <img src={item.imgName} alt={item.name} className="md:w-24 w-20"/>
                    //         </div>

                    //         <div className="me-3 w-full md:w-2/5">
                    //             <img src="/p2.svg" alt="system" className="w-full"/>
                    //         </div>

                    //         <div className="w-full: md:w-3/5">
                    //             <div className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]" aria-hidden="true"></div>

                    //             <div className="relative z-20 mb-6 flex flex-row items-center">
                    //                 <span className="flex flex-col gap-1">
                    //                     <span className="text-xl font-bold leading-[1.6] text-white"> {item.name} </span>
                    //                     <span className=" text-sm leading-[1.6] text-white-200 font-normal"> {item.title} </span>
                    //                 </span>
                    //             </div>
                                
                    //             <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal"> {item.quote} </span>
                    //         </div>
                    //     </blockquote>
                    // </li>
                ))}
            </ul>
        </div>
    );
};
