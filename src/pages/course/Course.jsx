import React from "react";
import imgCourses from "../../assets/slider.jpg";
import { Link } from "react-router-dom";

const arr = [
  {
    title: "Keny White",
    text: "The Complete Online Teaching Masterclass",
    price1: "$36.25",
    price2: "$20.25",
  },
  {
    title: "Keny White",
    text: "The Complete Online Teaching Masterclass",
    price1: "$36.25",
    price2: "$20.25",
  },
  {
    title: "Keny White",
    text: "The Complete Online Teaching Masterclass",
    price1: "$36.25",
    price2: "$20.25",
  },
  {
    title: "Keny White",
    text: "The Complete Online Teaching Masterclass",
    price1: "$36.25",
    price2: "$20.25",
  },
  {
    title: "Keny White",
    text: "The Complete Online Teaching Masterclass",
    price1: "$36.25",
    price2: "$20.25",
  },
  {
    title: "Keny White",
    text: "The Complete Online Teaching Masterclass",
    price1: "$36.25",
    price2: "$20.25",
  },
  {
    header: "Course Categories",
    course1: "text1",
    course2: "text2",
    course3: "text3",
    course4: "text4",
    course5: "text5",
    course6: "text6",
  },
  {
    header: "Instructors",
    course1: "Keny white",
  },
  {
    header: "Prices",
    course1: "All:  51",
    course2: " Free: 16",
    course3: "Paid: 25",
  },
];

const Course = () => {
  return (
    <div className="w-[1170px] mx-auto">
      <h2 className="text-5xl font-serif font-bold">Course</h2>
      <div className="h-[50px] bg-green-200">
        <input type="text" placeholder="search" className="my-2" />
      </div>

      <div>
        {arr.length > 0 ? (
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-3">
              <div className="grid grid-cols-3 gap-3">
                {arr.map((elem) => {
                  return (
                   
                      <div className="border-2 w-[262.47px]">
                        <img
                          src={imgCourses}
                          className="w-full h-f[250px]"
                          alt=""
                        />
                        <div className="w-[90%] mx-auto">
                          <p className="text-center text-lg py-3 text-gray-500">
                            {elem.title}
                          </p>
                          <p className="text-lg text-center font-serif fot-bold">
                            {elem.text}
                          </p>
                          <span className="text-gray-500 mr-5  text-lg py-2">
                            {elem.price1}
                          </span>
                          <span className="text-red-500 text-lg">
                            {elem.price2}
                          </span>
                        </div>
                      </div>
                   
                  );
                })}
              </div>
            </div>

            <div className="cols-span-1">
              {arr.map((elem, id) => {
                return (
                  <>
                    <div className="space-y-[1rem]">
                      <h3 className="text-xl font-serif font-bold">
                        {elem.header}
                      </h3>
                      <p className="text-lg font=serif">{elem.course1}</p>
                      <p className="text-lg font=serif">{elem.course2}</p>
                      <p className="text-lg font=serif">{elem.course3}</p>
                      <p className="text-lg font=serif">{elem.course4}</p>
                      <p className="text-lg font=serif">{elem.course5}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Course;
