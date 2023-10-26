import React from "react";
import avatar from "../../assets/our.png";
import img from "../../assets/slider.jpg";
const arr = [
  {
    title: "Introduction LearnPress - LMS plugin",
    teacher: "teacher",
    name: "Keny White",
    category: "category",
    teach: "teaching Online",
    review: "review",
  },
];

const arr1 = [
  {
    title1: "COURSE DESCRIPTION",
    text1:
      "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online. You can create a course curriculum with lessons & quizzes included which is managed with an easy-to-use interface for users. Having this WordPress LMS Plugin, now you have a chance to quickly and easily create education, online school, online-course websites with no coding knowledge required.",
    text2:
      "LearnPress is free and always will be, but it is still a premium high-quality WordPress Plugin that definitely helps you with making money from your WordPress Based LMS. Just try and see how amazing it is. LearnPress WordPress Online Course plugin is lightweight and super powerful with lots of Add-Ons to empower its core system.",
    head: "Course Features",
    lecture: "lecture",
    quiz: "Qiuzes",
    duration: "Duration",
    skill: "skill level",
    language: "Language",
    student: "Student",
    assessment: "assessment",
  },
];

const arr2 = [
    {
        title: "All Courses",
        text1:"Coaching",
        text2:"Online Business",
        text3:"Passive Income",
        text4:"Photography",
        text5:"Teacher Training",
        text6:"Teaching Online",
        text7:"Technology",
        text7:"Video Creation",
    }
]

const InfoPageCourse = () => {
  return (
    <div className="container mx-auto my-[5rem]">
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-3">
          {arr.length > 0 ? (
            <>
              {arr.map((elem, id) => {
                return (
                  <>
                    <h2 className="pb-5 text-3xl">{elem.title}</h2>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="grid grid-cols-2">
                        <div>
                          {" "}
                          <img src={avatar} className="rounded w-[70px] h-[70px]" alt="" />
                        </div>
                        <div>
                          <p className="text-lg">{elem.teacher}</p>
                          <p className="text-lg">{elem.name}</p>
                        </div>
                      </div>
                      <div className="">
                        <p className="text-lg">{elem.category}</p>
                        <p className="text-lg">{elem.teach}</p>
                      </div>
                      <div className="">
                        <p className="text-lg">{elem.review}</p>
                        <p className="text-lg">Star</p>
                      </div>
                    </div>

                    <div className="h-[300px] my-5">
                      <img src={img} className="w-full h-full" alt="" />
                    </div>

                    <div className="grid grid-cols-4 gap-3 text-center">
                      <div>
                        <p>text</p>
                      </div>
                      <div>
                        <p>text</p>
                      </div>
                      <div>
                        <p>text</p>
                      </div>
                      <div>
                        <p>text</p>
                      </div>
                    </div>

                    <div className="">
                      {arr1.map((elem, id) => {
                        return (
                          <div className="grid grid-cols-3 gap-3">
                            <div className=" col-span-2">
                              <h1>{elem.title1}</h1>
                              <p>{elem.text1}</p>
                              <p>{elem.text2}</p>
                            </div>
                            <div className=" col-span-1">
                              <h3>{elem.head}</h3>
                              <p>{elem.lecture}</p>
                              <p>{elem.quiz}</p>
                              <p>{elem.duration}</p>
                              <p>{elem.skill}</p>
                              <p>{elem.language}</p>
                              <p>{elem.student}</p>
                              <p>{elem.assessment}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                );
              })}
            </>
          ) : null}
        </div>
        <div className="col-span-1">
            {arr2.map((elem,id)=>{
                return(
                    <>
                     <h2 className="text-3xl font-bold font-serif">{elem.title}</h2>
                     <p className="text-lg font-serif py-1 hover:text-yellow-500 cursor-pointer">{elem.text1}</p>
                     <p className="text-lg font-serif py-1 hover:text-yellow-500 cursor-pointer">{elem.text2}</p>
                     <p className="text-lg font-serif py-1 hover:text-yellow-500 cursor-pointer">{elem.text3}</p>
                     <p className="text-lg font-serif py-1 hover:text-yellow-500 cursor-pointer">{elem.text4}</p>
                     <p className="text-lg font-serif py-1 hover:text-yellow-500 cursor-pointer">{elem.text5}</p>
                     <p className="text-lg font-serif py-1 hover:text-yellow-500 cursor-pointer">{elem.text6}</p>
                     <p className="text-lg font-serif py-1 hover:text-yellow-500 cursor-pointer">{elem.text7}</p>
                    </>
                )
            })}
        </div>
      </div>
    </div>
  );
};

export default InfoPageCourse;
