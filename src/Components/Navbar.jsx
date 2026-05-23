import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <nav className='w-full text-white border-b border-zinc-800 fixed top-0 left-0 bg-zinc-900 z-50'>
      <div className='max-w-screen-2xl mx-auto flex items-center justify-between py-6 px-12 relative'>
        <img 
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          className='w-28 ml-40'
          alt="logo"
        />

        <div className='links flex gap-14 ml-20'> 
            {["Home", "Work", "Culture", "", "News"].map((elem, index ) =>( 
                elem.length === 0 ? 
                <span key={index} className='w-[2px] h-7 bg-zinc-700'></span>: 
                <a
                  key={index} 
                  href="#" className='font-regular text-sm flex items-center gap-1'> 
                    {index === 1 && (<span style={{boxShadow:"0 0 0.45em #00FF19"}} className='inline-block w-1 h-1 rounded-full bg-green-500'></span>)} 
                    {elem} 
                </a> 
            ))} 
        </div>

        <Button />
      </div>
    </nav>
  )
}

export default Navbar
