import React from "react";
import Navbar from "./navbar";
import Navmenu from "./navmenu";
import Total from "./total";
import Card from "./card";
import Footer from "./footer";
import FarmIcon from "./components/atoms/vectors/FarmIcon";

function Page() {
  return (
    <div className="flex flex-col items-center justify-start bg-white h-screen">
      <div className="flex flex-col items-center justify-start h-full w-full">
        <Navbar />
        {/* <FarmIcon /> */}
        <Navmenu />
        <Total />
      </div>
      <div className="">
        <Card />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default Page;
