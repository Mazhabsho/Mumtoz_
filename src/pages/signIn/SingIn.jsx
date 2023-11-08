import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import logo from "../../assets/Asso Logo.png";
import logoIcon from "../../assets/our.png";
import SwipeDownAltIcon from '@mui/icons-material/SwipeDownAlt';
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div className=" bg-sky-500 h-screen flex">
      <div className="w-[500px] h-auto m-auto bg-white rounded shadow-lg">
        <div className="w-[200px] mx-auto pt-[4rem] pb-3">
          <img src={logo} alt="" />
        </div>

        <form>
          <div className="w-[85%] my-3 mx-auto">
            <div className="flex items-center w-full  font-roboto  font-[12px] hover:shadow-md cursor-pointer bg-white outline-none border-[0.5px] border-yellow-500 rounded-[5px]">
              <PersonIcon
                style={{
                  marginLeft: "10px",
                  color: "#909090",
                }}
              />
              <div>
                <input
                  type="email"
                  className="py-[12.5px] pl-3 w-[385px] text-sm font-roboto font-[#909090] border-none outline-none rounded-lg"
                  placeholder="Login / adress email"
                />
              </div>
            </div>
          </div>

          <div className="w-[85%] my-3 mx-auto">
            <div className="flex items-center w-full hover:shadow-md cursor-pointer bg-white outline-none border-[0.5px] border-yellow-500 rounded-[5px]">
              <KeyIcon
                style={{
                  marginLeft: "10px",
                  color: "#909090",
                }}
              />
              <div>
                <input
                  type="text"
                  className="py-[12.5px] pl-3 w-[385px] font-roboto text-sm font-[#909090] font-thin border-none outline-none rounded-lg"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end w-[85%] mx-auto my-3">
            <span className="font-roboto text-sm text-[#7d7e8c]">
              Forgotten your username or password?
            </span>
          </div>

          <div className="w-[85%] mx-auto">
            <button className="flex items-center justify-center font-roboto text-white py-[13.6px] bg-sky-500 w-full font-roboto font-medium font-sm hover:shadow-md cursor-pointer outline-none border-none rounded-[5px]">
              Log in
            </button>
          </div>
        </form>

        <div className="flex justify-end w-[85%] mx-auto my-3">
          <span className="font-roboto text-sm text-[#7d7e8c]">
            Remember username?
          </span>
        </div>

        <div className="w-[85%] mx-auto rounded-[5px] py-5 my-3 bg-[#EBEBEB] ">
          <h4 className="text-[#212121] ml-[10px] font-roboto font-medium text-base ">
            Is this your first time here? 
          </h4> 
          <p className="text-sm font-roboto ml-[10px] text-[#212121]">Click here <SwipeDownAltIcon style={{color:"#909090"}}/></p>
        </div>

         <div className="w-[85%] mx-auto my-3 bg-slate-400 h-[0.5px]"></div>

        <div className="w-[85%] mx-auto mb-[4rem]">
            <Link to='register' className="flex items-center justify-center font-roboto text-white py-[13.6px] bg-yellow-500 w-full font-roboto font-medium font-sm hover:shadow-md cursor-pointer outline-none border-none rounded-[5px]">
              Create new account
            </Link>
          </div>
      </div>
    </div>
  );
};

export default SignIn;
