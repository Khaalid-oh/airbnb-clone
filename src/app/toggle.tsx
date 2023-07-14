"use client";

import React, { useState } from "react";
import { BiCheck } from "react-icons/bi";

function Toggle() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        defaultValue=""
        className="sr-only peer"
        checked={isToggled}
        onChange={handleToggle}
      />
      <div className="w-14 h-8 bg-gray-200 peer-focus:outline-none  peer-focus:ring-gray-300 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all  dark:border-gray-600 peer-checked:bg-gray-900 checked:z-20">
        {isToggled && (
          <BiCheck className="text-xl z-10 absolute right-[6px] top-[6px]" />
        )}
      </div>
    </label>
  );
}

export default Toggle;
