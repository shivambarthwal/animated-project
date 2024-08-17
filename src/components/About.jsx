import React from 'react'

function About() {
  return (
    <div className='w-full p-20 py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[3.5vw] tracking-tight">
            Techi is a strategic partner for fast-growing tech businesses that need to raise funds,
            sell products, explain complex ideas, and hire great people.
        </h1>
        <div className='mt-20 flex gap-5 w-full border-t-[1px] pt-8 border-[#7b8f39]'>
            <div className='w-1/2'>
            <h1 className='text-7xl'>Our approach :</h1>
            <button className='flex uppercase gap-10 items-center px-10 py-6 mt-6 bg-zinc-900 rounded-full text-white'>Read More
                <div className='h-2 w-2 bg-zinc-100 rounded-full'></div>
            </button>
            </div>
            <div className='w-1/2 h-[75vh] '>
            <img className='h-[74vh] rounded-lg ml-14' src="https://images.unsplash.com/photo-1721332149371-fa99da451baa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About