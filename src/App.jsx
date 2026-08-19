import { useState } from 'react'
import Counter from './Counter'
import Intro from './Intro'
import './index.css'
import ColorRender from './ColorRender'
import StudentDashboard from './StudentDashboard'
function App() {
  const student = {
    id : 101,
    name  : "Himanshu",
    course  : "React",
    level : "Begginner",
    progress: "76%"
  }

  return (
    <>
    {/* <div className='h-screen w-screen bg-zinc-500 p-5 flex justify-center items-center flex-col ' > 
     <Counter/>
     <Intro data={ {name: "Himanshu Singh" , age: 21 , topic : "Learning React from Scratch"} } role = "Frontend Developer and Teacher"/>
     <ColorRender />
      </div> */}
    <StudentDashboard data ={student}  />
    </>
  )
}

export default App
