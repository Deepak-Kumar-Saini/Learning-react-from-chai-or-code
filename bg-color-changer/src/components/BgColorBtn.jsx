import React from 'react'

function BgColorBtn({bGcolor,text}) { 
  // bGcolor = `bg-${bGcolor}-500`
  
  return (
    <div className={`m-2 ${bGcolor} uppercase font-bold border-2 text-center w-20 p-1 rounded-full`}>{text}</div>
  )
}

export default BgColorBtn