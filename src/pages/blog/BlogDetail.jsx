import React from "react";
import img from "../../assets/slider.jpg";
const BlogDetail = () => {
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

      <div className="w-[1150px] mx-auto my-[5rem]">
        <div className="grid grid-cols-2 gap-5 mb-10">
          <div className="w-[565px] h-[317.81px]">
            <img src={img} className="w-full h-full" alt="img" />
          </div>
          <div className="">
            <h2 className="text-[24px] text-[#333] font-medium mb-5 mt-[-5px]">
              LMS WordPress plugin
            </h2>
            <div className="grid grid-cols-4 gap-3 mb-5">
              <div>
                <p className="text-[#ccc] text-[12px] font-roboto">Posted by</p>
                <p className="text-[12px] font-roboto pr-3 uppercase">Keny White</p>
              </div>
              <div>
                <p className="text-[#ccc] text-[12px] font-roboto">Categories</p>
                <p className="text-[12px] font-roboto pr-3 uppercase">Blog</p>
              </div>
              <div>
                <p className="text-[#ccc] text-[12px] font-roboto">Date</p>
                <p className="text-[12px] font-roboto pr-3 uppercase">25/12/2023</p>
              </div>
              <div>
                <p className="text-[#ccc] text-[12px] font-roboto">PComments</p>
                <p className="text-[12px] font-roboto pr-3 uppercase">10 Comments</p>
              </div>
            </div>
            <p className="text-[15px] font-roboto mb-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
