"use client";
import React, { JSX, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FaHome } from "react-icons/fa";

export const FloatingNav = ({navItems, className}: {navItems: {name:string; link:string; icon?:JSX.Element;}[]; className?:string;}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{opacity:1, y:-100}}
        animate={{y: visible ? 0 : -100, opacity: visible ? 1 : 0}}
        transition={{duration: 0.2}}
        className={cn("flex max-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-6 md:px-10 py-3 md:py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4", className)}
        style={{backdropFilter: "blur(16px) saturate(180%)", backgroundColor: "rgba(40,17,17, 0.7)", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.2)", boxShadow: "0px 0px 10px #fff5"}}
      >
        {navItems.map((navItem: {name:string; link:string; icon?:JSX.Element}, idx:number) => (
          <Link key={`link=${idx}`} href={navItem.link} className={cn("relative flex items-center space-x-1 text-neutral-600 dark:text-neutral-50 dark:hover:text-neutral-300 hover:text-neutral-500")}>
            {navItem.name==='Home' 
              ? <FaHome /> 
              : (
                <>
                  <span className="block sm:hidden">{navItem.icon}</span>
                  <span className="text-sm !cursor-pointer">{navItem.name}</span>
                </>
              )
            }
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};