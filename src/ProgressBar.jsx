import React from 'react'

const ProgressBar = ({progbar}) => {
  return (
    <div>
        <div className=' h-0.5 w-14 my-2 rounded-md bg-black text-[5px] flex flex-row'><div className=" h-full bg-white rounded-md" style={{width : `${progbar.progress}`}} >{progbar.progress}</div></div>
    </div>
  )
}

export default ProgressBar