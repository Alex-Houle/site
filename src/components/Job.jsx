import React from 'react'

export default function Job(props) {
    return (
        <div className='mt-5 mb-5 m-auto flex w-7/8 max-w-full bg-[#3A3F44] rounded-lg relative p-2 md:p-4' >
            <div className='ml-1 pr-20 md:pr-4'> 
                <p className='text-lg md:text-2xl'>{props.title}</p>
                <p className='text-[#adaaa3] text-base  '>{props.bio}</p>
            </div>
            <p className='absolute top-2 right-2 text-xs md:text-sm text-[#D3C6AA]'>{props.time}</p>
        </div>
    )
}