"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const ProjectsExperience = () => {
    return (
        <section id="testimonials">
            <div className="py-20">
                <h1 className="heading">
                    Kind systems from <span className="text-purple"> work experience </span>
                </h1>

                <div className="max-lg:mt-10 flex flex-col items-center">
                    <div className="relative h-[50vh] md:h-[30rem] flex flex-col items-center justify-center rounded-md antialiased overflow-hidden">
                        <InfiniteMovingCards items={testimonials} direction="left" speed="normal"/>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
                        {companies.map((company) => (
                            <React.Fragment key={company.id}>
                                <div className="flex md:max-w-60 max-w-32 gap-2">
                                    <img src={company.img} alt={company.name} className="md:w-10 w-5"/>
                                    <img src={company.nameImg} alt={company.name} width={company.id === 4 || company.id === 5 ? 100 : 150} className="md:w-24 w-20"/>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ProjectsExperience;
