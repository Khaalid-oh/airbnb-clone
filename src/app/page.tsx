import React from 'react'
import Navbar from './navbar'
import Navmenu from './navmenu'
import Total from './total'
import Slider from './slider'
function Page() {
  return (
    <div className='flex flex-col items-center justify-center bg-white'>
      {/* <Navbar/> */}
      <Navmenu/>
      {/* <Total/> */}
      {/* <Slider/> */}
    </div>
  )
}

export default Page
