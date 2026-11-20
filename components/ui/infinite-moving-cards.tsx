"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = false,
    className,
}: {
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
    const style = {
        "--animation-direction": direction === "left" ? "forwards" : "reverse",
        "--animation-duration": { fast: "20s", normal: "50s", slow: "80s" }[speed],
    } as CSSProperties;

    return (
        <div className={cn("relative scroller z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_30%,white_70%,transparent)]", className)} style={style}>
            <ul className={cn("w-max min-w-full py-6 shrink-0 gap-12 md:gap-20 flex flex-nowrap", "motion-safe:animate-scroll", pauseOnHover && "hover:[animation-play-state:paused]")}>
                {[...items, ...items].map((item, idx) => (
                    <li key={idx} aria-hidden={idx >= items.length} className="relative flex items-center justify-center" style={{background: "rgba(0, 0, 0, 0)"}}>
                        <div className="max-w-32 md:max-w-60 flex gap-x-3">
                            <Image src={item.img} alt="" width={40} height={40} className="h-auto md:w-10 w-5" />
                            <Image src={item.imgName} alt={item.name} width={96} height={40} className="h-auto md:w-24 w-20" />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
