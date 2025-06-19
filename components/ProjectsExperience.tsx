"use client";

import React from "react";
import { companies, testimonials, dataWorkProjectExperience } from "@/data";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

const ProjectsExperience = () => {
    return (
        <section id="experience">
            <div className="py-20">
                <h1 className="heading">
                    Kind systems from <span className="text-purple"> work experience </span>
                </h1>

                <AnimatedTestimonials testimonials={dataWorkProjectExperience} />

                <div className="flex flex-col items-center">
                    <div className="relative md:h-[6rem] flex flex-col items-center justify-center rounded-md antialiased overflow-hidden">
                        <InfiniteMovingCards items={companies} direction="left" speed="fast"/>
                    </div>

                    {/* <div className="flex flex-wrap items-center justify-center md:gap-x-24 md:gap-y-16 gap-6 max-lg:mt-10">
                        {companies.map((company) => (
                            <React.Fragment key={company.id}>
                                <div className="flex md:max-w-60 max-w-32 gap-x-3">
                                    <img src={company.img} alt={company.name} className="md:w-10 w-5"/>
                                    <img src={company.imgName} alt={company.name} className="md:w-24 w-20"/>
                                </div>
                            </React.Fragment>
                        ))}
                    </div> */}
                </div>
            </div>
        </section>
    );
};
export default ProjectsExperience;
