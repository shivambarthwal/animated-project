import React from 'react'

function Card() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
        <div className='cardcontainer w-1/2 h-[50vh]'>
            <div className="card relative w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2'>&copy;2022-2024</button>
            </div>
        </div>
        <div className="cardcontainer w-1/2 h-[50vh] flex gap-5">
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#004D43]">
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2'>Bussiness Bootcamp</button>
        </div>
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#004D43]">
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2'>&copy;2022-2024</button>
        </div>
        </div>
    </div>
  )
}

export default Card