"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
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
  const swiperRef = useRef<SwiperType>();
  return (
    <div className="flex w-screen mx-auto p-4 items-center">
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="w-8 h-8 bg-blue-600 text-white  mr-4  "
      >
        P
      </button>
      <Swiper
        spaceBetween={5}
        slidesPerView={8}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
        className="flex items-center justify-evenly mx-auto  w-full"
      >
        {navMenu.map((apartment, i) => (
          <SwiperSlide
            key={i}
            className="flex flex-col items-center justify-center p-1"
          >
            <p className="text-sm mb-1 text-black">{apartment.title}</p>
            <Image
              src={apartment?.icons}
              alt="apartment"
              className="h-5 w-5 items-center justify-center"
            />
          </SwiperSlide>
        ))}
        {/* <div className="flex items-center justify-center h-7 w-7 rounded-full border-2">
        <AiOutlineRight className="" />
        </div>
        <div className="flex p-3 border-2 rounded-lg items-center gap-2">
        <Image src={Filters} alt="Filters" className="h-4 w-4" />
        <p>Filters</p>
      </div> */}
      </Swiper>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="w-8 h-8 bg-blue-600 text-white ml-4"
      >
        N
      </button>
    </div>
  );
}

export default Navmenu;
