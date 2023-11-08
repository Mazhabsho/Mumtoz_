import React, { useState } from "react";
import img from "../../assets/1.jpeg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const EventTabs = ({ data }) => {
  const [currentTab, setCurrentTab] = useState("0");
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2272940/pexels-photo-2272940.jpeg?auto=compress&cs=tinysrgb&w=600')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundOrigin: "center",
          height: "40vh",
          marginBottom: "5rem",
        }}
      >
        <div className=" w-[1150px] mx-auto pt-[10rem]">
          <h2 className="text-5xl border-l-[3px] border-[#FFB606] font-roboto font-bold  pl-5">
            Events
          </h2>
        </div>
      </div>

      <div className="w-[600px] mx-auto">
        {data.length > 0 ? (
          <div className="grid grid-cols-3 mb-5">
            {data.map((elem, id) => {
              return (
                <>
                  <div
                    className=" text-[#606060] text-center hover:text-yellow-500 translation ease-linear duration-500 font-roboto font-medium cursor-pointer"
                    key={id}
                    id={elem.id}
                    disabled={currentTab === `${elem.id}`}
                    onClick={(e) => setCurrentTab(e.target.id)}
                  >
                    {elem.tabTitle}
                  </div>
                </>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="w-full  h-[0.5px] mb-6 bg-gray-300"></div>
      <div className="w-[1150px] mx-auto mb-[5rem]">
        {data.map((elem, id) => {
          return (
            <div key={id}>
              {currentTab === `${elem.id}` && (
                <div className="grid grid-cols-9 gap-5 mb-10 ">
                  <div className=" col-span-1 border-r-[1px] h-[110px]">
                    <p className="text-[60px] font-roboto text-yellow-500 font-medium">
                      {elem.text1}
                    </p>
                    <p className="text-base mt-[-10px] font-roboto font-[#606060]">
                      {elem.text2}
                    </p>
                  </div>

                  <div className=" col-span-6">
                    <p className="text-lg font-roboto font-medium mb-2 hover:text-yellow-500 transition ease-linear duration-500 cursor-pointer">
                      {elem.text3}
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
                    <p className="text-base font-roboto mt-3">{elem.text4}</p>
                  </div>

                  <div className="h-[151.88px] w-[270px]  col-span-2">
                    <img src={img} className="w-full h-full" alt="" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default EventTabs;
