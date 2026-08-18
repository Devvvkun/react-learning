import { useState } from 'react'
import Counter from './Counter'
import './index.css'
function App() {

  return (
    <>
    <div className='h-screen w-screen bg-zinc-500 p-5 flex justify-center items-center flex-col ' > 
     <Counter/>
    </div>
    </>
  )
}

export default App
