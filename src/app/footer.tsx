import React from 'react'
import { BiCheck } from "react-icons/bi";
import { FiGlobe } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

function Footer() {
  return (
    <div className="md:fixed bottom-0 left-0 w-full bg-white border-t-[0.1px] border-gray-300 text-xs p-4 md:px-16 px-8 flex justify-between z-20 gap-20 md:gap-0">
      <div className="flex flex-col md:flex-row gap-1 md:h-8 md:items-center">
        <p>&copy; Airbnb, Inc.</p>
        <p>Terms</p>
        <span>.</span>
        <p>Sitemap</p>
        <span>.</span>
        <p>Privacy</p>
        <span>.</span>
        <p>Your Privacy Choices</p>
        <div className="flex flex-row rounded-full justify-between border-2  gap-1 md:ml-2 mt-2 md:mt-0 h-4 w-8 ">
          <div className="h-3 w-3">
            <BiCheck />
          </div>
          <div className="bg-black rounded-lg h-3 w-3">
            <IoCloseOutline className="text-white items-center  justify-center" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex gap-x-1 items-center md:justify-center">
          <FiGlobe />
          <p>English (US)</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-2  md:items-center justify-center">
          <p>$ USD</p>
          <p>Support & resources</p>
        </div>
      </div>
    </div>
  );
}

export default Footer
