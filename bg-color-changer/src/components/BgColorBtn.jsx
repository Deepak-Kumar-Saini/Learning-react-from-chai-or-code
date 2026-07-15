import React from 'react'

function BgColorBtn({ bGcolor, text }) {
  const body = document.querySelector('body')

  let colorChange = () => {
    console.log(text);
    
    body.style.backgroundColor = `${text}`;
  }


  return (
    <div onClick={colorChange} className={`m-2 ${bGcolor} uppercase font-bold border-2 cursor-pointer text-center w-20 p-1 rounded-full`}>{text}</div>
  )
}

export default BgColorBtn