import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState('blue')

  return (
    <>
      <div className={`h-screen w-full flex justify-center items-end bg-${color}-800` }>

        <div className='mb-10'>
          <button onClick={()=>setcolor('red')} className='px-4 py-1 mx-1 bg-red-800 rounded-lg '>Red</button>
          <button onClick={()=>setcolor('yellow')} className='px-4 py-1 mx-1 bg-yellow-800 rounded-lg '>Yellow</button>
          <button onClick={()=>setcolor('green')} className='px-4 py-1 mx-1 bg-green-800 rounded-lg '>Green</button>
          <button onClick={()=>setcolor('blue')} className='px-4 py-1 mx-1 bg-blue-800 rounded-lg '>Default</button>
        </div>

      </div>
    </>
  )
}

export default App
