import React from 'react'
import { projects } from '@/data'
import { FaLocationArrow } from 'react-icons/fa'
import { PinContainer } from './ui/3d-pin'

const RecentPorjects = () => {
    return (
        <section id="projects">
            <div className="py-20">
                <h1 className="heading"> 
                    A small selection of <span className="text-green-300">recent projects</span> 
                </h1>

                <div className="flex flex-wrap items-center justify-center p-4 gap-10 mt-10">
                    {projects.map((item) => (
                        <div key={item.id} className="w-[90vw] md:w-[28rem] h-[25rem] md:min-h-[30rem] flex items-center justify-center">
                            <PinContainer title={item.link} href={item.link} onClick={(e?: React.MouseEvent<HTMLAnchorElement>) => {e?.preventDefault(); window.open(item.link, "_blank")}}>
                                <div className="w-[90vw] md:w-[28rem] h-[25rem] md:h-[30rem] p-4 flex flex-col justify-between">
                                    <div className="relative w-full h-[12rem] md:h-[15rem] mb-2 flex items-center justify-center overflow-hidden">
                                        <div className="relative w-full h-full rounded-xl overflow-hidden" style={{backgroundColor: "#23132d"}}>
                                            <img src="/bg.png" alt="bgimg" />
                                        </div>
                                        <img src={item.img} alt="cover" className="z-10 absolute bottom-0"/>
                                    </div>

                                    <div>
                                        <h1 className="font-bold text-base md:text-xl lg:text-2xl line-clamp-1"> {item.title} </h1>
                                        <p className="font-light md:font-normal text-sm md:text-lg line-clamp-2" style={{color: "#ddd9be", margin: "1vh 0"}}> {item.des} </p>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            {item.iconLists.map((icon, index) => (
                                                <div key={index} className="w-8 h-8 md:w-9 md:h-9 flex justify-center items-center bg-black border border-white/[.2] rounded-full" style={{transform: `translateX(-${5 * index + 2}px)`}}>
                                                    <img src={icon} alt="icon5" className="p-2" />
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex justify-center items-center text-orange-100">
                                            <p className="flex md:text-lg text-sm"> Check Live Site </p>
                                            <FaLocationArrow className="ms-3" />
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
