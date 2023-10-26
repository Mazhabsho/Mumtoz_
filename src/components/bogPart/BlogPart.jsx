import React from 'react'
import img from "../../assets/slider.jpg"
import imgLogo from "../../assets/our.png"
import imgAdd from "../../assets/img.jpg"
import { Link } from 'react-router-dom'
const arr =[
  {
    text1:"20",
    text2:"September",
    text3:"LMS wordpress plugen",
    text4:"pased by",
    text5:"Keny home",
    text6:"conegories",
    text7:"blog",
    text8:"comments",
    text9:"21",
    text10:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestias deserunt rerum in odit, eius magnam illum facere blanditiis placeat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestias deserunt rerum in odit, eius magnam illum facere blanditiis placeat!",
  }
]
const BlogPart = () => {
  return (
    <>
    <div className='grid grid-cols-7 gap-3 my-5'>
        <div className='col-span-5'>
          <div className='h-[300px]'>
            <img src={img} className='w-full h-full' alt="" />
          </div>
           {
            arr.length > 0 ?
             <div>
              {arr.map((elem,id)=>{
                return(
                  <>
                       <div className='grid grid-cols-5'>
                         <div className='col-span-1 border-r-2 border-green-500'>
                          <p className='text-[5rem] text-yellow-500'>{elem.text1}</p>
                          <p className='text-lg uppercase'>{elem.text2}</p>
                         </div>

                         <div className='col-span-3'>
                          <h1 className='text-5xl mt-9 hover:text-yellow-500 transition ease-linear duration-500 cursor-pointer mb-3 font-semi-bold font-serif'>{elem.text3}</h1>
                          <div className='grid grid-cols-3'>
                            <div className='border-r-2 border-green-500'>
                              <p className='text-[#adadad] my-1 text-sm font-serif'>{elem.text4}</p>
                              <p className='text-sm font-serif uppercase'>{elem.text5}</p>
                            </div>
                            <div className='border-r-2 border-green-500'>
                            <p className='text-[#adadad] my-1 text-sm font-serif'>{elem.text6}</p>
                            <p className='text-sm font-serif uppercase'>{elem.text7}</p>
                            </div>
                            <div>
                            <p className='text-[#adadad] text-sm font-serif'>{elem.text8}</p>
                            <p className='text-xl font-serif'>{elem.text9}</p>
                            </div>
                          </div>
                         </div>
                       </div>

                       <div>
                        <p className='my-2 text-lg font-serif'>{elem.text10}</p>
                        <Link to="/blogdetail" className='py-2 px-5 bg-yellow-500 uppercase font-bld my-3'>read more</Link>
                       </div>
                  </>
                )
              })}
             </div> : null
           }
        </div>

        <div className='col-span-2'>
          <h2 className='text-center text-xl uppercase mt-[-5.4px] mb-5'>Popular Courses</h2>
          <div className='grid grid-flow-row mb-5'>
            <div className='grid grid-cols-2 gap-5 mb-5'>
              <div>
                <img src={imgLogo} className='w-full h-full' alt="ImgCourse" />
              </div>
               <div>
                <p className='text-lg font-serif hover:text-yellow-500 transition ease-linear duration-500 cursor-pointer'>Introduction LearnPress – LMS plugin</p>
                <p className='text-lg font-serif text-gren-500'>free</p>
               </div>
            </div>

            <div className='grid grid-cols-2 gap-5'>
              <div>
                <img src={imgLogo} className='w-full h-full' alt="ImgCourse" />
              </div>
               <div>
                <p className='text-lg font-serif hover:text-yellow-500 transition ease-linear duration-500 cursor-pointer'>Introduction LearnPress – LMS plugin</p>
                <p className='text-lg font-serif text-gren-500'>free</p>
               </div>
            </div>
          </div>

           <div>
            <img src={imgAdd} className='w-full h-full' alt="imgAdd" />
           </div>
        </div>
    </div>
    </>
  )
}

export default BlogPart;
