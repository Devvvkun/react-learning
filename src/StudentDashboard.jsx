import React from 'react'
import StdudentProfile from './StdudentProfile'
const StudentDashboard = ( {data} ) => {
  return (

    <div>
        {console.log(data)}
        <nav className='h-7 static top w-screen bg-zinc-600'>{
            <div className='font-bold text-white text-[12px] px-2 py-1 '> {data.name}</div>
            }</nav>
            <StdudentProfile profdata = {data} />
    </div>
    ) }

export default StudentDashboard