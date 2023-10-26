import React, { useState } from 'react'
import FormInput from '../../components/form/FormInput'

const MainForm = () => {
  const [action, setAction] = useState("Sign Up")
  return (
    <>
     {/* <div className='container mx-auto flex flex-col pb-[30px] bg-slate-100 justify-center items-center'>
    //       <h2 className='text-5xl font-serif font-bold py-5'>Mumtoz</h2>
    //     <div className='header'>
    //       <div className="text">{action}</div>
    //       <div className="underline w-[60px] h-[2px] bg-red-500"></div>
    //     </div>
    //     <div className="inputs">
    //       {action == "login" ? <></>: 
    //       <div className="input border-2 py-3">
    //         <input type="text" placeholder='name' />
    //       </div>
    //       }

    //       <div className="input border-2 py-3">
    //         <input type="email" placeholder='email' />
    //       </div>

    //       <div className="input border-2 py-3">
    //         <input type="password" placeholder='password' />
    //       </div>
    //     </div>
           
    //       <div className="forgot-password">Lost Password <span>Click here!</span></div>

    //     <div className="flex gap-10">
    //       <div onClick={()=> setAction("Sign Up")} className={action === "Sign Up" ? "submit text-red-500 border-2 bg-blue-300 px-3 py-1 cursor-pointer": "submit border-2 bg-green-300 border-black"}>Sing Up</div>
    //       <div onClick={() =>setAction("login")} className={action === "login" ? "submit text-red-500":"submit cursor-pointer border-2 border-black px-3 py-1"}>Login</div>
    //     </div>
     </div> */}

       <div className='w-[600px] mx-auto bg-white shadow-md my-[5rem] rounded'>
        <h1 className='text-8xl text-center font-bold font-serif'>M</h1>
        <h2 className='text-5xl text-center font-bold font-serif'>Mumtoz</h2>

         <form action="">
          <div>
            <input type="email" className=' py-3 pl-3 text-lg my-5 w-full bg-gray-500 border-none outline-none ' placeholder='email' />
          </div>
          <div>
            <input type="password" className=' py-3 pl-3 text-lg mb-5 w-full bg-gray-500 border-none outline-none '  placeholder='password' />
          </div>

          <div>
            <input type="email" className=' py-3 pl-3 text-lg w-full mb-5 bg-gray-500 border-none outline-none '  placeholder='email' />
            <input type="email" className=' py-3 pl-3 text-lg w-full mb-5 bg-gray-500 border-none outline-none '  placeholder='email' />
          </div>

          <div>
            <input type="text" className=' py-3 pl-3 text-lg w-full mb-5 bg-gray-500 border-none outline-none '  placeholder='name' />
            <input type="text" className=' py-3 pl-3 text-lg w-full mb-5 bg-gray-500 border-none outline-none '  placeholder='Surname' />
          </div>
          <div>
            <input type="text" className=' py-3 pl-3 text-lg w-full bg-gray-500 mb-5 border-none outline-none '  placeholder='city' />
            <input type="text" className=' py-3 pl-3 text-lg w-full bg-gray-500 mb-5 border-none outline-none '  placeholder='Country' />
          </div>
          <div>
          <input type="date" className=' py-3 pl-3 text-lg w-full bg-gray-500 border-none mb-5 outline-none ' />
            <input type="text" className=' py-3 pl-3 text-lg w-full bg-gray-500 border-none outline-none '  placeholder='Country' />
          </div>

           <div>
           <label for="cars">Malumot</label>
            <select id="cars" className=' py-3 pl-3 text-lg w-full bg-gray-500 border-none mb-5 outline-none '>
               <option value="volvo">maktab</option>
               <option value="saab">Doniwgoh</option>
               <option value="vw">College</option>
            </select>
           </div>

           <div>
           <label for="cars">Maqsadi omuziw</label>
            <select id="cars" className=' py-3 pl-3 text-lg w-full bg-gray-500 border-none mb-5 outline-none'>
               <option value="volvo">maktab</option>
               <option value="saab">Doniwgoh</option>
               <option value="vw">College</option>
            </select>
           </div>

           <div>
            <input type="text" placeholder='number tell' className=' py-3 pl-3 text-lg w-full bg-gray-500 border-none mb-5 outline-none' />
           </div>
         </form>
         <div className='flex justify-center '>
          <button className='py-2 px-5 text-lg mb-5 rounded font-bold border-none outline-none bg-green-500'>submit</button>
         </div>
       </div>
    </>
  )
}

export default MainForm