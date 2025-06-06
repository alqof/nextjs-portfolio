import React from 'react'

const MagicButton = ({title, icon, position, handleClick, otherClasses} : {title:string; icon:React.ReactNode; position:string; handleClick?: ()=>void; otherClasses?: string;})=>{
    return (
        <button className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none" onClick={handleClick}>
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className={`h-full w-full px-7 inline-flex items-center justify-center gap-2 font-medium text-sm text-white rounded-lg bg-slate-950 ${otherClasses} backdrop-blur-3xl cursor-pointer`}>
                {position === "left" && icon}
                {title}
                {position === "right" && icon}
            </span>
        </button>
    )
}

export default MagicButton
