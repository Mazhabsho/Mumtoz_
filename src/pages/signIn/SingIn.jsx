import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import logo from "../../assets/Asso Logo.png"
import logoIcon from "../../assets/logo.svg"

const SignIn = () => {
  return (
    <div className='bg-[#B5DAFC] h-[100vh]'>
        <div className="w-[500px] mx-auto bg-white shadow-lg pt-[5rem] h-[100vh] my-auto">
            <div className='w-[200px] mx-auto mb-10'>
                <img src={logo} alt="" />
            </div>
            <form action="">
              <div className='w-[90%] mx-auto border-[0.5px] border-yellow-400 my-5 bg-white'>
              <PersonIcon style={{paddingLeft:"10px",color:"#adadad", fontSize:"40px",paddingBottom:"7px"}}/>
              <input type="text" className='w-[90%] border-none outline-none py-3 pl-[1rem] text-xl' placeholder='Email' />
              </div>
               <div className='w-[90%] mx-auto border-[0.5px] border-yellow-400 my-5 bg-white'>
               <KeyIcon style={{paddingLeft:"10px", color:"#adadad", fontSize:"40px",paddingBottom:"7px"}}/>
              <input type="password" className='w-[90%] border-none outline-none py-3 pl-[1rem] text-xl' placeholder='Password' />
               </div>
               <div className='w-[90%] mx-auto'>
               <button className='w-full text-xl text-white bg-[#1A9EDA] py-3'>log in</button>
               </div>
            </form>

            <div className='w-[90%] mx-auto h-[80px] bg-slate-300 my-5 flex items-center gap-1 justify-center'>
                <p className='text-lg font-serif py-3'>Is this your first time here? Click here  </p>
                <img src={logoIcon}  className='w-[25px] h-[25px] ' alt="show down icon"/>
            </div>

            <div className='w-[90%] mx-auto flex items-center justify-center'>
                <button className='w-full text-white bg-yellow-500 py-3 text-xl'>create a account</button>
            </div>
        </div>
    </div>
  )
}

export default SignIn;