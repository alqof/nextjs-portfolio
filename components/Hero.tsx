import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = ()=>{
    return (
        <section id="home">
            <div className="pb-20 pt-36">
                {/* Spotlight */}
                <div>
                    <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
                    <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="red"/>
                    <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="red" />
                </div>
    
                {/* Grid and Dot Backgrounds */}
                <div className="absolute top-0 left-0 h-screen w-full flex items-center justify-center dark:bg-black-100 bg-white dark:bg-grid-white/[0.1] bg-grid-black-100/[0.2]">
                    <div className="absolute flex items-center justify-center dark:bg-black-100 bg-white pointer-events-none inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
                </div>
    
                <div className="relative my-40 md:my-20 z-10 flex justify-center">
                    <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center gap-y-5">
                        <p className="uppercase tracking-widest text-[10px] md:text-xs text-center text-blue-100 max-w-80"> Portfolio Web Magic with Next.js </p>
                        {/* <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80"> Dynamic Web Magic with Next.js </p> */}

                        <TextGenerateEffect words="Transforming Concepts into Seamless User Experiences" className="text-center text-[22px] md:text-5xl lg:text-6xl"/>

                        <p className="text-center md:tracking-wider mb-4 text-[12px] md:text-lg lg:text-2xl"> 
                            Hi! I&apos;m Alqof, Web Developer based in South Jakarta 🇮🇩
                        </p>

                        <a href="#about">
                            <MagicButton title="Show my work" icon={<FaLocationArrow />} position="right"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
  };
  

export default Hero
