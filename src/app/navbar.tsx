import Image from "next/image";
import React from "react";
import logo from '../../public/images/airbnb.png'
import { FiSearch } from "react-icons/fi";
import { FiGlobe } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
function Navbar() {
  return (
    <div className="flex items-center justify-around gap-2 py-4 border-b-[0.2px] border-gray-300 w-full">
      <div className="flex items-center justify-center gap-2">
        <Image src={logo} alt="logo" className="w-8 h-9" />
        <p className="text-xl text-red-600 font-bold">Airbnb</p>
      </div>
      <div className="flex justify-evenly border-[0.1px] border-gray-300 shadow-lg w-1/4 h-12 rounded-full items-center self-center  text-sm">
        <div>Anywhere</div>
        <div className="h-8 w-[0.5px] bg-gray-400 opacity-50"></div>
        <div>Any week</div>
        <div className="h-8 w-[0.5px] bg-gray-400 opacity-50"></div>
        <div className="text-gray-400">Add guest</div>
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-600 ">
          <FiSearch className="text-white" />
        </div>
      </div>
      <div className="flex items-center justify-end gap-2">
        <div className="hover:bg-slate-100 rounded-full p-2 opacity-40 text-sm">
          Airbnb your home
        </div>
        <div className="hover:bg-slate-100 rounded-full p-2 opacity-40">
          <FiGlobe />
        </div>
        <div className=" flex items-center justify-evenly w-16 h-8 rounded-full border-[0.2px] border-gray-400 p-2 gap-2 hover:shadow-xl">
          <FiMenu className=" h-6 w-7" />
          <FaUser className="text-white bg-gray-400 rounded-full p-1 w-7 h-6" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
