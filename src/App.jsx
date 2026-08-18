import { useState } from 'react'
import Counter from './Counter'
import Intro from './Intro'
import './index.css'
function App() {

  return (
    <>
    <div className='h-screen w-screen bg-zinc-500 p-5 flex justify-center items-center flex-col ' > 
     <Counter/>
     <Intro data={ {name: "Himanshu Singh" , age: 21 , topic : "Learning React from Scrath"} } role = "Frontend Developer and Teacher"/>
      </div>
    </>
  )
}

export default App
