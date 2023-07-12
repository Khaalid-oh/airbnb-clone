import React from 'react'
import Navbar from './navbar'
import Navmenu from './navmenu'
import Total from './total'
import Card from './card'

function Page() {
  return (
    <div className='flex flex-col items-center justify-start bg-white h-screen'>
      <Navbar/>
      <Navmenu/>
      <Total/>
      <Card/>
    </div>
  )
}

export default Page
