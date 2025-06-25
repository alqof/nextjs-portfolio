"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";

const Approach = ()=>{
    return (
        <section className="w-full py-20">
            <h1 className="heading"> 
                Development <span className="text-red-400">strategy</span>
                {/* My <span className="text-red-400">approach</span>  */}
            </h1>

            <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
                <Card title="Planning & Strategy" icon={<AceternityIcon order="Phase 1" />} des="We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.">
                    <CanvasRevealEffect 
                        animationSpeed={5} 
                        containerClassName="bg-black rounded-3xl overflow-hidden"
                        colors={[
                            [236, 72, 72],
                            [249, 121, 147],
                        ]}
                    />
                </Card>

                <Card title="Development & Progress Update" icon={<AceternityIcon order="Phase 2" />} des="Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.">
                    <CanvasRevealEffect
                        animationSpeed={4}
                        containerClassName="bg-black rounded-3xl overflow-hidden"
                        colors={[
                            [200, 255, 158],
                            [237, 247, 198],
                        ]}
                        dotSize={2}
                    />
                </Card>

                <Card title="Development & Launch" icon={<AceternityIcon order="Phase 3" />} des="This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.">
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-black rounded-3xl overflow-hidden"
                        colors={[
                            [173, 252, 255],
                            [199, 211, 255],
                        ]}
                    />
                </Card>
            </div>
        </section>
    );
};
export default Approach;

const Card = ({
    title,
    icon,
    children,
    des,
}: {
    title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
    des: string;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl " style={{background: "rgb(29, 12, 4)", backgroundColor: "linear-gradient(90deg, rgb(29, 4, 4) 0%, rgb(35, 12, 12) 100%)"}} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
            <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
            <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />
            <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />

            <AnimatePresence>
                {hovered && (
                    <motion.div className="h-full w-full absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20 px-10">
                <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center">
                    {icon}
                </div>

                <h2 className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200" style={{color:"#FFFF00", textShadow: "1px 1px 5px #0007"}}>
                    {title}
                </h2>

                <p className="relative z-10 mt-6 opacity-0 group-hover/canvas-card:opacity-100 group-hover/canvas-card:text-white text-lg text-center group-hover/canvas-card:-translate-y-2 transition duration-200" style={{color:"#FFFFFF"}}> 
                    {des} 
                </p>
            </div>
        </div>
    );
};

const AceternityIcon = ({ order }: { order: string }) => {
    return (
        <div>
            <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e8b20e_0%,#ab0909_50%,#e8b20e_100%)]"/>
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-red-950 px-5 py-2 text-red-200 backdrop-blur-3xl font-bold text-2xl"> {order} </span>
            </button>
        </div>
    );
};

export const Icon = ({ className, ...rest }: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};