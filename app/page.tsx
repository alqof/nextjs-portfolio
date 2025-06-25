"use client";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentPorjects from "@/components/RecentPorjects";
import Experience from "@/components/WorkExperience";
import Approach from "@/components/Approach";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import WorkProjectExperience from '@/components/WorkProjectExperience';
import WorkExperience from '@/components/WorkExperience';


export default function Home(){
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();

    useEffect(()=>{
        setIsClient(true);
    }, []);

    useEffect(()=>{
        if (isClient) {
            router.push('/');
        }
    }, [isClient, router]);


    return(
        <main className="relative mx-auto sm:px-10 px-5 flex flex-col justify-center items-center bg-red-main overflow-hidden">
            <div className="w-full max-w-7xl ">
                <FloatingNav navItems={navItems} />
                <Hero />
                <Grid />
                <RecentPorjects />
                <WorkProjectExperience />
                <WorkExperience />
                <Approach />
                <Footer />
            </div>
        </main>
    )
}
