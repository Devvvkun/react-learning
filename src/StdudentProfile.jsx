import React from 'react'
import ProgressBar from './ProgressBar'

const StdudentProfile = ({profdata}) => {
  return (
    <div>
        <div className='card h-31 w-19 py-4 bg-gray-400 rounded-md flex justify-center items-center flex-col '>
            <div className=' relative  rounded-full bg-gray-400 h-9 w-9 '><img src="https://static.vecteezy.com/system/resources/thumbnails/032/176/191/small_2x/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg" /></div>
            <p className='text-[5px] font-bold'>Student Name: <span className=' text-[5px] underline text-red-400 bg-white'>{profdata.name}</span></p>
            <p className='text-[5px] font-bold'>Student Name: <span className=' text-[5px] underline text-white'>{profdata.course}</span></p>
            <p className='text-[5px] font-bold'>Student Name: <span className=' text-[5px] underline text-white'>{profdata.level}</span></p>
            <ProgressBar progbar={profdata} />
        </div>

    </div>
  )
}

export default StdudentProfile