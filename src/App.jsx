import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="grid grid-cols-10 grid-flow-row ">
      <div className='bg-red-400 col-span-4'>
        Child 1
      </div>

      <div className='bg-green-400'>
        Child 2
      </div>


      <div className='bg-yellow-400'>
        Child 3        
      </div>

      <div className='bg-blue-400'>
        Child 4
      </div>


      <div className='bg-gray-400'>
        Child 5
      </div>


      <div className='bg-pink-400'>
        Child 6
      </div>


      <div className='bg-teal-400'>
        Child 7
      </div>
    </div>
  )
}

export default App

// use un-prefixed utils / classes for mobile design and as the screen-size increases add prefix to your utils / classes (sm -> 640px and above, md -> 768px and above, lg -> 1024px and above , xl -> 1280px and above, 2xl -> 1536px and above ), this is because tailwind approach mobile first approach