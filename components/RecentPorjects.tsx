import React from 'react'
import { projects } from '@/data'
import { FaLocationArrow } from 'react-icons/fa'
import { PinContainer } from './ui/3d-pin'

const RecentPorjects = () => {
    return (
        <section id="projects">
            <div className="py-20">
                <h1 className="heading"> 
                    A small selection of <span className="text-red-400">recent projects</span> 
                </h1>

                <div className="flex flex-wrap items-center justify-center p-4 gap-8 md:gap-20 mt-10">
                    {projects.map((item) => (
                        <div key={item.id} className="w-[80vw] md:w-80 h-[25rem] lg:min-h-[32.5rem] flex items-center justify-center">
                            <PinContainer title={item.link} href={item.link} onClick={(e: any) => {e.preventDefault(); window.open(item.link, "_blank")}}>
                                <div className="w-[90vw] md:w-[24rem] h-[24rem] md:h-[30rem] p-4">
                                    <div className="relative w-full h-[22vh] md:h-[25vh] mb-10 flex items-center justify-center overflow-hidden">
                                        <div className="relative w-full h-full overflow-hidden lg:rounded-2xl" style={{backgroundColor: "#23132d"}}>
                                            <img src="/bg.png" alt="bgimg" />
                                        </div>
                                        <img src={item.img} alt="cover" className="z-10 absolute bottom-0"/>
                                    </div>

                                    <h1 className="font-bold text-base md:text-xl lg:text-2xl line-clamp-1"> {item.title} </h1>
                                    <p className="font-light md:font-normal text-sm md:text-lg line-clamp-2" style={{color: "#ddd9be", margin: "1vh 0"}}> {item.des} </p>

                                    <div className="flex items-center justify-between mt-8 mb-3">
                                        <div className="flex items-center">
                                            {item.iconLists.map((icon, index) => (
                                                <div key={index} className="w-8 h-8 md:w-9 md:h-9 flex justify-center items-center bg-black border border-white/[.2] rounded-full" style={{transform: `translateX(-${5 * index + 2}px)`}}>
                                                    <img src={icon} alt="icon5" className="p-2" />
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex justify-center items-center">
                                            <p className="flex md:text-lg text-sm" style={{color:"rgb(172,215,249)"}}> Check Live Site </p>
                                            <FaLocationArrow className="ms-3" color="rgb(172,215,249)" />
                                        </div>
                                    </div>
                                </div>
                            </PinContainer>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RecentPorjects
