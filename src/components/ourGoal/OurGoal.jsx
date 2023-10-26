import React from "react";
const data = [
  {
    title: "Наша  цель - ваша",
    title1:"трудоустройства",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime fugit dolorum, suscipit error repellat sapiente velit minus delectus pariatur et quos tempore incidunt maiores saepe numquam at deleniti asperiores cupiditate?",
  },
];
const OurGoal = () => {
  return (
    <>
      {data.length > 0 ? (
        <div>
          {data.map((elem, id) => {
            return (
              <div key={id} className="bg-[#87B1F7] rounded-xl">
                <h2 className="text-5xl text-white/90 font-serif font-bold pt-5 px-5">{elem.title}</h2>
                <h2 className="text-5xl text-white/90 font-serif font-bold pb-5 px-5 ">{elem.title1}</h2>
                <p className="text-lg   text-white/90 px-5 pb-5">{elem.text}</p>
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default OurGoal;
