import React from 'react'
import { projects } from '@/data'
import { FaLocationArrow } from 'react-icons/fa'
import { PinContainer } from './ui/3d-pin'

const RecentPorjects = () => {
    return (
        <section id="projects">
            <div className="py-20">
                <h1 className="heading"> 
                    A small selection of{" "} <span className="text-purple">recent projects</span> 
                </h1>

                <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
                    {projects.map((item) => (
                        <div key={item.id} className="w-[80vw] h-[25rem] lg:min-h-[32.5rem] sm:w-96 flex items-center justify-center">
                            {/* 3D Pin */}
                            <PinContainer title="/ui.aceternity.com" href="https://twitter.com/mannupaaji">
                                <div className="relative w-[80vw] h-[20vh] sm:w-96 lg:h-[30vh] mb-10 flex items-center justify-center overflow-hidden">
                                    <div className="relative w-full h-full overflow-hidden lg:rounded-2xl" style={{ backgroundColor: "#13162D" }}>
                                        <img src="/bg.png" alt="bgimg" />
                                    </div>
                                    <img src={item.img} alt="cover" className="z-10 absolute bottom-0"/>
                                </div>

                                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1"> {item.title} </h1>
                                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2" style={{ color: "#BEC1DD", margin: "1vh 0", }}> {item.des} </p>

                                <div className="flex items-center justify-between mt-7 mb-3">
                                    <div className="flex items-center">
                                        {item.iconLists.map((icon, index) => (
                                            <div key={index} className="w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center bg-black border border-white/[.2] rounded-full" style={{transform: `translateX(-${5 * index + 2}px)`}}>
                                                <img src={icon} alt="icon5" className="p-2" />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex justify-center items-center">
                                        <p className="flex lg:text-xl md:text-xs text-sm text-purple"> Check Live Site </p>
                                        <FaLocationArrow className="ms-3" color="#CBACF9" />
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
