import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import required modules
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
import book from "../../assets/book.png"
import img from "../../assets/2.jpg"
const SliderMain = () => {
  return (
    <div className="sm:h-[60vh] md:h-[64vh] lg:h-[100vh] relative">
      <Swiper
        spaceBetween={30}
        loop={true}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* <img
            className="w-full h-full"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          /> */}
          <img src={img} className="w-full h-full" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-[100vh]">
            <img
              className="w-full h-full"
              src="https://swiperjs.com/demos/images/nature-2.jpg"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-[100vh]">
            <img
              className="w-full h-full"
              src="https://swiperjs.com/demos/images/nature-1.jpg"
            />
          </div>
        </SwiperSlide>
      </Swiper>

       <div className=" w-[1150px] mx-auto absolute right-0 left-0 top-[65%] z-20">
        <div className="grid grid-cols-3 gap-5">
          <div className="grid grid-cols-3 gap-3 px-3 bg-black/50 hover:bg-black/70 transition ease-linear duration-500 cursor-pointer">
            <div className="w-[100px] h-[100px]">
              <img src={book} className="w-full h-full" alt="imgBook" />
            </div>
            <div className="col-span-2">
              <h2 className="text-2xl pt-5 text-white font-roboto uppercase">best industry liders</h2>
               <button className="my-3 text-yellow-300 hover:text-white text-base  transition ease-linear duration-500"><a href="#">View More <KeyboardArrowRightIcon/></a></button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 px-3 bg-black/50 hover:bg-black/70 transition ease-linear duration-500 cursor-pointer">
            <div className="w-[100px] h-[100px]">
              <img src={book} className="w-full h-full" alt="imgBook" />
            </div>
            <div className="col-span-2">
              <h2 className="text-2xl pt-5 text-white font-roboto uppercase">best industry liders</h2>
               <button className="my-3 text-yellow-300 hover:text-white text-base  transition ease-linear duration-500"><a href="#">View More <KeyboardArrowRightIcon/></a></button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 px-3 bg-black/50 hover:bg-black/70 transition ease-linear duration-500 cursor-pointer">
            <div className="w-[100px] h-[100px]">
              <img src={book} className="w-full h-full" alt="imgBook" />
            </div>
            <div className="col-span-2">
              <h2 className="text-2xl pt-5 text-white font-roboto uppercase">best industry liders</h2>
               <button className="my-3 text-yellow-300 hover:text-white text-base  transition ease-linear duration-500"><a href="#">View More <KeyboardArrowRightIcon/></a></button>
            </div>
          </div>

          
        </div>
       </div>
    </div>
  );
};

export default SliderMain;
