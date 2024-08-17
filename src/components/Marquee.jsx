import React from 'react'
import  {motion} from "framer-motion"
function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-16 rounded-tl-2xl rounded-tr-2xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity , duration:5}} className='text-[16vw] leading-none font-[Founders_Grotesk_X-Condensed"] font-semibold uppercase pt-10 pr-16 mb-[4vw]'>
                We are Techi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity , duration:5}} className='text-[16vw] leading-none font-[Founders_Grotesk_X-Condensed"] font-semibold uppercase pt-10 pr-16 mb-[4vw]'>
                We are Techi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee