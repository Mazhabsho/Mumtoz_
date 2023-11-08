import React from "react";
import img from "../../assets/slider.jpg";
import imgLogo from "../../assets/1.jpeg";
import imgAdd from "../../assets/1.jpeg";
import { Link } from "react-router-dom";
const arr = [
  {
    text1: "20",
    text2: "September",
    text3: "LMS wordpress plugen",
    text4: "pased by",
    text5: "Keny home",
    text6: "conegories",
    text7: "blog",
    text8: "comments",
    text9: "54",
    text10:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestias deserunt rerum in odit, eius magnam illum facere blanditiis placeat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestias deserunt rerum in odit, eius magnam illum facere blanditiis placeat!",
  },
];
const BlogPart = () => {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2272940/pexels-photo-2272940.jpeg?auto=compress&cs=tinysrgb&w=600')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "40vh",
        }}
      >
        <div className=" w-[1150px] mx-auto pt-[10rem] pb-[5rem] ">
          <h2 className="text-5xl border-l-[3px] border-[#FFB606] font-roboto font-bold  pl-5">
            Blog
          </h2>
        </div>
      </div>

      <div className="w-[1150px] mx-auto">
        <div className="grid grid-cols-7 gap-8 my-5">
          <div className="col-span-5">
            <div className="h-[457px] w-full mb-10">
              <img src={img} className="w-full h-full" alt="" />
            </div>
            {arr.length > 0 ? (
              <div>
                {arr.map((elem, id) => {
                  return (
                    <>
                      <div className="flex gap-5  mb-5">
                        <div className=" border-r-2 border-gray-300 pr-4">
                          <p className="text-[66px] font-roboto pt[20px] mt-[-10px] text-yellow-500">
                            {elem.text1}
                          </p>
                          <p className="text-[12px] mt-[-15px] font-serif uppercase">
                            {elem.text2}
                          </p>
                        </div>

                        <div className="">
                          <h1 className="text-[24px] text-[#333] mb-5  hover:text-yellow-500 transition ease-linear duration-500 cursor-point font-roboto font-medium">
                            {elem.text3}
                          </h1>
                          <div className="grid grid-cols-3 gap-3">
                            <div className="border-r-2 border-gray-300">
                              <p className="text-[#ccc] text-[12px] font-roboto">
                                {elem.text4}
                              </p>
                              <p className="text-[12px] font-roboto pr-3 uppercase">
                                {elem.text5}
                              </p>
                            </div>
                            <div className="border-r-2 border-gray-300">
                              <p className="text-[#ccc] text-[12px] font-roboto">
                                {elem.text6}
                              </p>
                              <p className="text-[12px] font-roboto uppercase">
                                {elem.text7}
                              </p>
                            </div>
                            <div>
                              <p className="text-[#ccc] text-[12px] font-roboto">
                                {elem.text8}
                              </p>
                              <p className="text-[15px] font-roboto uppercase">
                                {elem.text9}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-[5rem]">
                        <p className="my-2 text-[15px] font-roboto mb-10">
                          {elem.text10}
                        </p>
                        <Link
                          to="/blogdetail"
                          className="text-[13px] py-[10px] font-medium px-[25px] bg-yellow-500 uppercase font-roboto my-3"
                        >
                          read more
                        </Link>
                      </div>
                    </>
                  );
                })}
              </div>
            ) : null}
          </div>

          <div className="col-span-2">
            <h2 className="text-start text-xl font-serif text-bold uppercase mt-[-5.4px] mb-5">
              Popular Courses
            </h2>
            <div className="grid grid-flow-row mb-5">
              <div className="grid grid-cols-2 gap-5 mb-5">
                <div className="h-[79.88px] w-[142px]">
                  <img
                    src={imgLogo}
                    className="w-full h-full"
                    alt="ImgCourse"
                  />
                </div>
                <div>
                  <p className="text-sm font-roboto hover:text-yellow-500 transition ease-linear duration-500 cursor-pointer">
                    Introduction LearnPress – LMS plugin
                  </p>
                  <p className="text-lg font-roboto text-green-500">free</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5 mb-5">
                <div className="w-[142px] h-[79.88px]">
                  <img
                    src={imgLogo}
                    className="w-full h-full"
                    alt="ImgCourse"
                  />
                </div>
                <div>
                  <p className="text-sm  font-roboto hover:text-yellow-500 transition ease-linear duration-500 cursor-pointer">
                    Introduction LearnPress – LMS plugin
                  </p>
                  <p className="text-lg font-roboto text-green-500">free</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5 mb-5">
                <div className="w-[142px] h-[79.88px]">
                  <img
                    src={imgLogo}
                    className="w-full h-full"
                    alt="ImgCourse"
                  />
                </div>
                <div>
                  <p className="text-sm font-roboto hover:text-yellow-500 transition ease-linear duration-500 cursor-pointer">
                    Introduction LearnPress – LMS plugin
                  </p>
                  <p className="text-lg font-roboto text-green-500">free</p>
                </div>
              </div>
            </div>

            <div className="w-[262.5px] h-[285.56px]">
              <img src={imgAdd} className="w-full h-full" alt="imgAdd" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPart;
