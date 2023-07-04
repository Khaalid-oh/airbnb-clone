import React from 'react'
import Image from "next/image";
import Amazing from '../../public/Amazing views.jpg.png'
import Rooms from '../../public/Rooms.jpg.png'
import Beachfront from '../../public/Beachfront.jpg.png'
import Cabins from '../../public/Cabins.jpg.png'
import Top from '../../public/Top of the world.jpg.png'
import Containers from '../../public/Containers.jpg.png'
import OMG from '../../public/OMG.jpg.png'
import Lakefront from '../../public/Lakefront.jpg.png'
//import Luxe from '../../public/Luxe.jpg.png'
import Mansions from '../../public/Mansions.jpg.png'

const navMenu = [
{ icons: {Amazing}, title: "Amazing views" },
{ icons: {Rooms}, title: "Amazing pools" },
{ icons: {Beachfront}, title: "Trending" },
{ icons: {Cabins}, title: "New" },
{ icons: {Top}, title: "Cycladic homes" },
{ icons: {Containers}, title: "Towers" },
{ icons: {OMG}, title: "Masions" },
{ icons: {Lakefront}, title: "Iconic cities" },
{ icons: {Mansions}, title: "Bed & breakfats" },
{ icons: {Amazing}, title: "Chef's kitchens" },
// { icons: {Luxe}, title: "OMG!" },
];

function Navmenu() {

  return (
    <div className='flex items-center justify-center mx-auto h-16 border-b-[0.2px]'>
      {navMenu.map ((apartment, i) => (
        <div key={i} className='flex items-center'>
          <Image src={apartment?.icons} alt='apartment'/>
          <p className='text-sm'>{apartment.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Navmenu
