import React, { useState } from 'react'

const ColorRender = () => {
  const [a , b] = useState(false)
  return (
    <div>
      <h3 className={a === false ? "text-yellow-600" : "text-blue-300"}>
        {a === false? "Hey this is a magic text that changes color and text content on click of a button" : "This is the 2nd magic text that has both changed color and text-content based on the button click."}</h3>
      <button className='px-2 py-1 bg-purple-500 rounded-md ' onClick={() => b(!a)}>Rang Badlo</button>
    </div>
  )
}

export default ColorRender