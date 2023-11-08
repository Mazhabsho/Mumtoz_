import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/Asso Logo.png";

const USER_REGIX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,23}$/;

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleInput(event) {
    const newObj = { ...values, [event.target.name]: event.target.value };
    setValues(newObj);
  }
  return (
    <div className="bg-sky-500 h-auto  flex">
      <div className=" w-[700px] h-auto mx-auto my-10 bg-white rounded shadow-lg ">
        <div className="w-[300px] mx-auto mt-10 mb-[5rem]">
          <img src={logo} alt="logo" />
          <h2 className="text-lg font-roboto text-center text-[#212121] my-5 font-medium">
            New account
          </h2>
        </div>

        <div className="w-[90%] mx-auto ">
          <form>
            <div className="flex justify-between items-center py-3">
              <div className="flex justify-between items-center w-[30%]">
                <label
                  for="name"
                  className="text-sm font-roboto font-[#909090]"
                >
                  UserName:
                </label>
                *
              </div>
              <div
                div
                className="flex items-center w-[68%]  font-roboto  font-[12px] hover:shadow-md cursor-pointer bg-white outline-none border-[0.5px] border-yellow-500 rounded-[5px]"
              >
                <input
                  type="email"
                  className="py-[12.5px] pl-3 w-full text-sm font-roboto font-[#909090] border-none outline-none rounded-lg"
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center w-[30%]">
                <label
                  for="name"
                  className="text-sm font-roboto font-[#909090]"
                >
                  Password
                </label>
                *
              </div>
              <div
                div
                className="flex items-center w-[68%]  font-roboto  font-[12px] hover:shadow-md cursor-pointer bg-white outline-none border-[0.5px] border-yellow-500 rounded-[5px]"
              >
                <input
                  type="email"
                  className="py-[12.5px] pl-3 w-full text-sm font-roboto font-[#909090] border-none outline-none rounded-lg"
                />
              </div>
            </div>
            {/* start */}
            <div className="flex justify-between items-center gap-5 my-5">
              <div className="w-[50%]">
                <div className="flex justify-between items-center">
                  <p className="font-base text-black/90">Email adress</p>
                  <span className="font-base text-black/90">*</span>
                </div>
                <div className="flex items-center w-full hover:shadow-md cursor-pointer bg-white outline-none border-[0.5px] border-yellow-500 rounded-[5px]">
                  <input
                    type="text"
                    className="py-[12.5px] pl-3  font-roboto text-sm font-[#909090] font-thin border-none outline-none rounded-lg"
                  />
                </div>
              </div>

              <div className="w-[50%]">
                <div className="flex justify-between items-center">
                  <p className="font-base text-black/90">
                    Email adress (again)
                  </p>
                  <span className="font-base text-black/90">*</span>
                </div>
                <div className="flex items-center w-full hover:shadow-md cursor-pointer bg-white outline-none border-[0.5px] border-yellow-500 rounded-[5px]">
                  <input
                    type="text"
                    className="py-[12.5px] pl-3  font-roboto text-sm font-[#909090] font-thin border-none outline-none rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* end */}

            <div className="flex justify-between items-center gap-5 my-5">
              <div className="w-[50%]">
                <div className="flex justify-between items-center">
                  <p className="font-base text-black/90">First name</p>
                  <span className="font-base text-black/90">*</span>
                </div>
                <div className="flex items-center w-full hover:shadow-md cursor-pointer bg-white outline-none border-[0.5px] border-yellow-500 rounded-[5px]">
                  <input
                    type="text"
                    className="py-[12.5px] pl-3  font-roboto text-sm font-[#909090] font-thin border-none outline-none rounded-lg"
                  />
                </div>
              </div>

              <div className="w-[50%]">
                <div className="flex justify-between items-center">
                  <p className="font-base text-black/90">Surname</p>
                  <span className="font-base text-black/90">*</span>
                </div>
                <div className="flex items-center w-full hover:shadow-md cursor-pointer bg-white outline-none border-[0.5px] border-yellow-500 rounded-[5px]">
                  <input
                    type="text"
                    className="py-[12.5px] pl-3  font-roboto text-sm font-[#909090] font-thin border-none outline-none rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center gap-5 my-5">
              <div className="w-[50%]">
                <div className="flex justify-between items-center">
                  <p className="font-base text-black/90">City/town</p>
                  <span className="font-base text-black/90">*</span>
                </div>
                <div className="flex items-center w-full hover:shadow-md cursor-pointer bg-white outline-none border-[0.5px] border-yellow-500 rounded-[5px]">
                  <input
                    type="text"
                    className="py-[12.5px] pl-3  font-roboto text-sm font-[#909090] font-thin border-none outline-none rounded-lg"
                  />
                </div>
              </div>

              <div className="w-[50%]">
                <div className="flex justify-between items-center">
                  <p className="font-base text-black/90">Country</p>
                  <span className="font-base text-black/90"></span>
                </div>
                <div className="flex items-center w-full hover:shadow-md cursor-pointer bg-white outline-none border-[0.5px] border-green-500 rounded-[5px]">
                  <input
                    type="text"
                    className="py-[12.5px] pl-3  font-roboto text-sm font-[#909090] font-thin border-none outline-none rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-5">
              <div>
                <label for="city" className="">
                  Birthdata:
                </label>
                <input
                  type="number"
                  onChange={handleInput}
                  className="border-[0.5px] py-2 my-3 w-full"
                />
              </div>
              <div>
                <label for="data" className="">
                  Month:
                </label>
                <input
                  type="month"
                  onChange={handleInput}
                  name="data"
                  className="border-[0.5px] py-2 my-3 w-full"
                />
              </div>
              <div>
                <label for="Year" className="">
                  Year:
                </label>
                <input
                  type="password"
                  onChange={handleInput}
                  name="Year"
                  className="border-[0.5px] py-2 my-3 w-full"
                />
              </div>
            </div>
            {/* select start */}
            <div className="flex justify-between items-center py-3">
              <div className="flex justify-between items-center w-[30%]">
                <label
                  for="name"
                  className="text-sm font-roboto font-[#909090]"
                >
                  Academy degree
                </label>
                *
              </div>
              <div className="flex items-center w-[68%] ">
                <select
                  id="hs-hidden-select"
                  class="py-3 px-4 pr-9 block w-full font-roboto  font-[12px] hover:shadow-md cursor-pointer bg-white outline-none border-[0.5px]  rounded-[5px]   text-sm focus:border-yellow-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                >
                  <option selected>Choose ...</option>
                  <option>School</option>
                  <option>Collage</option>
                  <option>University</option>
                </select>
              </div>
            </div>
            {/* select end */}
            <div className="flex justify-between items-center py-3">
              <div className="flex justify-between items-center w-[30%]">
                <label
                  for="name"
                  className="text-sm font-roboto font-[#909090]"
                >
                  Occupation
                </label>
              </div>
              <div className="flex items-center w-[68%] ">
                <select
                  id="hs-hidden-select"
                  class="py-3 px-4 pr-9 block w-full font-roboto  font-[12px] hover:shadow-md cursor-pointer bg-white outline-none border-[0.5px]  rounded-[5px]   text-sm focus:border-yellow-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                >
                  <option selected>Choose ...</option>
                  <option>Schoolkid</option>
                  <option>Student</option>
                  <option>Regularly employed</option>
                  <option>unemployed</option>
                </select>
              </div>
            </div>

            <div className="flex justify-between items-center py-3">
              <div className="flex justify-between items-center w-[30%]">
                <label
                  for="name"
                  className="text-sm font-roboto font-[#909090]"
                >
                  Purpose of learning programing
                </label>
                *
              </div>
              <div className="flex items-center w-[68%] ">
                <select
                  id="hs-hidden-select"
                  class="py-3 px-4 pr-9 block w-full font-roboto  font-[12px] hover:shadow-md cursor-pointer bg-white outline-none border-[0.5px]  rounded-[5px]   text-sm focus:border-yellow-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                >
                  <option selected>Choose ...</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                </select>
              </div>
            </div>

            <div className="flex justify-between items-center py-3">
              <div className="flex justify-between items-center w-[30%]">
                <label
                  for="name"
                  className="text-sm font-roboto font-[#909090]"
                >
                  Phone number:
                </label>
              </div>
              <div
                div
                className="flex items-center w-[68%]  font-roboto  font-[12px] hover:shadow-md cursor-pointer bg-white outline-none border-[0.5px] border-yellow-500 rounded-[5px]"
              >
                <input
                  type="email"
                  className="py-[12.5px] pl-3 w-full text-sm font-roboto font-[#909090] border-none outline-none rounded-lg"
                />
              </div>
            </div>

            <div className="flex justify-between items-center py-3">
              <div className="flex justify-between items-center w-[30%]"></div>
              <div
                div
                className="flex items-center w-[68%] hover:shadow-md cursor-pointer  bg-gray-300 rounded-[5px]"
              >
                <a
                  href="/www.google.com"
                  target="_blank"
                  className="font-roboto text-sky-500 hover:sky-300  py-3 pl-3 font-[12px]  outline-none"
                >
                  Link to site policy agreement
                </a>
              </div>
            </div>

            <div className="flex justify-between items-center py-3">
              <div className="flex justify-between items-center w-[30%]"></div>
              <div
                div
                className="flex items-center w-[68%]  bg-gray-300 rounded-[5px] cursor-pointer hover:shadow-md"
              >
                <p className="font-roboto text-[#212121]  py-3 pl-3 font-[12px]   outline-none">
                  {" "}
                  I understand and agree
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center py-3 mb-10">
              <div className="flex justify-between items-center w-[30%]"></div>
              <div className="flex items-center w-[68%] rounded-[5px]">
                <button className="py-3 font-roboto text-sm border-none text-white rounded-[5px] shadow-md mr-5 outline-none bg-sky-500 px-5">Create my new account</button>
                <button className="py-3 rounded-[5px] font-roboto text-sm border-[0.5px] px-5">Cencel</button>
              </div>
            </div>
          </form>
           <p className="font-roboto rounded-[5px] text-sm text-[#e11027] bg-[#fee9eb] pl-5 mb-10 py-3">There are  required fields in this form marked  <span className="text-xl text-red-500">*</span></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
