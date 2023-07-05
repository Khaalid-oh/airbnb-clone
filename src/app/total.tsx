import React from 'react'
import { BiCheck } from "react-icons/bi";

function Total() {
  return (
    <div  className='flex h-14 w-1/3  border-[1px] border-gray-300 rounded-lg items-center justify-evenly py-4  text-sm'>
      <p>Display total price</p>
      <span className='h-10 w-[1px] bg-gray-300'></span>
      <p className='text-gray-500 opacity-80'>Includes all fees, before taxes</p>
      <div className='flex bg-black h-8 w-12 rounded-full items-center justify-end pr-1 ml-16'>
        <div className='flex items-center justify-center h-6 w-6 rounded-full bg-white'>
          <BiCheck className='w-5 h-5'/>
        </div>
      </div>
    </div>
  )
}

export default Total
