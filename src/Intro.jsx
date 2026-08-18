import React from 'react'

const Intro = ({data , role}) => {
  return (
    <div>
        <h1 className='text-amber-700'>{data.name}</h1>
        <h2 className='text-lime-600'>{data.age}</h2>
        <h2 className='text-taupe-500'>{data.topic}</h2>
        <p className='text-amber-100'>{role}</p>
    </div>
  )
}

export default Intro