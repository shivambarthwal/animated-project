import React, { useEffect, useState } from 'react'

function Eye() {

    const [rotate, setRotate] = useState(0);

    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;
            let angle = Math.atan2(deltaY, deltaX)*(180/Math.PI);
            setRotate(angle-180);
        })
    },[])
  return (
    <div className='eye w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-0.7" className='w-full h-full bg-cover bg-center relative bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className='flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
        <div className='flex items-center justify-center w-[14vw] h-[14vw] rounded-full bg-zinc-200'>
            <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
            <div style={{transform:`translate(-50% ,-50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-11">
             <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
         </div>
        </div>
     </div>
        <div className='flex items-center justify-center w-[14vw] h-[14vw] rounded-full bg-zinc-200'>
        <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
        <div style={{transform:`translate(-50% ,-50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-11">
             <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
         </div>
        </div>
       </div>
     </div>
    </div>
 </div>
  )
}

export default Eye