import React from 'react'
// import Tag from './tag.jsx' // Uncomment if needed

export default function Project() {
    return (
        <div>
            <p className='text-lg md:text-2xl font-semibold mb-4'>Projects</p>

            <Single
                title="Chess Engine"
                bio="A simple Chess engine written in C, currently working on making a web version with WebAsm. The current Chess engine is using a negamax to find the best move, and to create the board it is using a bitboard."
                more="/projects/chess-engine"
                github="https://github.com/alex-houle/Chess"
            />
        </div>
    )
}

function Single({ title, bio, more, github }) {
    return (
        <div className='mt-5 mb-5 m-auto flex flex-col w-7/8 max-w-full bg-gray-900 rounded-lg relative p-4'>
            <div>
                <p className='text-lg md:text-2xl font-'>{title}</p>
                <p className='text-[#adaaa3] text-base mt-1'>{bio}</p>
            </div>

            <div className='flex flex-col sm:flex-row gap-2 mt-3 text-sm text-[#c9c6bf]'>
                {more && (
                    <a
                        href={more}
                        className='flex items-center gap-1 hover:text-white transition-colors'
                    >
                        Try It out
                        <span className='text-lg'>→</span>
                    </a>
                )}
                {github && (
                    <a
                        href={github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-1 hover:text-white transition-colors'
                    >
                        GitHub
                        <span className='text-lg'>↗</span>
                    </a>
                )}
            </div>
        </div>
    )
}
