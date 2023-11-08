import React from "react";
import eventImg from "../../assets/slider.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const data = [
  {
    number: "30",
    text: "Suptember",
    title: "Lorem ipsum dolor sit amet.",
    text1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ratione, quod blanditiis magni adipisci eos.",
    time: "8:50Am  11:20 Pm",
    location: "New York, USA",
  },
  {
    number: "20",
    text: "October",
    title: "Lorem ipsum dolor sit amet.",
    text1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ratione, quod blanditiis magni adipisci eos.",
    time: "8:50Am  11:20 Pm",
    location: "New York, USA",
  },
];
const EventMain = () => {
  return (
    <>
      <h2 className="text-[28px] font-roboto font-bold">Event</h2>
      <p className="text-base font-roboto mb-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, soluta?
      </p>
      <div className="h-[1px] mb-[0.3rem] bg-gray-300 w-full"></div>
      {data.length > 0 ? (
        <>
          {data.map((elem, id) => {
            return (
              <>
                  <div className="w-100%  h-[0.5px] mb-10  bg-gray-300"></div>
                <div className="grid grid-cols-9 gap-5 mb-10">
                  <div
                    key={id}
                    className=" col-span-1 border-r-[1px] h-[110px]"
                  >
                    <p className="text-[60px] font-roboto text-yellow-500 font-medium">
                      {elem.number}
                    </p>
                    <p className="text-base mt-[-10px] font-roboto font-[#606060]">
                      {elem.text}
                    </p>
                  </div>

                  <div key={id} className=" col-span-6">
                    <p className="text-lg font-roboto font-medium mb-2 hover:text-yellow-500 transition ease-linear duration-500 cursor-pointer">
                      {elem.title}
                    </p>
                    <div className="flex justify-between items-center w-[320px]">
                      <div>
                        <span className="text-[#999] text-sm font-roboto py-3">
                          <AccessTimeIcon /> 8:00 Am - 5:00 Pm
                        </span>
                      </div>
                      <div>
                        <span className="text-[#999] text-sm font-roboto py-3 pr-5">
                          <LocationOnIcon /> New York, USA
                        </span>
                      </div>
                    </div>
                    <p className="text-base font-roboto mt-3">{elem.text1}</p>
                  </div>

                  <div key={id} className="h-[151.88px] w-[270px]  col-span-2">
                    <img src={eventImg} className="w-full h-full" alt="img" />
                  </div>
                </div>
               
              </>
            );
          })}
        </>
      ) : null}
    </>
  );
};

export default EventMain;
