import React from 'react'
import SliderMain from '../../components/sliderMain/SliderMain'
import Statistic from '../../components/statistic/Statistic'
import OurGoal from '../../components/ourGoal/OurGoal'

import EventMain from '../../components/events/EventMain'
import OurAdventage from '../../components/ourAdventage/OurAdventage'
import MainCourses from '../../components/courses/MainCourses'

const Home = () => {
  return (
    <>
    <div className='my-10'>
    <SliderMain/>
    </div>
    <div className='w-[1150px] bg-green-500 mx-auto'>
   
    <div className='my-[5rem]'>
    <Statistic/>
    </div>
     <div className='my-[5rem]'>
     <OurGoal/>
     </div>
     <div className='my-[5rem]'>
     <OurAdventage/>
     </div>

     <div className='my-[5rem]'>
     <MainCourses/>
     </div>
     
     <div className='my-[5rem]'>
     <EventMain/>
     </div>
    </div>
    </>
  )
}

export default Home