import React from 'react'
import eventImg from "../../assets/slider.jpg"
const data = [
    {
      number: "30",
      text: "Suptember",
      title: "Lorem ipsum dolor sit amet.",
      text1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ratione, quod blanditiis magni adipisci eos.",
      time: "8:50Am  11:20 Pm",
      location: "New York, USA",
    },
    {
      number: "20",
      text: "October",
      title: "Lorem ipsum dolor sit amet.",
      text1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ratione, quod blanditiis magni adipisci eos.",
      time: "8:50Am  11:20 Pm",
      location: "New York, USA",
    },
  ];

const Happening = () => {
  return (
    <div>
        {data.length > 0 ?
        <div>
            {data.map((elem,id) =>{
                return(
                    <div className='grid grid-cols-4'>
                        <div>
                            <p>{elem.number}</p>
                            <p>{elem.text}</p>
                        </div>
                        <div className='col-span-2'>
                            <p>{elem.title}</p>
                            <p>{elem.time} {elem.location}</p>
                            <p>{elem.text1}</p>
                            
                        </div>
                        <div>
                            <img src={eventImg} alt="img" />
                        </div>
                    </div>
                )
            })}
        </div> : null}
    </div>
  )
}

export default Happening