import React from 'react'
import SliderMain from '../../components/sliderMain/SliderMain'
import Statistic from '../../components/statistic/Statistic'
import OurGoal from '../../components/ourGoal/OurGoal'

import EventMain from '../../components/events/EventMain'
import OurAdventage from '../../components/ourAdventage/OurAdventage'
import MainCourses from '../../components/courses/MainCourses'
import Proccess from '../../components/process/Proccess'

const Home = () => {
  return (
    <>
  
    <SliderMain/>
  

    <div className='w-[1150px] mx-auto'>
   
    <div className='my-[5rem]'>
    <Statistic/>
    </div>
     <div className='my-[5rem]'>
     <OurGoal/>
     </div>
     <div className='my-[5rem]'>
     <MainCourses/>
     </div>
     <div className='mt-[5rem]'>
     <OurAdventage/>
     </div>
     <div className=''>
     <Proccess/>
     </div>
     <div className='mb-[5rem]'>
     <EventMain/>
     </div>
    </div>
    </>
  )
}

export default Home