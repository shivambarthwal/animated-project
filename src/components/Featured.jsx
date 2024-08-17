import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'
import  { Power4} from 'gsap/all'

function Featured() {
    const cards = [useAnimation(), useAnimation(),useAnimation(),useAnimation()];

    const handleHover = (index) =>{
        cards[index].start({ y :"0"})
    }
    const handleHoverEnd =(index)=>{
        cards[index].start({y: "100%" })
    }
  return (
    <div className='w-full py-20' >
        <div className='w-full px-20 border-b-[1px] border-zinc-600 pb-20'>
          <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>
            Featured Project
            </h1>
        </div>
        <div className='px-20' >
        <div className='cards w-full flex gap-10 mt-10'>
            <motion.div onHoverStart={()=> handleHover(0)}
             onHoverEnd={()=> handleHoverEnd(0)}
             className='cardcontainer relative w-1/2 h-[75vh]'>
            <h1 className='absolute flex text-[#cbef49] overflow-hidden z-[9] right-0 translate-x-1/2 top-1/2 
            -translate-y-1/2 font-sans text-8xl leading-none tracking-tighter'>
                {"FYPE".split("").map((item,index)=>(
                    <motion.span initial={{y:"100%"}} animate={cards[0]}
                    transition={{ease:[0.22,1,0.36,1], delay: index*.07}}
                    className='inline-block'>{item}</motion.span>
                ))}
                </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
            </div>
            </motion.div>
            <motion.div onHoverStart={()=> handleHover(1)}
             onHoverEnd={()=> handleHoverEnd(1)} className='cardcontainer relative w-1/2 h-[75vh] '>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
            <h1 className='absolute flex overflow-hidden text-[#cbef49] z-[9] right-full translate-x-1/2 
            top-1/2 -translate-y-1/2 font-sans text-8xl leading-none tracking-tighter'>
                 {"VIDE".split("").map((item,index)=>(
                    <motion.span initial={{y:"100%"}} animate={cards[1]}
                    transition={{ease:[0.22,1,0.36,1], delay: index*.07}}
                    className='inline-block'>{item}</motion.span>
                ))}
            </h1>
            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
            </div>
            </motion.div>
        </div>
      </div>

      {/* -------- */}

      <div className='px-20 py-5 mt-10' >
        <div className='cards w-full flex gap-10 mt-10'>
            <motion.div onHoverStart={()=> handleHover(2)}
             onHoverEnd={()=> handleHoverEnd(2)} className='cardcontainer relative w-1/2 h-[75vh]'>
            <h1 className='absolute flex overflow-hidden text-[#cbef49]  z-[9] left-full -translate-x-1/2 top-1/2 
            -translate-y-1/2 font-sans text-8xl leading-none tracking-tighter'>
                {"PREMIEUM".split("").map((item,index)=>(
                    <motion.span initial={{y:"100%"}} animate={cards[2]}
                    transition={{ease:[0.22,1,0.36,1], delay: index*.07}}
                    className='inline-block'>{item}</motion.span>
                ))}</h1>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
            </div>
            </motion.div>
            <motion.div onHoverStart={()=> handleHover(3)}
             onHoverEnd={()=> handleHoverEnd(3)} className='cardcontainer relative w-1/2 h-[75vh] '>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
            <h1 className='absolute flex overflow-hidden text-[#cbef49] z-[9] right-full translate-x-1/2 
            top-1/2 -translate-y-1/2 font-sans text-8xl leading-none tracking-tighter'>
                 {"CARDBOARD".split("").map((item,index)=>(
                    <motion.span initial={{y:"100%"}} animate={cards[3]}
                    transition={{ease:[0.22,1,0.36,1], delay: index*.07}}
                    className='inline-block'>{item}</motion.span>
                ))}
            </h1>
            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
            </div>
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Featured