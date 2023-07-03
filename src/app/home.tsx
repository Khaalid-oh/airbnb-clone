import Image from "next/image";
import React from "react";
import logo from "../../public/airbnb.png";
function Home() {
  return (
    <div className="flex items-center justify-start gap-2 px-8 py-5 border-b-[0.1px] border-white">
      <Image src={logo} alt="logo" className="w-8 h-8"/>
      <p className="text-xl text-red-600 font-bold">Airbnb</p>
    </div>
  );
}

export default Home;
