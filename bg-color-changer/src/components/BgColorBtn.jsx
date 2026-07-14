import React from 'react'

function BgColorBtn({color,text}) {
  
  return (
    <div className={`m-2 bg-[${color}] text-center w-20 p-1 rounded-full`}>{text}</div>
    
  )
}

export default BgColorBtn