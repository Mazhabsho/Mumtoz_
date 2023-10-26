import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

import imgLogo from "../../assets/our.png";
const SliderMain = () => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#FF7800",
          "--swiper-pagination-color": "#FF7800",
        }}
        speed={600}
        parallax={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image":
              "url(https://swiperjs.com/demos/images/nature-1.jpg)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center mt-[280px]">
            <div className="pb-2 px-10 rounded-3xl bg-[#FF7800] border-none outline-none mb-5">
              <h2 className="text-5xl font-serif my-5">Худро ройгон бисанч!</h2>
            </div>
            <div className="grid grid-cols-3 gap-10">
              <div className="grid grid-cols-2 bg-black/50 my-3">
                <div className="my-3">
                  <img src={imgLogo} className="h-[100px]" alt="" />
                </div>
                <div className="flex   justify-center items-center my-3">
                  <h3 className="text-3xl text-[#FF7800] font-bold font-serif uppercase">
                    Best industry liders
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-2 bg-black/50 my-3">
                <div className="my-3">
                  <img src={imgLogo} className="h-[100px]" alt="" />
                </div>
                <div className="flex   justify-center items-center my-3">
                  <h3 className="text-3xl text-[#FF7800] font-bold font-serif uppercase">
                    Best industry liders
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-2 bg-black/50 my-3">
                <div className="my-3">
                  <img src={imgLogo} className="h-[100px]" alt="" />
                </div>
                <div className="flex   justify-center items-center my-3">
                  <h3 className="text-3xl text-[#FF7800] font-bold font-serif uppercase">
                    Best industry liders
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col justify-center items-center mt-[280px]">
            <div className="pb-2 px-10 rounded-3xl bg-[#FF7800] border-none outline-none mb-5">
              <h2 className="text-5xl font-serif my-5">Худро ройгон бисанч!</h2>
            </div>
            <div className="grid grid-cols-3 gap-10">
              <div className="grid grid-cols-2 bg-black/50 my-3">
                <div className="my-3">
                  <img src={imgLogo} className="h-[100px]" alt="" />
                </div>
                <div className="flex   justify-center items-center my-3">
                  <h3 className="text-3xl text-[#FF7800] font-bold font-serif uppercase">
                    Best industry liders
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-2 bg-black/50 my-3">
                <div className="my-3">
                  <img src={imgLogo} className="h-[100px]" alt="" />
                </div>
                <div className="flex   justify-center items-center my-3">
                  <h3 className="text-3xl text-[#FF7800] font-bold font-serif uppercase">
                    Best industry liders
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-2 bg-black/50 my-3">
                <div className="my-3">
                  <img src={imgLogo} className="h-[100px]" alt="" />
                </div>
                <div className="flex   justify-center items-center my-3">
                  <h3 className="text-3xl text-[#FF7800] font-bold font-serif uppercase">
                    Best industry liders
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col justify-center items-center mt-[280px]">
            <div className="pb-2 px-10 rounded-3xl bg-[#FF7800] border-none outline-none mb-5">
              <h2 className="text-5xl font-serif my-5">Худро ройгон бисанч!</h2>
            </div>
            <div className="grid grid-cols-3 gap-10">
              <div className="grid grid-cols-2 bg-black/50 my-3">
                <div className="my-3">
                  <img src={imgLogo} className="h-[100px]" alt="" />
                </div>
                <div className="flex   justify-center items-center my-3">
                  <h3 className="text-3xl text-[#FF7800] font-bold font-serif uppercase">
                    Best industry liders
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-2 bg-black/50 my-3">
                <div className="my-3">
                  <img src={imgLogo} className="h-[100px]" alt="" />
                </div>
                <div className="flex   justify-center items-center my-3">
                  <h3 className="text-3xl text-[#FF7800] font-bold font-serif uppercase">
                    Best industry liders
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-2 bg-black/50 my-3">
                <div className="my-3">
                  <img src={imgLogo} className="h-[100px]" alt="" />
                </div>
                <div className="flex   justify-center items-center my-3">
                  <h3 className="text-3xl text-[#FF7800] font-bold font-serif uppercase">
                    Best industry liders
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SliderMain;
