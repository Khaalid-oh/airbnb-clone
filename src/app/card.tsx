"use client";

import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

import Heart from "./heart"

const cardDetails = [
  {
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-7172994/original/7f2f9e57-5eff-4b4e-a280-aff8890e38ec.jpeg?im_w=720",
    description: "Marrakech, Morocco",
    host: "Julien Et François",
    duration: 7,
    date: "Nov 5 - 12",
    total: 708,
    rating: 4.68,
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/09dfa9c4-a33f-495b-977f-b9bfb5e589d7.jpg?im_w=720",
    description: "Ghazaoua, Morocco",
    host: "Sophie",
    duration: 5,
    date: "Jul 11 - 16",
    total: 689,
    rating: (5.0).toFixed(1),
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/e49c73c0-1a87-4faf-bf9c-557b06b2ce17.jpg?im_w=720",
    description: "Marrakech, Morocco",
    host: "Alyson",
    duration: 5,
    date: "Nov 27 - Dec 2",
    total: 331,
    rating: 4.91,
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
    rating: 4.92,
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
    rating: (5.0).toFixed(1),
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-11216968/original/205d5ebf-4c23-4cd5-a72f-c1ad1dd1c982.jpeg?im_w=720",
    description: "Marrakech, Morocco",
    host: "Riad Matham",
    duration: 5,
    date: "Nov 5 - 12",
    total: 532,
    rating: (5.0).toFixed(1),
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
  {
    image:
      "https://a0.muscache.com/im/pictures/2e59c7d2-3766-42cb-ba86-9958cbe307bc.jpg?im_w=720",
    description: "Kelong, India",
    host: "",
    duration: 5,
    date: "Jul 16 - 21",
    total: 673,
    rating: 4.87,
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-3298227/original/db91b151-be3e-4a4c-8790-ed64c0ac7698.jpeg?im_w=720",
    description: "Sacred Valley, Peru",
    host: "",
    duration: 5,
    date: "Aug 8 - 13",
    total: 986,
    rating: 4.99,
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/monet/Luxury-690431182649594094/original/606157a6-ef10-4eb7-b7f4-33ac86f83823?im_w=720",
    description: "Breckenridge, Colorado, US",
    host: "",
    duration: 5,
    date: "Jun 05 - 20",
    total: 2413,
    rating: (5.0).toFixed(1),
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/c86830dd-415a-426f-8b3d-8c0fce5402fd.jpg?im_w=720",
    description: "Calca, Peru",
    host: "",
    duration: 5,
    date: "Jul 15 - 20",
    total: 198,
    rating: 4.96,
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/4ac06cba-7b1d-4d8c-b124-1d956726c797.jpg?im_w=720",
    description: "Aquitania, Colombia",
    host: "",
    duration: 5,
    date: "Jul 15 - 20",
    total: 306,
    rating: 4.88,
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/bbe939d6-8991-4f7b-9d5d-52b4fdd8a583.jpg?im_w=720",
    description: "Fairplay, Colorado, US",
    host: "",
    duration: 7,
    date: "Jul 13 - 20",
    total: 2345,
    rating: 4.88,
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/bbe939d6-8991-4f7b-9d5d-52b4fdd8a583.jpg?im_w=720",
    description: "Fairplay, Colorado, US",
    host: "",
    duration: 7,
    date: "Jul 13 - 20",
    total: 2345,
    rating: 4.88,
  },
  
];

//FiHeart

function Card() {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (clickedIndex === index) {
      setClickedIndex(null);
    } else {
      setClickedIndex(index);
    }
  };
  return (
    <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 text-sm md:mb-16 mb-8">
      {cardDetails.map((card, i) => (
        <div key={i} className="">
          <div className="relative">
            <Image
              src={card?.image}
              className="rounded-xl h-72 w-80"
              alt="apartment image"
              height={400}
              width={400}
            />
            <Heart
              className={`text-white absolute z-10 top-6 right-4 h-5 w-5 ${
                clickedIndex === i ? "fill-red-500" : ""
              }`}
              onClick={() => handleClick(i)}
            />
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col gap-1 mt-2">
              <h2 className="font-medium">{card?.description}</h2>
              <p className="text-gray-500">{"Host by " + card?.host}</p>
              <div className="flex gap-1">
                <p className="text-gray-500">{card?.duration + "  nights"}</p>
                <span className="text-gray-500">.</span>
                <span className="text-gray-500">{card?.date}</span>
              </div>
              <p className="underline ">
                {"$" + card?.total + " before taxes"}
              </p>
            </div>
            <div className="flex items-start mt-2">
              <div className="flex items-center gap-1">
                <AiFillStar />
                <p>{card?.rating}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
