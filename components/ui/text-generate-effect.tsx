"use client";
import React from "react";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({words, className}: {words:string; className?: string;}) => {
    const [scope, animate] = useAnimate();
    const wordsArray = words.split(" ");

    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
            },
            {
                duration: 2,
                delay: stagger(0.2),
            }
        );
    }, [animate]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span key={word + idx} className={` ${idx > 3 ? "text-red-400" : "dark:text-white text-black"}`}>
                            {word}{" "}
                        </motion.span>
                    )
                })}
            </motion.div>
        );
    };
    const renderWordsMobile = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <React.Fragment key={idx}>
                            {((idx === 0 || idx === 1) || (idx === 2 || idx === 3) || (idx === 4 || idx === 5)) && (
                                <>
                                    {idx === 0 || idx === 1 ? (
                                        <>
                                            <motion.span key={word + idx} className="dark:text-white text-black">
                                                {word}{" "}
                                            </motion.span>
                                            {idx === 1 && <br />}
                                        </>
                                    ) : idx === 2 || idx === 3 ? (
                                        <>
                                            <motion.span key={word + idx} className="text-red-400">
                                                {word}{" "}
                                            </motion.span>
                                            {idx === 3 && <br />}
                                        </>
                                    ) : (
                                        <motion.span key={word + idx} className="dark:text-white text-black">
                                            {word}{" "}
                                        </motion.span>
                                    )}
                                </>
                            )}
                        </React.Fragment>
                        // <motion.span key={word + idx} className={` ${idx > 3 ? "text-red-400" : "dark:text-white text-black"}`}> {word}{" "} </motion.span>
                    )
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-bold", className)}>
            <div className="my-4">
                <div className="hidden md:block dark:text-white text-black leading-snug tracking-wide"> {renderWords()} </div>
                <div className="block md:hidden dark:text-white text-black leading-snug tracking-wide"> 
                    {renderWordsMobile()}
                    {/* Transforming Concepts <br></br>
                    into Seamless <br></br> 
                    User Experiences */}
                </div>
            </div>
        </div>
    );
};