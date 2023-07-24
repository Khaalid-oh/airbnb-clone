import Image from "next/image";
import React from "react";
import logo from "../../public/images/ABNB.svg";
import { FiSearch } from "react-icons/fi";
import { FiGlobe } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

function Navbar() {
  return (
    <div className="flex items-center lg:px-12 md:p-4 px-2 py-4 border-b-[0.2px] border-gray-200 w-full text-sm">
      <div className="hidden md:flex items-center justify-between w-full">
        <div className="flex items-center justify-center gap-2">
          <Image src={logo} alt="logo" className="w-8 h-8" />
          <p className="text-xl text-[#FF385C] font-extrabold">airbnb</p>
        </div>
        <div className="flex items-center justify-evenly border-[0.1px] border-gray-300 shadow-lg w-80 h-12 rounded-full text-sm lg:ml-32 sm:ml-4">
          <div>Anywhere</div>
          <div className="h-7 w-[0.5px] bg-gray-400 opacity-50"></div>
          <div>Any week</div>
          <div className="h-7 w-[0.5px] bg-gray-400 opacity-50"></div>
          <div className="text-gray-400">Add guest</div>
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#FF385C] ">
            <FiSearch className="text-white" />
          </div>
        </div>
        <div className="flex items-center justify-end lg:gap-2">
          <div className="flex justify-center hover:bg-slate-50 rounded-full p-3 text-sm lg:w-40 ">
            Airbnb your home
          </div>
          <div className="hover:bg-slate-50 rounded-full p-3">
            <FiGlobe />
          </div>
          <div className=" flex items-center justify-evenly w-20 h-10 rounded-full border-[0.2px] border-gray-400 p-2 gap-2 hover:shadow-xl">
            <FiMenu className=" h-6 w-6 p-1" />
            <FaUser className="text-white bg-gray-600 rounded-full p-1 w-7 h-7" />
          </div>
        </div>
      </div>

      <div className="md:hidden flex items-center justify-between px-3 w-full h-16 rounded-full border-gray-400 border-[0.1px]">
        <div className="flex items-center gap-2 ">
          <div>
            <FiSearch />
          </div>
          <div className="flex flex-col ">
            <p>Anywhere</p>
            <div className="flex text-xs text-gray-500 gap-1">
              <p>Any week</p>
              <span>•</span>
              <p>Add guests</p>
            </div>
          </div>
        </div>
        <div className="border-gray-900 border-2 rounded-full p-2">
          <TbAdjustmentsHorizontal className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
