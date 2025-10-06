import React from 'react'

export default function Tag({ name, bgColor }) {
    return (
        <div
            className="inline-block rounded-full px-3 py-1 m-2 text-md"
            style={{ 
                backgroundColor: `${bgColor}20`
            }}
        >
            <p className="m-0 text-base" style={{color: bgColor}}>
                {name}
            </p>
        </div>
    );
}
