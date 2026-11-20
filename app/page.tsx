import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Approach from "@/components/Approach";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import WorkProjectExperience from '@/components/WorkProjectExperience';
import WorkExperience from '@/components/WorkExperience';


export default function Home(){
    return(
        <main className="relative mx-auto sm:px-10 px-5 flex flex-col justify-center items-center overflow-hidden">
            <div className="w-full max-w-7xl ">
                <FloatingNav navItems={navItems} />
                <Hero />
                <Grid />
                <RecentProjects />
                <WorkProjectExperience />
                <WorkExperience />
                <Approach />
                <Footer />
            </div>
        </main>
    )
}
