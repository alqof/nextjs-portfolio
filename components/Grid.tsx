import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'

const Grid = ()=>{
    return (
        <section id="about">
            <BentoGrid className="w-full py-20">
                {gridItems.map((item, i)=>(
                    <BentoGridItem  key={i} id={item.id} className={item.className} title={item.title} description={item.description} img={item.img} imgClassName={item.imgClassName} titleClassName={item.titleClassName} spareImg={item.spareImg} />
                ))}
            </BentoGrid>
        </section>
    )
}

export default Grid
