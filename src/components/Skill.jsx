import React from 'react'
import Tag from './tag'

export default function Skill() {
    return (
        <div className='border-0'>
            <p className='text-lg md:text-3xl'>Skills:</p>
            <div>
                <div className='mb-5'>
                    <p className='text-lg md:text-2xl mb-2'>Programming Languages</p>
                    <Tag name="C" bgColor="#F85552" textColor="#FFC4C2" />
                    <Tag name="Java" bgColor="#F85552" textColor="#FFC4C2" />
                    <Tag name="Python" bgColor="#F85552" textColor="#FFC4C2" />
                    <Tag name="GO" bgColor="#F85552" textColor="#FFC4C2" />
                    <Tag name="CSS" bgColor="#F85552" textColor="#FFC4C2" />
                    <Tag name="HTML" bgColor="#F85552" textColor="#FFC4C2" />
                </div>
                <div>
                    <p className='text-lg md:text-2xl mb-2'>Frameworks</p>
                    <Tag name="React" bgColor="#DFA000" textColor="#FFE599" />
                    <Tag name="TailwindCSS" bgColor="#DFA000" textColor="#FFE599" />
                    <Tag name="Flask" bgColor="#DFA000" textColor="#FFE599" />
                </div>
                <div>
                    <p className='text-lg md:text-2xl mb-2'>Tools</p>
                    <Tag name="Git" bgColor="#DF69BA" textColor="#F7C4E7" />
                    <Tag name="Valgrind" bgColor="#DF69BA" textColor="#F7C4E7" />
                    <Tag name="Linux" bgColor="#DF69BA" textColor="#F7C4E7" />
                    <Tag name="Windows" bgColor="#DF69BA" textColor="#F7C4E7" />
                </div>
                <div>
                    <p className='text-lg md:text-2xl mb-2'>Database</p>
                    <Tag name="MongoDB" bgColor="#35A77C" textColor="#A8E6CE" />
                </div>
            </div>
        </div>
    )
}