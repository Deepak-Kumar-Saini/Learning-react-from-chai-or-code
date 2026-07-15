import React from 'react'

function App() {
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className="generator-box p-7">
          <div className='overflow-hidden border-2 border-blue-500 rounded-xl mb-5 flex bg-blue-500'>
            <input type="text" className='bg-gray-100 flex-1 p-3 outline-none' />
            <button type='button' className='m-2 text-white font-semibold'>COPY</button>
          </div>
          <div className='flex justify-center items-center'>
            <input type="range" min={4} max={20} id='length' className='cursor-pointer' />
            <label htmlFor="length">8</label>

            <input type="checkbox" id='numbers' className='cursor-pointer' />
            <label className='cursor-pointer' htmlFor="numbers">Number</label>

            <input type="checkbox" id='char' className='cursor-pointer' />
            <label className='cursor-pointer' htmlFor="char">Cheracter</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App