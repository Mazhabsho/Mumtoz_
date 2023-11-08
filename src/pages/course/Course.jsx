import React, { useCallback, useEffect, useState } from "react";
import GroupIcon from "@mui/icons-material/Group";
import imgCourses from "../../assets/slider.jpg";
import { Link } from "react-router-dom";
import imgCourse from "../../assets/slider.jpg";
import axios from "axios";
import Post from "../../components/post/Post";
import Pagination from "../../components/pagination/Pagination";
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
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentpage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const fetchPost = async () => {
    setLoading(true);
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  //get current posts
  const indexOfLastPost = currentpage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage (prev => prev + 1);
  const prevPage = () => setCurrentPage (prev => prev - 1);
  return (
    <div className="w-[1150px] my-[5rem] mx-auto">
      <h2 className="text-[28px] font-roboto text-[#333] font-bold mb-10">
        Popular Courses
      </h2>
      <div>
        {/* {arr.length > 0 ? (
          <div className="grid grid-cols-4 gap-5">
            {arr.map((elem) => {
              return (
                <div className="border-2 relative">
                  <img src={imgCourse} alt="" />
                  <img
                    src={imgCourse}
                    className="w-[60px] h-[60px] right-[39%] top-[36%] z-50 absolute rounded-full"
                    alt=""
                  />
                  <div className="w-[90%] pt-5  mx-auto">
                    <p className="text-center text-sm mt-3 font-roboto py-2 text-[#7a7a7a]">
                      Keny White
                    </p>
                    <p className="text-base text-center font-roboto fot-bold">
                      The Complete Online Teaching Masterclass
                    </p>
                    <div className="w-full my-3 bg-slate-200 h-[0.5px]">
                      <div className="w-[20%] h-[2px] mx-auto bg-yellow-600"></div>
                    </div>

                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <GroupIcon style={{ marginTop: "-7px" }} />
                        <span className="text-gray-500 mr-5  text-lg">520</span>
                      </div>
                      <div>
                        <span className="text-green-500 text-lg font-roboto">
                          {" "}
                          <span className="line-through text-red-500">
                            $520
                          </span>{" "}
                          free
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null} */}
        <Post posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />

        <button onClick={prevPage} className="text-base bg-slate-400 font-roboto py-3 px-6 mr-5">prev page</button>
        <button onClick={nextPage} className="text-base bg-slate-400 font-roboto py-3 px-6">next page</button>
      </div>
    </div>
  );
};

export default Course;
