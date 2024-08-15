"use client"
import React from 'react'
   import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination} from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
type Slide = {
  image: string;
  title: string;
  backgroundImage: string;
};
function ConnectWithSellers() {


  return (
    <div className="flex items-center justify-center flex-col h-[600px] bg-donate/75">
      <Swiper
     
        breakpoints={{
          340: {
            slidesPerView: 1,
          spaceBetween: 4,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          renderProgressbar(progressbarFillClass) {
            return `<span class="${progressbarFillClass}"></span>`;
          },
        }}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%] flex "
      >
        {slides.map((item) => (
          <SwiperSlide key={item.title} className='flex pl-20 md:pl-10 lg:pl-0'>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer ">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black/80 opacity-10 group-hover:opacity-50 " />
              <div className="relative flex flex-col gap-3">
                <h1 className="text-sm md:text-xl font-crimson uppercase mb-3 text-center lg:text-2xl">{item.title} </h1>
                <p className="md:text-sm text-sm lg:text-[18px] text-center collapse md:visible">{item.content} </p>
              </div>{" "}
              <p>Read More</p>
              {/* <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" /> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


export default ConnectWithSellers

const slides = [
  {
    backgroundImage: "/assets/child2.png",
    title: "To help and support the needy people in the society",
    content:
      " We are helping children suffering from hunger by providing them with food and other basic necessities.",
  },
  {
    backgroundImage: "/assets/crous5.jpg",
    title: "Great Community and Support network",
    content:
      "we are a group of more than 350 people and have successfully helped more than 1000 people in the last ten months. We are also helping them to get education and other resources to make their life better.",
  },
  {
    backgroundImage: "/assets/child3.png",
    title: "To make our society a better place to live in",
    content:
      " We are helping children suffering from hunger by providing them with food and other basic necessities. We are also helping them to get education and other resources to make their life better. ",
  },
  {
    backgroundImage: "/assets/child5.jpg",
    title: "Campaigning around India to feed children and educating them ",
    content:" Campaigning around India to feed children suffering from hunger and make everyone able get food."  },
  {
    backgroundImage: "/assets/child6.png",
    title: "Spreading Happiness among all",
    content:
      "By helping we are spreading happiness and making our society a better place to live in. ",
  },
  {
    backgroundImage: "/assets/child3.png",
    title: "Making education available to all",
    content:
      " Helping children by providing them with books and other resources to ensure brighter future ",
  },
];
