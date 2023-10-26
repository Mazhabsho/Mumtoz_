import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import imgCourse from "../../assets/slider.jpg";

const MainCourses = () => {
  return (
    <>
      <h2 className="text-5xl font-serif font-bold mb-2">Popular Courses</h2>
      <p className="text-lg font-serif mb-5">
        Limitless learning, more possibilities
      </p>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="border-2">
            <img src={imgCourse} alt="" />
            <div className="w-[90%] mx-auto">
              <p className="text-center text-lg py-3 text-gray-500">
                Keny White
              </p>
              <p className="text-lg text-center font-serif fot-bold">
                The Complete Online Teaching Masterclass
              </p>
              <span className="text-gray-500 mr-5  text-lg py-2">$36.25</span>
              <span className="text-red-500 text-lg">$20.25</span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="border-2">
            <img src={imgCourse} alt="" />
            <div className="w-[90%] mx-auto">
              <p className="text-center text-lg py-3 text-gray-500">
                Keny White
              </p>
              <p className="text-lg text-center font-serif fot-bold">
                The Complete Online Teaching Masterclass
              </p>
              <span className="text-gray-500 mr-5  text-lg py-2">$36.25</span>
              <span className="text-red-500 text-lg">$20.25</span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="border-2">
            <img src={imgCourse} alt="" />
            <div className="w-[90%] mx-auto">
              <p className="text-center text-lg py-3 text-gray-500">
                Keny White
              </p>
              <p className="text-lg text-center font-serif fot-bold">
                The Complete Online Teaching Masterclass
              </p>
              <span className="text-gray-500 mr-5  text-lg py-2">$36.25</span>
              <span className="text-red-500 text-lg">$20.25</span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="border-2">
            <img src={imgCourse} alt="" />
            <div className="w-[90%] mx-auto">
              <p className="text-center text-lg py-3 text-gray-500">
                Keny White
              </p>
              <p className="text-lg text-center font-serif fot-bold">
                The Complete Online Teaching Masterclass
              </p>
              <span className="text-gray-500 mr-5  text-lg py-2">$36.25</span>
              <span className="text-red-500 text-lg">$20.25</span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="border-2">
            <img src={imgCourse} alt="" />
            <div className="w-[90%] mx-auto">
              <p className="text-center text-lg py-3 text-gray-500">
                Keny White
              </p>
              <p className="text-lg text-center font-serif fot-bold">
                The Complete Online Teaching Masterclass
              </p>
              <span className="text-gray-500 mr-5  text-lg py-2">$36.25</span>
              <span className="text-red-500 text-lg">$20.25</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2">
            <img src={imgCourse} alt="" />
            <div className="w-[90%] mx-auto">
              <p className="text-center text-lg py-3 text-gray-500">
                Keny White
              </p>
              <p className="text-lg text-center font-serif fot-bold">
                The Complete Online Teaching Masterclass
              </p>
              <span className="text-gray-500 mr-5  text-lg py-2">$36.25</span>
              <span className="text-red-500 text-lg">$20.25</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2">
            <img src={imgCourse} alt="" />
            <div className="w-[90%] mx-auto">
              <p className="text-center text-lg py-3 text-gray-500">
                Keny White
              </p>
              <p className="text-lg text-center font-serif fot-bold">
                The Complete Online Teaching Masterclass
              </p>
              <span className="text-gray-500 mr-5  text-lg py-2">$36.25</span>
              <span className="text-red-500 text-lg">$20.25</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2">
            <img src={imgCourse} alt="" />
            <div className="w-[90%] mx-auto">
              <p className="text-center text-lg py-3 text-gray-500">
                Keny White
              </p>
              <p className="text-lg text-center font-serif fot-bold">
                The Complete Online Teaching Masterclass
              </p>
              <span className="text-gray-500 mr-5  text-lg py-2">$36.25</span>
              <span className="text-red-500 text-lg">$20.25</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="flex justify-center items-center my-5">
        <button className="px-8 py-2 uppercase text-lg font-serif shadow-md hover:bg-yellow-800 transition linier  text-center bg-yellow-600">
          view more
        </button>
      </div>
    </>
  );
};

export default MainCourses;
