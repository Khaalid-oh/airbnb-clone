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
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io";
//IoIosArrowForward

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

function Navmenu() {
  const swiperRef = useRef<SwiperType>();
  return (
    <div className="flex items-center justify-center w-full p-4">
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="flex items-center justify-center w-7 h-7 rounded-full border-[1px]"
      >
        <IoIosArrowBack />
      </button>
      <Swiper
        spaceBetween={0}
        slidesPerView={6}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
        className="flex items-center justify-center mx-auto w-full"
      >
        {navMenu.map((apartment, i) => (
          <SwiperSlide key={i} className="flex items-center justify-center">
            <div className="flex flex-col w-24 justify-center items-center">
              <Image
                src={apartment?.icons}
                alt="apartment"
                className="flex h-6 w-6 items-center justify-center my-2"
              />
              <p className="text-xs text-black">{apartment.title}</p>
            </div>
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
        className="flex items-center justify-center w-7 h-7 rounded-full border-[1px] "
      >
        <IoIosArrowForward className=""/>
      </button>
    </div>
  );
}

export default Navmenu;
