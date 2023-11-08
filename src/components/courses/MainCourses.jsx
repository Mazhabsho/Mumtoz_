import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import GroupIcon from '@mui/icons-material/Group';
// import required modules
import { Pagination, Navigation } from "swiper/modules";

import imgCourse from "../../assets/slider.jpg";
import logo from "../../assets/our.png"
const MainCourses = () => {
  return (
    <>
      <h2 className="text-[28px] font-roboto text-[#333] font-bold mb-2">Popular Courses</h2>
      <p className="text-base font-roboto mb-10">
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
          <div className="border-2 relative">
            <figure  className="overlay__demo">
            <img src={imgCourse} alt="" />
            <figcaption>Read</figcaption>
            </figure>
            <img src={imgCourse} className="w-[60px] h-[60px] right-[39%] top-[36%] z-50 absolute rounded-full" alt="" />
             
            <div className="w-[90%] pt-5  mx-auto">
              <p className="text-center text-sm mt-3 font-roboto py-2 text-[#7a7a7a]">
                Keny White
              </p>
              <p className="text-base text-center font-roboto fot-bold">
                The Complete Online Teaching Masterclass
              </p>
              <div className="w-full my-3 bg-slate-200 h-[0.5px]">
              <div className="w-[20%] h-[2px] mx-auto bg-yellow-600"></div>
              </div>
              
              <div className="flex justify-between items-center mb-3">
                <div>
                <GroupIcon style={{marginTop:"-7px"}}/>
                <span className="text-gray-500 mr-5  text-lg">520</span>
                </div>
                <div>
                <span className="text-green-500 font-roboto text-lg">free</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="border-2 relative">
            <img src={imgCourse} alt="" />
            <img src={imgCourse} className="w-[60px] h-[60px] right-[39%] top-[36%] z-50 absolute rounded-full" alt="" />
            <div className="w-[90%] pt-5  mx-auto">
              <p className="text-center text-sm mt-3 font-roboto py-2 text-[#7a7a7a]">
                Keny White
              </p>
              <p className="text-base text-center font-roboto fot-bold">
                The Complete Online Teaching Masterclass
              </p>
              <div className="w-full my-3 bg-slate-200 h-[0.5px]">
              <div className="w-[20%] h-[2px] mx-auto bg-yellow-600"></div>
              </div>
              
              <div className="flex justify-between items-center mb-3">
                <div>
                <GroupIcon style={{marginTop:"-7px"}}/>
                <span className="text-gray-500 mr-5  text-lg"> 520</span>
                </div>
                <div>
                <span className="text-red-500 text-lg">$20.25</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="border-2 relative">
            <img src={imgCourse} alt="" />
            <img src={imgCourse} className="w-[60px] h-[60px] right-[39%] top-[36%] z-50 absolute rounded-full" alt="" />
            <div className="w-[90%] pt-5  mx-auto">
              <p className="text-center text-sm mt-3 font-roboto py-2 text-[#7a7a7a]">
                Keny White
              </p>
              <p className="text-base text-center font-roboto fot-bold">
                The Complete Online Teaching Masterclass
              </p>
              <div className="w-full my-3 bg-slate-200 h-[0.5px]">
              <div className="w-[20%] h-[2px] mx-auto bg-yellow-600"></div>
              </div>
              
              <div className="flex justify-between items-center mb-3">
                <div>
                <GroupIcon style={{marginTop:"-7px"}}/>
                <span className="text-gray-500 mr-5  text-lg">520</span>
                </div>
                <div>
                <span className="text-green-500 text-lg font-roboto"> <span className="line-through text-red-500">$520</span> free</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="border-2 relative">
            <img src={imgCourse} alt="" />
            <img src={imgCourse} className="w-[60px] h-[60px] right-[39%] top-[36%] z-50 absolute rounded-full" alt="" />
            <div className="w-[90%] pt-5  mx-auto">
              <p className="text-center text-sm mt-3 font-roboto py-2 text-[#7a7a7a]">
                Keny White
              </p>
              <p className="text-base text-center font-roboto fot-bold">
                The Complete Online Teaching Masterclass
              </p>
              <div className="w-full my-3 bg-slate-200 h-[0.5px]">
              <div className="w-[20%] h-[2px] mx-auto bg-yellow-600"></div>
              </div>
              
              <div className="flex justify-between items-center mb-3">
                <div>
                <GroupIcon style={{marginTop:"-7px"}}/>
                <span className="text-gray-500 mr-5  text-lg"> 520</span>
                </div>
                <div>
                <span className="text-red-500 text-lg">$20.25</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="border-2 relative">
            <img src={imgCourse} alt="" />
            <img src={imgCourse} className="w-[60px] h-[60px] right-[39%] top-[36%] z-50 absolute rounded-full" alt="" />
            <div className="w-[90%] pt-5  mx-auto">
              <p className="text-center text-sm mt-3 font-roboto py-2 text-[#7a7a7a]">
                Keny White
              </p>
              <p className="text-base text-center font-roboto fot-bold">
                The Complete Online Teaching Masterclass
              </p>
              <div className="w-full my-3 bg-slate-200 h-[0.5px]">
              <div className="w-[20%] h-[2px] mx-auto bg-yellow-600"></div>
              </div>
              
              <div className="flex justify-between items-center mb-3">
                <div>
                <GroupIcon style={{marginTop:"-7px"}}/>
                <span className="text-gray-500 mr-5  text-lg"> 520</span>
                </div>
                <div>
                <span className="text-red-500 text-lg">$20.25</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="border-2 relative">
            <img src={imgCourse} alt="" />
            <img src={imgCourse} className="w-[60px] h-[60px] right-[39%] top-[36%] z-50 absolute rounded-full" alt="" />
            <div className="w-[90%] pt-5  mx-auto">
              <p className="text-center text-sm mt-3 font-roboto py-2 text-[#7a7a7a]">
                Keny White
              </p>
              <p className="text-base text-center font-roboto fot-bold">
                The Complete Online Teaching Masterclass
              </p>
              <div className="w-full my-3 bg-slate-200 h-[0.5px]">
              <div className="w-[20%] h-[2px] mx-auto bg-yellow-600"></div>
              </div>
              
              <div className="flex justify-between items-center mb-3">
                <div>
                <GroupIcon style={{marginTop:"-7px"}}/>
                <span className="text-gray-500 mr-5  text-lg"> 520</span>
                </div>
                <div>
                <span className="text-red-500 text-lg">$20.25</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="border-2 relative">
            <img src={imgCourse} alt="" />
            <img src={imgCourse} className="w-[60px] h-[60px] right-[39%] top-[36%] z-50 absolute rounded-full" alt="" />
            <div className="w-[90%] pt-5  mx-auto">
              <p className="text-center text-sm mt-3 font-roboto py-2 text-[#7a7a7a]">
                Keny White
              </p>
              <p className="text-base text-center font-roboto fot-bold">
                The Complete Online Teaching Masterclass
              </p>
              <div className="w-full my-3 bg-slate-200 h-[0.5px]">
              <div className="w-[20%] h-[2px] mx-auto bg-yellow-600"></div>
              </div>
              
              <div className="flex justify-between items-center mb-3">
                <div>
                <GroupIcon style={{marginTop:"-7px"}}/>
                <span className="text-gray-500 mr-5  text-lg"> 520</span>
                </div>
                <div>
                <span className="text-red-500 text-lg">$20.25</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="border-2 relative">
            <img src={imgCourse} alt="" />
            <img src={imgCourse} className="w-[60px] h-[60px] right-[39%] top-[36%] z-50 absolute rounded-full" alt="" />
            <div className="w-[90%] pt-5  mx-auto">
              <p className="text-center text-sm mt-3 font-roboto py-2 text-[#7a7a7a]">
                Keny White
              </p>
              <p className="text-base text-center font-roboto fot-bold">
                The Complete Online Teaching Masterclass
              </p>
              <div className="w-full my-3 bg-slate-200 h-[0.5px]">
              <div className="w-[20%] h-[2px] mx-auto bg-yellow-600"></div>
              </div>
              
              <div className="flex justify-between items-center mb-3">
                <div>
                <GroupIcon style={{marginTop:"-7px"}}/>
                <span className="text-gray-500 mr-5  text-lg"> 520</span>
                </div>
                <div>
                <span className="text-red-500 text-lg">$20.25</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
      <div className="flex justify-center items-center my-5">
        <button className="px-8 py-2 uppercase text-base font-roboto shadow-md hover:bg-yellow-800 transition linier  text-center bg-yellow-600">
          view more
        </button>
      </div>
    </>
  );
};

export default MainCourses;
