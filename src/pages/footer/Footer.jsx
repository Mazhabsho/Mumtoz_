import React from 'react'
const arr = [
  {
    title:"Mumtoz",
    text2:"+992200553333",
    text3:"5th Evenue New York apartment 5",
    text4:"sbachtovar@gmail.com",
    text5:"social icons"
  },
  {
    title: "Company",
    text2:"Home",
    text3:"Contact",
    text4:"Service",
    text5:"Blog"
  },
  {
    title: "Company",
    text2:"Home",
    text3:"Contact",
    text4:"Service",
    text5:"Blog"
  },
  {
    title: "Company",
    text2:"Home",
    text3:"Contact",
    text4:"Service",
    text5:"Blog"
  },
  {
    title: "Company",
    text2:"Home",
    text3:"Contact",
    text4:"Service",
    text5:"Blog"
  },
  
 
]
const Footer = () => {
  return (
    <div className="bg-[#111111]">
<div className='w-[1150px] mx-auto'>
     {arr.length > 0 ? 
     <div className='grid grid-cols-5'>
      {arr.map((elem,id)=>{
        return(
          
            <div>
              <h3 className='text-3xl font-serif py-5 font-bold text-white'>{elem.title}</h3>
               <p className='text-lg font-serif text-[#adadad] '>{elem.text2}</p>
               <p className='text-lg font-serif text-[#adadad] '>{elem.text3}</p>
               <p className='text-lg font-serif text-[#adadad] '>{elem.text4}</p>
               <p className='text-lg font-serif text-[#adadad] '>{elem.text5}</p>
            </div>
          
        )
      })}
     </div>: null}
    </div>
    </div>
    
  )
}

export default Footer