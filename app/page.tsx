"use client";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentPorjects from "@/components/RecentPorjects";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import ProjectsExperience from '@/components/ProjectsExperience';


export default function Home(){
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsClient(true);
    }, []);
    useEffect(() => {
        if (isClient) {
            router.push('/');
        }
    }, [isClient, router]);


    return(
        <main className="relative mx-auto sm:px-10 px-5 flex flex-col justify-center items-center bg-black-100 overflow-hidden">
            <div className="w-full max-w-7xl ">
                <FloatingNav navItems={navItems} />
                <Hero />
                <Grid />
                <RecentPorjects />
                <ProjectsExperience />
                <Experience />
                <Approach />
                <Footer />
            </div>
        </main>
    )
}
