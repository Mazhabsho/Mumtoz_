import React from "react";

import img from "../../assets/our.png";
import imglogo from "../../assets/1.jpeg";
import Slider from "../../components/slider/Slider";

const arr = [
  {
    adress: "Address way",
    text: "1800 Abbot Kinney Blvd. Unit D & E Venice",
    contact: "Contact info",
    mobile: "obile: (+88) - 1990 - 6886 ",
    email: "Mail: contact@eduma.com",
    work: "Work timer",
    time1: "Monday - Friday: 09:00 - 20:00 ",
    time2: "Sunday & Saturday: 10:30 - 22:0",
  },
];

const partners = [
  {
    img: "img",
  },
];
const Contact = () => {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2272940/pexels-photo-2272940.jpeg?auto=compress&cs=tinysrgb&w=600')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundOrigin: "center",
          height: "40vh",
        }}
      >
        <div className=" w-[1150px] mx-auto pt-[10rem] pb-[5rem] ">
          <h2 className="text-5xl border-l-[3px] border-[#FFB606] font-roboto font-bold  pl-5">
            Contact
          </h2>
        </div>
      </div>

      <div className="w-[1150px] mx-auto my-[5rem]">
        {arr.length > 0 ? (
          <div className="grid grid-cols-3 gap-5 mb-[5rem]">
            {arr.map((elem, id) => {
              return (
                <>
                  <div className="border-2 text-center shadow-md hover:border-b-5 rounded-lg hover:border-b-red-500 cursor-pointer py-[15px] px-[15px]">
                    <div className="w-[60px] h-[60px] mx-auto  mt-[2rem]">
                      <img src={img} w-full h-full alt="" />
                    </div>

                    <div className="mb-10">
                      <h4 className="text-[21px] font-medium font-[Roboto] text-[#333] mt-[4px] mb-[15px]">
                        {elem.adress}
                      </h4>
                      <p className="text-[15px] text-[#606060] font-roboto mb-[3rem]">
                        {elem.text}
                      </p>
                    </div>
                  </div>

                  <div className="border-2 text-center shadow-md hover:border-b-5 rounded-lg hover:border-b-yellow-500 cursor-pointer py-[15px] px-[15px]">
                    <div className="w-[60px] h-[60px] mx-auto mt-[2rem]">
                      <img src={img} w-full h-full alt="" />
                    </div>
                    <div className="mb-10">
                      <h4 className="text-[21px] font-medium font-[Roboto] text-[#333] mt-[4px] mb-[15px]">
                        {elem.contact}
                      </h4>
                      <p className="text-[15px] text-[#606060] font-roboto">
                        {elem.mobile}
                      </p>
                      <p className="text-[15px] text-[#606060] font-roboto">
                        {elem.email}
                      </p>
                      <p className="text-[15px] text-[#606060] font-roboto">
                        {elem.email}
                      </p>
                    </div>
                  </div>

                  <div className="border-2 text-center shadow-md hover:border-b-5 rounded-lg hover:border-b-green-300 cursor-pointer py-[15px] px-[15px]">
                    <div className="w-[60px] h-[60px] mx-auto mt-[2rem]">
                      <img src={img} w-full h-full alt="" />
                    </div>
                    <div className="mb-10">
                      <h4 className="text-[21px] font-medium font-[Roboto] text-[#333] mt-[4px] mb-[15px]">
                        {elem.work}
                      </h4>
                      <p className="text-[15px] text-[#606060] font-roboto">
                        {elem.time1}
                      </p>
                      <p className="text-[15px] text-[#606060] font-roboto mb-[3rem]">
                        {elem.time2}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        ) : null}
        <h2 className="text-3xl tracking-wide font-roboto font-medium  text-center mb-10">
          Fill the form below so we can get to know you and <br /> your needs
          better.
        </h2>
        <div className="grid grid-cols-2 gap-5">
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199667.75605943718!2d68.48622026589126!3d38.56122137775473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5d16fd27bf89b%3A0xddf9378ddea1fd44!2sDushanbe%2C%20Tajikistan!5e0!3m2!1sen!2s!4v1698015055181!5m2!1sen!2s"
              width="570"
              height="355"
              style={{ border: 0 }}
              allowfullscreen="full "
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="shadow-md">
            <form action="">
              <div>
                <input
                  type="text"
                  className="bg-gray-300 pl-3 rounded w-full mb-3 py-2 border-none outline-none"
                  placeholder="Name*"
                />
              </div>
              <div>
                <input
                  type="email"
                  className="bg-gray-300 pl-3 rounded w-full my-3 py-2 border-none outline-none"
                  placeholder="Email*"
                />
              </div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                className="bg-gray-300 pl-3 rounded w-full my-3 py-2 border-none outline-none"
                placeholder="Message*"
              ></textarea>

              <div className="flex justify-center items-center mb-5">
                <button className="border-none outline-none hover:bg-yellow-300 teansition ease-linear duration-500 bg-yellow-500 py-[13px] px-5 text-[1rem] uppercase font-roboto tracking-wide font-medium rounded-[6px]">
                  Submit now
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* slider */}
        <Slider partners={partners} />
      </div>
    </>
  );
};

export default Contact;
