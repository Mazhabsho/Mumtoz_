import React from "react";

const arr = [
  {
    title: "Mumtoz",
    text2: "+992200553333",
    text3: "5th Evenue New York apartment 5",
    text4: "sbachtovar@gmail.com",
    text5: "social icons",
  },
  {
    title: "Company",
    text2: "Home",
    text3: "Contact",
    text4: "Service",
    text5: "Blog",
  },
  {
    title: "Company",
    text2: "Courses",
    text3: "Events",
    text4: "Service",
    text5: "Blog",
  },
  {
    title: "Company",
    text2: "Home",
    text3: "Contact",
    text4: "Service",
    text5: "Blog",
  },
  {
    title: "Company",
    text2: "Home",
    text3: "Contact",
    text4: "Service",
    text5: "Blog",
  },
];

const Footer = () => {
  return (
    <div className="bg-[#111111]">
      <div className="w-[1150px] py-[4rem] mx-auto">
        {arr.length > 0 ? (
          <div className="grid grid-cols-5 gap-3">
            {arr.map((elem, id) => {
              return (
                <div className="">
                  <h2 className="text-white font-roboto text-lg mb-5">{elem.title}</h2>
                  <p className="mb-3 font-roboto text-base text-[#999]">{elem.text2}</p>
                  <p className="mb-3 font-roboto text-base text-[#999]">{elem.text3}</p>
                  <p className="mb-3 font-roboto text-base text-[#999]">{elem.text4}</p>
                  <p className=" font-roboto  text-base text-[#999]   ">{elem.text5}</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Footer;
