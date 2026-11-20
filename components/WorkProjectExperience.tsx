import { companies, dataWorkProjectExperience } from "@/data";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

const WorkProjectExperience = () => {
    return (
        <section id="experience">
            <div className="py-20">
                <h1 className="heading">
                    Highlighted projects from my <span className="text-green-300">career experience</span>
                </h1>

                <AnimatedTestimonials testimonials={dataWorkProjectExperience} />

                <div className="flex flex-col items-center">
                    <div className="relative md:h-[6rem] flex flex-col items-center justify-center rounded-md antialiased overflow-hidden">
                        <InfiniteMovingCards items={companies} direction="left" speed="fast"/>
                    </div>

                </div>
            </div>
        </section>
    );
};
export default WorkProjectExperience;