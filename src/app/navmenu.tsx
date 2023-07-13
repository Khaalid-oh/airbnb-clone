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
import Farms from "../../public/images/Farms.png"
import National from "../../public/images/National-parks.png";
import Treehouse from "../../public/images/Treehouse.png"
import Boats from "../../public/images/Boats.png"
import Camping from "../../public/images/Camping.png";
import Offgrid from "../../public/images/Offgrid.png";
import Piano from "../../public/images/Piano.png";
import Tower from "../../public/images/Tower.png";
import Tiny from "../../public/images/Tiny.png";
import Domes from "../../public/images/Domes.png";
import Yurts from "../../public/images/Yurts.png";
import Vineyards from "../../public/images/Vineyards.png";
import Play from "../../public/images/Play.png"



import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io";

const navMenu = [
  { icons: Amazing, title: "Amazing views" },
  { icons: Rooms, title: "Rooms" },
  { icons: Beachfront, title: "Beachfront" },
  { icons: Cabins, title: "Cabins" },
  { icons: Top, title: "Top of the world" },
  { icons: Containers, title: "Containers" },
  { icons: OMG, title: "OMG!" },
  { icons: Luxe, title: "Luxe" },
  { icons: Lakefront, title: "Lakefront" },
  { icons: Mansions, title: "Masions" },
  { icons: Amazingg, title: "Amazing pools" },
  { icons: Farms, title: "Farms" },
  { icons: National, title: "National parks" },
  { icons: Treehouse, title: "Treehouse" },
  { icons: Boats, title: "Boats" },
  { icons: Camping, title: "Camping" },
  { icons: Offgrid, title: "Offgrid" },
  { icons: Piano, title: "Piano" },
  { icons: Domes, title: "Domes" },
  { icons: Tiny, title: "Tiny homes" },
  { icons: Yurts, title: "Yurts" },
  { icons: Play, title: "Play" },
  { icons: Vineyards, title: "Vineyards" },
  { icons: Tower, title: "Tower" },
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
        slidesPerView={13}
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
