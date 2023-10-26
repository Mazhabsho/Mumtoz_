import React from "react";
import eventImg from "../../assets/slider.jpg";
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
      <h2 className="text-5xl font-serif font-bold">Event</h2>
      <p className="text-lg pb-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, soluta?
      </p>

      {data.length > 0 ? (
        <>
          {data.map((elem, id) => {
            return (
              <div className="grid grid-cols-4 gap-5 my-5">
                <div key={id}>
                  <p className="text-7xl font-bold text-yellow-500">
                    {elem.number}
                  </p>
                  <p className="text-lg font-serif">{elem.text}</p>
                </div>
                <div key={id} className="col-span-2">
                  <p className="text-3xl font-serif font-bold hover:text-yellow-600 cursor-pointer">{elem.title}</p>
                  <p className="text-lg font-serif">{elem.time}</p>
                  <p className="text-lg font-serif">{elem.location}</p>
                  <p className="text-lg font-serif">{elem.text1}</p>
                </div>
                <div key={id}>
                  <img src={eventImg} className="w-full h-[200px]" alt="img" />
                </div>
              </div>
            );
          })}
        </>
      ) : null}
    </>
  );
};

export default EventMain;
