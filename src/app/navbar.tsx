import Image from "next/image";
import React from "react";
import logo from "../../public/airbnb.png";
import { FiSearch } from "react-icons/fi";
import { FiGlobe } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { FaUser} from "react-icons/fa";
function Navbar() {
  return (
    <div className="flex items-center justify-around gap-2 py-4 border-b-[0.1px] border-white">
      <div className="flex items-center justify-center gap-2">
        <Image src={logo} alt="logo" className="w-8 h-8" />
        <p className="text-xl text-red-600 font-bold">Airbnb</p>
      </div>
      <div className="flex justify-evenly border-[0.1px] border-white w-1/4 h-12 rounded-full items-center self-center">
        <div>Anywhere</div>
        <div className="h-8 w-[0.5px] bg-gray-400 opacity-50"></div>
        <div>Any week</div>
        <div className="h-8 w-[0.5px] bg-gray-400 opacity-50"></div>
        <div className="text-gray-400">Add guest</div>
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-600 ">
          <FiSearch className="" />
        </div>
      </div>
      <div className="flex items-center justify-end gap-2">
        <div className="hover:bg-slate-400 rounded-full p-2">
          Airbnb your home
        </div>
        <div className="hover:bg-slate-400 rounded-full p-2">
          <FiGlobe />
        </div>
        <div className=" flex items-center w-14 h-8 rounded-full border-[0.2px] p-2 gap-1">
          <FiMenu />
          <FaUser />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
