import React from 'react'
import Job from './Job.jsx'
export default function Exp() {
    return (
        <div>
            <p className='text-lg md:text-2xl'>Experience:</p>
            <Job
                title="IT Support Tech"
                bio="Provide hands-on technical support across multiple campuses, troubleshooting hardware, software, and network issues for students, faculty, and staff"
                time="May 2025 - present"
            />
            <Job
                title="Cyber Security Team"
                bio="Collaborate with peers to explore and implement cybersecurity practices, participate in workshops, and engage in hands-on activities to enhance knowledge of network security and ethical hacking."
                time="Sept 2024 - present"
            />
        </div>
    )
}
