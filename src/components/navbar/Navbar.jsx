import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


// const datas = [
//   {
//     title: "home",
//   },
//   {
//     title: "services",
//   },
//   {
//     title: "events",
//   },
//   {
//     title: "contact",
//   },
//   {
//     title: "courses",
//   },
// ];

const Navbar = () => {
  // const [dropdawn, setDropdawn] = useState(true);
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* <div className=" nav h-[8.5vh] bg-gray-500 z-50 text-white">
      <div className="w-[1150px] mx-auto">
        <div className=" flex justify-between items-center ">
          <Link to="/">
            <p>Mumtoz</p>
          </Link>

          <ul className="nav_items flex justify-end gap-3 items-center my-3">
            {datas.map((elem, id) => {
              if (elem.title === "services") {
                return (
                  <li
                    className=" text-lg font-serif uppercase"
                    onMouseEnter={() => setDropdawn(true)}
                    onMouseLeave={() => setDropdawn(false)}
                  >
                    <Link to="/">{elem.title}</Link>
                    {dropdawn && <Dropdown />}
                  </li>
                );
              }
              return (
                <li className=" text-lg font-serif uppercase">
                  <Link to="/">{elem.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div> */}
      <nav className="bg-white">
        <div className="flex items-center justify-around  font-medium">
          <div className="z-50 pl-4 md:w-auto w-full flex justify-between">
            <h3>Mumtoz</h3>
             <div className="md:hidden" onClick={()=> setOpen(!open)}>
             <MenuIcon name={`${open ? "close": "menu"}`}/>
             </div>
          </div>

          <div>
            <ul className="md:flex hidden items-center uppercase gap-8 font-serif">
              <li>
                <Link to="/" className="py-5 inline-block">
                  home
                </Link>
              </li>
              <Dropdown />
            </ul>
          </div>
           {/* mobile */}
           <ul
                className={`md:hidden bg-red-500 absolute w-full h-full bottom-0 py-10 pl-4 transition ease-linear duration-1000 
                 ${open ? "left-0" : "left-[-100%]"}
                `}
              >
                <li>
                  <Link to="/" className="py-5 inline-block">
                    home
                  </Link>
                </li>
                <Dropdown />
              </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
