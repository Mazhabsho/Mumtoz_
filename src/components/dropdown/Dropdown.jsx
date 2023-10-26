import React, { useState } from "react";
import { Link } from "react-router-dom";

// const dropdowns = [
//   {
//     id: 1,
//     title: "salom",
//     path: "/marketing",
//     cname: "submenu Item",
//   },
//   {
//     id: 2,
//     title: "Good job",
//     path: "/service",
//     cname: "submenu Item",
//   },
//   {
//     id: 3,
//     title: "Hello",
//     cname: "submenu Item",
//   },
// ];

const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  const links = [
    {
      name:"men",
      submenu: true,
      sublink:[
        {
          head: " topWear",
          mysublink:[
            { name: "T-shirt", link: "/" },
            { name: " Casual", link: "/" },
            { name: "jeans", link: "/" },
            { name: "jeckeat", link: "/" },
            { name: "T-shirt", link: "/" },
            { name: "T-shirt", link: "/" },
          ],
        },
      ],
    },
    { name: "courses" },
    { name: "blog" },
    { name: "contact" },
  ];
  return (
    <>
      {/* <div>
      <ul
        onClick={() => setDropdown(!dropdown)}
        className="service submenu clicked w-[10rem] absolute"
      >
        {dropdowns.map((elem, id) => {
          return (
            <li key={id} className="bg-green-300">
              <Link onClick={() => setDropdown(false)} to={elem.path}>
                {elem.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div> */}
      {links.map((elem,i) => {
        return (
          <div>
            <div className="px-3 text-left md:cursor-pointer">
              <Link to="blog"><h1 className="py-3">{elem.name}</h1></Link>

               {/* {sublinks && <div>
                 <div>
                    <div>
                         {sublink.map((elem, id) =>{
                            return(
                                <div>
                                    <h2>{elem.head}</h2>
                                    {elem.sublink((slink,id)=>{
                                        return(
                                            <li>
                                                {slink.name}
                                            </li>
                                        )
                                    })}
                                </div>
                            )
                        })} 
                    </div>
                 </div>
                </div>} */}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Dropdown;
