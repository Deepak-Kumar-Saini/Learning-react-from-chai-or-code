import React, { useState,useEffect } from 'react'


function App() {

  const [len,setLen] = useState(8)
  const [refresh,setRefresh] = useState(false)
  const [numAllowed,setNumAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)

  function generatPassword(){
    let passwordStr="QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm"
    let number="0123456789"
    let char="@*()\|}{[]><"

    let password = '';

    if(numAllowed) passwordStr+=number;
    if(charAllowed) passwordStr+=char;

    for(let i=0;i<len;i++){
      password+=passwordStr[Math.floor(Math.random()*passwordStr.length)]
    }

    return password;
  }

  useEffect(()=>{
    generatPassword()
  },[len,charAllowed,numAllowed,generatPassword])

  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className="generator-box p-7">
          <div className='overflow-hidden border-2 border-blue-500 rounded-xl mb-5 flex bg-blue-500'>
            <input type="text" readOnly value={generatPassword()} className='bg-gray-100 flex-1 p-3 outline-none' />
            <button type='button' className='m-2 text-white hover:text-[#bbb] cursor-pointer font-semibold'>COPY</button>
          </div>
          <div className='flex justify-center items-center'>
            <input type="range" onChange={(e)=>{setLen(e.target.value)}} min={4} max={20} id='length' className='cursor-pointer' />
            <label htmlFor="length">{len}</label>

            <input type="checkbox" id='numbers' onChange={()=>{setNumAllowed((prev)=>!prev)}} className='cursor-pointer' />
            <label className='cursor-pointer select-none' htmlFor="numbers">Number</label>

            <input type="checkbox" id='char' onChange={()=>{setCharAllowed((prev)=>!prev)}} className='cursor-pointer' />
            <label className='cursor-pointer select-none' htmlFor="char">Cheracter</label>

            <button onClick={()=>{setRefresh((p)=>!p)}} className='text-white bg-blue-600 font-semibold h-6 w-6 rounded cursor-pointer active:bg-blue-400 self-center'>&#x21BB;</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;