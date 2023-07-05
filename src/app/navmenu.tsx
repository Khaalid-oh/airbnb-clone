"use client"

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Amazing from "../../public/images/Amazing-views.png";
import Rooms from "../../public/images/Rooms.png";
import Beachfront from "../../public/images/Beachfront.png";
import Cabins from "../../public/images/Cabins.png";
import Top from "../../public/images/Top.png";
import Containers from "../../public/images/Containers.png";
import OMG from "../../public/images/OMG.png";
import Lakefront from "../../public/images/Lakefront.png";
import Mansions from "../../public/images/Mansions.png";
import Amazingg from "../../public/images/Amazing-pools.png";
import Luxe from "../../public/images/Luxe.png";
import Filters from "../../public/images/Filters.png";

const navMenu = [
  { icons: Amazing, title: "Amazing views" },
  { icons: Rooms, title: "Rooms" },
  { icons: Beachfront, title: "Beachfront" },
  { icons: Cabins, title: "Cabins" },
  { icons: Top, title: "Top of the world" },
  { icons: Containers, title: "Containers" },
  { icons: OMG, title: "OMG!" },
  { icons: Lakefront, title: "Lakefront" },
  { icons: Mansions, title: "Masions" },
  { icons: Amazingg, title: "Amazing pools" },
  { icons: Luxe, title: "Luxe" },
];
import { AiOutlineRight } from "react-icons/ai";
function Navmenu() {
  return (
    <Swiper
      spaceBetween={1}
      slidesPerView={8}
      navigation={true}
      modules={[Navigation]}
      className="flex items-center justify-evenly mx-auto h-32                 w-2/3"
    >
      {navMenu.map((apartment, i) => (
        <SwiperSlide key={i} className="flex flex-col items-center p-1">
          <p className="text-sm mb-1">{apartment.title}</p>
          <Image src={apartment?.icons} alt="apartment" className="h-5 w-5" />
        </SwiperSlide>
      ))}
      <div className="flex items-center justify-center h-7 w-7 rounded-full border-2">
        <AiOutlineRight className="" />
      </div>
      <div className="flex p-3 border-2 rounded-lg items-center gap-2">
        <Image src={Filters} alt="Filters" className="h-4 w-4" />
        <p>Filters</p>
      </div>
    </Swiper>
  );
}

export default Navmenu;
