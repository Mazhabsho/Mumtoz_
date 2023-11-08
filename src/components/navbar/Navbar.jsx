import React from "react";
import logo from "../../assets/Asso Logo.png";

const Navbar = () => {
  return (
    <nav className="bg-sky-500">
      <div className="container px-4 flex flex-wrap mx-auto">
        {/* logo  brand*/}
        <a href="#">
          {" "}
          <img src={logo} className="inline-flex p-2 w-[150px] h-[50px]" alt="" />{" "}
        </a>

        {/* toggle button */}
          <button className="lg:hidden inline-flex justify-center items-center border rounded-md outline-none left-auto focus:outline-none h-10 w-10">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
          </button>
         {/* menu */}

         <div  className="w-full lg:inline-flex lg:w-auto">
            <ul className="flex flex-col lg:flex-row lg:w-auto mt-2 lg:mt-0 group">
                <li><a href="#" className="flex px-4 py-2 font-medium text-white">Dahsbord</a></li>

                <li className="relative " x><button href="#" className="flex px-4 py-2 font-medium text-white">Dropdown</button>
                  <div className="lg:absolute hover-group:active bg-red-500 right-0 rounded-md hover:group:avtive">
                    <ul className="space-y-2 lg:w-48">
                        <li><a href="#" className="flex p-2 font-medium">Salom mardum</a></li>
                        <li><a href="#">Salom mardum</a></li>
                        <li><a href="#">Salom mardum</a></li>
                        <li><a href="#">Salom mardum</a></li>
                    </ul>
                  </div>
                </li>

                <li><a href="#" className="flex px-4 py-2 font-medium text-white">Dahsbord</a></li>
                <li><a href="#" className="flex px-4 py-2 font-medium text-white">Dahsbord</a></li>
                <li><a href="#" className="flex px-4 py-2 font-medium text-white">Dahsbord</a></li>
            </ul>
         </div>
      </div>
    </nav>
  );
};

export default Navbar;
