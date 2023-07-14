import React from 'react'
import { BiCheck } from "react-icons/bi";
import Toggle from './toggle';

function Total() {
  return (
    <div  className='flex h-16 w-[350px] md:w-[650px] border-[1px] border-gray-300 rounded-lg items-center justify-between py-4 px-4 text-sm'>
      <div className='flex flex-col md:flex-row md:items-center md:gap-2'>
      <p>Display total price</p>
      <span className='hidden md:block h-6 w-[1px] bg-gray-300'></span>
      <p className='text-gray-500 opacity-80'>Includes all fees, before taxes</p>
      </div>
      <Toggle/>
    </div>
  )
}

export default Total
