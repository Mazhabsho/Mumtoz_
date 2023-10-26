import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/Asso Logo.png";

const USER_REGIX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,23}$/

const Register = () => {
 const [values, setValues] = useState({
    name:"",
    email:"",
    password:""
 })

 function handleInput (event){
    const newObj = {...values, [event.target.name]: event.target.value}
    setValues(newObj)
 }
  return (
    <div className="bg-[#B5DAFC] ">
      <div className=" w-[600px] mx-auto bg-white py-[3rem] shadow-lg pt-[5rem]">
        <div className="w-[300px] mx-auto mb-10">
          <img src={logo} alt="logo" />
          <h2 className="text-3xl text-center my-2">Create a new account</h2>
        </div>
       
       <div className="w-[90%] mx-auto ">
        <form >
            <label for="name" className="">UserName:</label>
            <input type="text" onChange={handleInput} placeholder="Enter UserName"name="name" className="border-[0.5px] py-2 my-3 w-full" />
             
            <label for="password" className="">Password:</label>
            <input type="Password" onChange={handleInput} placeholder="Enter Password"name="password" className="border-[0.5px] py-2 my-3 w-full" />

           <div className="grid grid-cols-2 gap-5">
            <div>
            <label for="email" className="">Email:</label>
            <input type="email" onChange={handleInput} placeholder="Enter Email"name="email" className="border-[0.5px] py-2 my-3 w-full" />
            </div>
            <div>
            <label for="email" className="">Email (repeat):</label>
            <input type="email" onChange={handleInput} placeholder="Enter Email"name="email" className="border-[0.5px] py-2 my-3 w-full" />
            </div>
           </div>

           <div className="grid grid-cols-2 gap-5">
            <div>
            <label for="firstName" className="">FirstName:</label>
            <input type="text" onChange={handleInput} placeholder="Enter Name"name="firstName" className="border-[0.5px] py-2 my-3 w-full" />
            </div>
            <div>
            <label for="surname" className="">Surname:</label>
            <input type="text" onChange={handleInput} placeholder="Enter Surname"name="surname" className="border-[0.5px] py-2 my-3 w-full" />
            </div>
           </div>

           <div className="grid grid-cols-2 gap-5">
            <div>
            <label for="city" className="">City / town:</label>
            <input type="text" onChange={handleInput} placeholder="Enter City / town"name="city" className="border-[0.5px] py-2 my-3 w-full" />
            </div>
            <div>
            <label for="country" className="">Country:</label>
            <input type="text" onChange={handleInput} placeholder="Enter Country"name="country" className="border-[0.5px] py-2 my-3 w-full" />
            </div>
           </div>

           <div className="grid grid-cols-3 gap-5">
            <div>
            <label for="city" className="">Birthdata:</label>
            <input type="number" onChange={handleInput}  className="border-[0.5px] py-2 my-3 w-full" />
            </div>
            <div>
            <label for="data" className="">Month:</label>
            <input type="month" onChange={handleInput} name="data" className="border-[0.5px] py-2 my-3 w-full" />
            </div>
            <div>
            <label for="Year" className="">Year:</label>
            <input type="password" onChange={handleInput} name="Year" className="border-[0.5px] py-2 my-3 w-full" />
            </div>
           </div>

           <label for="country" className="">Education:</label>
            <input type="text" onChange={handleInput} placeholder="Enter Country"name="country" className="border-[0.5px] py-2 my-3 w-full" />

            <label for="country" className="">Job:</label>
            <input type="text" onChange={handleInput} placeholder="Enter Country"name="country" className="border-[0.5px] py-2 my-3 w-full" />

            <label for="country" className="">Purpose of learning:</label>
            <input type="text" onChange={handleInput} placeholder="Enter Country"name="country" className="border-[0.5px] py-2 my-3 w-full" />

            <label for="country" className="">Phone number:</label>
            <input type="text" onChange={handleInput} placeholder="+992 102 01 03 83" name="" className="border-[0.5px] py-2 my-3 w-full" />

            <div className="bg-gray-200">
                <p>Link to site policy agreement</p>
            </div>

            <div className="grid grid-cols-2 my-5">
                <div>
                    <button>Create a new account</button>
                </div>
                <div>
                    <button>Cencel</button>
                </div>
            </div>
        </form>
       </div>
      </div>
    </div>
  );
};

export default Register;
