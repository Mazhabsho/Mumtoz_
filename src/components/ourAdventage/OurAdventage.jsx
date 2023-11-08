import React from 'react'
import our from "../../assets/our.png"
const data = [
    {title:"программа обучение", text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, ratione?"},
    {title:"программа обучение", text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, ratione?"},
    {title:"программа обучение", text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, ratione?"},
]

const OurAdventage = () => {
  return (
    <div>
        <h2 className='text-[28px] pb-2 font-roboto font-bold'>Наша преимущество</h2>
        <p className='mb-10 text-base font-roboto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, assumenda?</p>
        {data.length > 0 ? 
        <div className='grid grid-cols-3 gap-5'>
            {data.map((elem,id)=>{
                return(
                    <div className='grid grid-cols-3 bg-[#F1F4F3]  py-5 px-5 rounded-lg'>
                        <div className='col-span-2'>
                            <h3 className='text-xl font-roboto pb-3'>{elem.title}</h3>
                            <p className='text-base font-roboto'>{elem.text}</p>
                        </div>
                        <div className='flex justify-end'>
                            <img src={our} className=' h-[100px]' alt="img" />
                        </div>
                    </div>
                )
            })}
        </div> : null}
    </div>
  )
}

export default OurAdventage