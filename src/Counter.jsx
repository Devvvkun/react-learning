import React, { useState } from 'react'

const Counter = () => {
    const [a,b] = useState(69);
  return (
    <>
    <div className='font-extrabold text-4xl'>{a}</div>
    <button className='rounded-md px-2 py-1 bg-lime-400 text-red-50' onClick={() => b(a+1)}> Daba Do Naa</button>
 </> )
}

export default Counter