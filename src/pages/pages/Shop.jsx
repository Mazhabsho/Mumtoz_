import React, { useState } from 'react'
import img from "../../assets/Untitled.jpg"
const Shop = () => {
    const [open,setOpen] = useState(false)
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
          marginBottom: "5rem",
        }}
      >
        <div className=" w-[1150px] mx-auto pt-[10rem]">
          <h2 className="text-5xl border-l-[3px] border-[#FFB606] text-white font-roboto font-bold  pl-5">
            Shop
          </h2>
        </div>
      </div>

    <div className='w-[1150px] mx-auto mb-[5rem]'>
           <div className='grid grid-cols-4 gap-5'>
           <div className='bg-white shadow-md'>
                <div className='mx-auto bg-[#f0f0f0] py-5 mb-3'>
                   <img src={img} className='h-[240px] w-[200px] mx-auto' alt="imgBook" />
                </div>
                <h3 className='text-lg font-medium px-3 font-roboto text-[#333]'>A Beginner Crash Course Guide</h3>
                <p className='px-3 font-roboto text-lg'>9$</p>
                <p className='text-sm font-roboto text-[#333] px-3 '>Lorem ipsum dolor sit amet, ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='flex justify-center items-center my-3'>
                <button className='font-roboto border-none outline-none hover:text-white text-base hover:bg-yellow-700 transition ease-linear duration-500 bg-yellow-500 py-2  px-5 uppercase'>read more</button>
                </div>
            </div>
            <div className='bg-white shadow-md'>
                <div className='mx-auto bg-[#f0f0f0] py-5 mb-3'>
                   <img src={img} className='h-[240px] w-[200px] mx-auto' alt="imgBook" />
                </div>
                <h3 className='text-lg font-medium px-3 font-roboto text-[#333]'>A Beginner Crash Course Guide</h3>
                <p className='px-3 font-roboto text-lg'>9$</p>
                <p className='text-sm font-roboto text-[#333] px-3 '>Lorem ipsum dolor sit amet, ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='flex justify-center items-center my-3'>
                <button className='font-roboto text-base border-none outline-none hover:text-white hover:bg-yellow-700 transition ease-linear duration-500 bg-yellow-500 py-2  px-5 uppercase'>read more</button>
                </div>
            </div>

            <div className='bg-white shadow-md'>
                <div className='mx-auto bg-[#f0f0f0] py-5 mb-3'>
                   <img src={img} className='h-[240px] w-[200px] mx-auto' alt="imgBook" />
                </div>
                <h3 className='text-lg font-medium px-3 font-roboto text-[#333]'>A Beginner Crash Course Guide</h3>
                <p className='px-3 font-roboto text-lg'>9$</p>
                <p className='text-sm font-roboto text-[#333] px-3 '>Lorem ipsum dolor sit amet, ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='flex justify-center items-center my-3'>
                <button className='font-roboto text-base border-none outline-none hover:text-white hover:bg-yellow-700 transition ease-linear duration-500 bg-yellow-500 py-2  px-5 uppercase'>read more</button>
                </div>
            </div>

            <div className='bg-white shadow-md'>
                <div className='mx-auto bg-[#f0f0f0] py-5 mb-3'>
                   <img src={img} className='h-[240px] w-[200px] mx-auto' alt="imgBook" />
                </div>
                <h3 className='text-lg font-medium px-3 font-roboto text-[#333]'>A Beginner Crash Course Guide</h3>
                <p className='px-3 font-roboto text-lg'>9$</p>
                <p className='text-sm font-roboto text-[#333] px-3 '>Lorem ipsum dolor sit amet, ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='flex justify-center items-center my-3'>
                <button className='font-roboto text-base border-none outline-none hover:text-white hover:bg-yellow-700 transition ease-linear duration-500 bg-yellow-500 py-2  px-5 uppercase'>read more</button>
                </div>
            </div>
           </div>

           <div>

           </div>
        
    </div>
    </>
  )
}

export default Shop