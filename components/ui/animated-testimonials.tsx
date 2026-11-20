"use client";

import Image from "next/image";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useCallback, useEffect, useState } from "react";

type Testimonial = {
    quote: string;
    name: string;
    designation: string;
    src: string;
};

export const AnimatedTestimonials = ({testimonials, autoplay=false}: {testimonials: Testimonial[]; autoplay?: boolean;}) => {
    const [activeIndex, setActive] = useState(0);
    const active = testimonials.length ? activeIndex % testimonials.length : 0;
    const handleNext = useCallback(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
    }, [testimonials.length]);
    const handlePrev = () => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };
    const isActive = (index: number) => {
        return index === active;
    };

    useEffect(() => {
        if (autoplay && testimonials.length > 1) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay, handleNext, testimonials.length]);

    if (testimonials.length === 0) return null;

    return (
        <div className="w-full px-4 py-28 md:px-8 lg:px-12 antialiased">
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                <div className="relative h-48 md:h-80 w-full">
                    <AnimatePresence>
                        {testimonials.map((testimonial, index) => (
                            <motion.div key={index}
                                initial={{
                                    opacity: 0,
                                    scale: 0.9,
                                    z: -100,
                                    rotate: ((index * 13 + 7) % 21) - 10,
                                }}
                                animate={{
                                    opacity: isActive(index) ? 1 : 0.7,
                                    scale: isActive(index) ? 1 : 0.95,
                                    z: isActive(index) ? 0 : -100,
                                    rotate: isActive(index) ? 0 : ((index * 13 + 7) % 21) - 10,
                                    zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
                                    y: isActive(index) ? [0, -80, 0] : 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.9,
                                    z: 100,
                                    rotate: ((index * 13 + 7) % 21) - 10,
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeInOut",
                                }}
                                className="absolute inset-0 origin-bottom"
                            >
                                <Image
                                    src={testimonial.src}
                                    alt={testimonial.name}
                                    fill
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                    draggable={false}
                                    className="rounded-3xl object-cover object-center"
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="py-4 flex flex-col justify-between">
                    <motion.div key={active}
                        initial={{
                            y: 20,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        exit={{
                            y: -20,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                        }}
                    >
                        <h3 className="text-2xl font-bold text-black dark:text-white"> {testimonials[active].name} </h3>
                        <p className="text-sm text-gray-500 dark:text-neutral-500 italic"> {testimonials[active].designation} </p>
                        <motion.p className="mt-6 text-lg text-gray-500 dark:text-neutral-300">
                            {testimonials[active].quote.split(" ").map((word, index) => (
                                <motion.span key={index}
                                    initial={{
                                        filter: "blur(10px)",
                                        opacity: 0,
                                        y: 5,
                                    }}
                                    animate={{
                                        filter: "blur(0px)",
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeInOut",
                                        delay: 0.02 * index,
                                    }}
                                    className="inline-block"
                                >
                                    {word}&nbsp;
                                </motion.span>
                            ))}
                        </motion.p>
                    </motion.div>

                    <div className="flex gap-4 pt-6 md:pt-0">
                        <button type="button" aria-label="Previous project" onClick={handlePrev} className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800">
                            <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
                        </button>

                        <button type="button" aria-label="Next project" onClick={handleNext} className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800">
                            <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
