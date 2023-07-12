"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const cardDetails = [
  {
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-7172994/original/7f2f9e57-5eff-4b4e-a280-aff8890e38ec.jpeg?im_w=720",
    description: "Marrakech, Morocco",
    host: "Julien Et François",
    duration: 7,
    date: "Nov 5 - 12",
    total: 708,
    rating: 4.88,
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/09dfa9c4-a33f-495b-977f-b9bfb5e589d7.jpg?im_w=720",
    description: "Ghazaoua, Morocco",
    host: "Sophie",
    duration: 5,
    date: "Jul 11 - 16",
    total: 689,
    rating: 5.0,
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/e49c73c0-1a87-4faf-bf9c-557b06b2ce17.jpg?im_w=720",
    description: "Marrakech, Morocco",
    host: "Alyson",
    duration: 5,
    date: "Nov 27 - Dec 2",
    total: 331,
    rating: 4.93,
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/5ee39da4-d0d6-427b-8ece-8a9eeecfebe4.jpg?im_w=720",
    description: "Marrakech, Morocco",
    host: "Paolo & Cristina",
    duration: 5,
    date: "Jul 15 - 20",
    total: 971,
    rating: 4.98,
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/17733702-883f-46fe-939c-0982307be086.jpg?im_w=720",
    description: "Marrakech, Morocco",
    host: "Riad Tilila",
    duration: 7,
    date: "Nov 30 - Dec 7",
    total: 442,
    rating: 4.96,
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-26597703/original/9047e1c8-304d-45de-9937-f49b9ed2545d.jpeg?im_w=720",
    description: "Marrakech, Morocco",
    host: "Yan Cedric",
    duration: 6,
    date: "Jul 27 - Aug 2",
    total: 406,
    rating: 4.86,
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/f10726b7-b3a6-4ec6-b2ec-f67a2b6d0e14.jpg?im_w=720",
    description: "Aït Ben Haddou, Morocco",
    host: "Hicham",
    duration: 5,
    date: "Jul 12 - 17",
    total: 163,
    rating: 4.86,
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-635366658581316217/original/3992d3fe-cbbe-4420-8627-407d9a1a7273.jpeg?im_w=720",
    description: "Marrakech, Morocco",
    host: "Julien Et François",
    duration: 7,
    date: "Nov 5 - 12",
    total: 163,
    rating: 4.88,
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-891094253602781439/original/60a1000f-a76b-4334-afbc-f8bf7bafceeb.jpeg?im_w=720",
    description: "Tasselmante, Morocco",
    host: "Johanna",
    duration: 5,
    date: "Sep 27 - Oct 2",
    total: 363,
    rating: 5.0,
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-11216968/original/205d5ebf-4c23-4cd5-a72f-c1ad1dd1c982.jpeg?im_w=720",
    description: "Marrakech, Morocco",
    host: "Riad Matham",
    duration: 5,
    date: "Nov 5 - 12",
    total: 532,
    rating: 5.0,
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-49395739/original/903ef25b-4561-435d-ad1a-676002a371fc.jpeg?im_w=720",
    description: "Marrakech, Morocco",
    host: "Yan Cedric",
    duration: 5,
    date: "Aug 8 - 13",
    total: 350,
    rating: 4.89,
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-17246831/original/44520f4f-635c-45a4-a062-dc197d6e3757.jpeg?im_w=720",
    description: "Marrakech, Morocco",
    host: "Yan Cedric",
    duration: 6,
    date: "Nov 5 - 12",
    total: 353,
    rating: 4.77,
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-49395739/original/903ef25b-4561-435d-ad1a-676002a371fc.jpeg?im_w=720",
    description: "Marrakech, Morocco",
    host: "Yan Cedric",
    duration: 6,
    date: "Sep 20 - 25",
    total: 371,
    rating: 4.88,
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-600717759968237993/original/b2a80176-4323-404e-aafe-443731e9e522.jpeg?im_w=720",
    description: "Marrakech, Morocco",
    host: "Samira",
    duration: 5,
    date: "Aug 28 - Sep 2",
    total: 306,
    rating: 4.88,
  },
];

function Card() {
  return (
    <div>
      <div>
        <Image src={} alt="card" width={8} height={8} />
        <div>OV</div>
        <Swiper>

        </Swiper>
      </div>
      <div>
        <h3>Marrakech, Morocco</h3>
        <p>Hosted by Julien Et Françoise </p>
        <div>
          <p>7 nights</p>
          <span>.</span>
          <p>Nov 5 - 12</p>
        </div>
        <p>$708 total before taxes</p>
        <div>
          <span>star</span>
          <p>4.88</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
