import React from 'react'

export default function Tag({ name, bgColor }) {
    return (
        <div
            className="inline-block rounded-full px-3 py-1 m-2 text-lg"
            style={{ 
                backgroundColor: `${bgColor}10` // add alpha at the end (80 = ~50% opacity)
            }}
        >
            <p className="m-0 p-" style={{color: bgColor}}>
                {name}
            </p>
        </div>
    );
}
