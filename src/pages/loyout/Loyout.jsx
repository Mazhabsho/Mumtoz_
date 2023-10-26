import React from "react";
import Footer from "../footer/Footer";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/Asso Logo.png";
import Navbar from "../../components/navbar/Navbar";


const Loyout = () => {
  return (
    <>
      <div className="bg-black/80">
        <div className="w-[1150px] mx-auto">
          <div className="flex justify-between items-center">
            <div className="my-[5px] pb-1">
              <span className="text-sm text-gray-300 font-serif mr-2">
                Contact us <CallIcon style={{ fontSize: "20px" }} /> +992 200
                553 333
              </span>
              <span className="text-sm font-serif text-gray-300">
                <EmailIcon style={{ fontSize: "20px" }} /> sbahtovar@gmail.com
              </span>
            </div>
            <Link to="form">
              <div>
                <p className="col-span-end font-serif text-gray-300 text-sm">
                  <Link to ='register'>Register</Link> | <Link to ='singIn'>Sign In</Link>
                </p>{" "}
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Loyout;
