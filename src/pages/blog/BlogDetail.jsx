import React from "react";
import img from "../../assets/slider.jpg";
const BlogDetail = () => {
  return (
    <div className="w-[1150px] mx-auto my-[5rem]">
      <div className="border-l-2 border-yellow-500">
        <h2 className="font-serif font-bold text-5xl pl-5 mb-10">Blog</h2>
      </div>

      <div className="grid grid-cols-2 gap-5 mb-10">
        <div className="">
          <img src={img} className="w-full h-full" alt="img" />
        </div>
        <div className="">
          <h2 className="text-3xl font-serif font-bold mb-5 mt-[-5px]">LMS WordPress plugin</h2>
          <div className="grid grid-cols-4 gap-3 mb-5">
            <div>
                <p className="text-sm text-[#adadad]">Posted by</p>
                <p className="text-sm font-serif uppercase">Keny White</p>
            </div>
            <div>
                <p className="text-sm text-[#adadad]">Categories</p>
                <p className="text-sm font-serif uppercase">Blog</p>
            </div>
            <div>
                <p className="text-sm text-[#adadad]">Date</p>
                <p className="text-sm font-serif uppercase">25/12/2023</p>
            </div>
            <div>
                <p className="text-sm text-[#adadad]">PComments</p>
                <p className="text-sm font-serif uppercase">10 Comments</p>
            </div>
          </div>
          <p className="text-lg font-serif">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
