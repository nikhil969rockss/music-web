import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import { ThreeDCardDemo } from '@/components/ui/CardsForCourses'
import { coursesData } from '@/utils/constants'
import React from 'react'

const page = () => {
  return (
    <div className='w-full min-screen'>
      <BackgroundBeamsWithCollision>
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-5xl md:text-7xl lg:text-9xl font-sans mb-[-5rem] relative z-20 font-bold tracking-tight leading-none">our courses</h2>
        <div className='max-w-[1200px] relative px-4 w-full mx-auto flex flex-nowrap justify-center   '>
       
          <div className='w-full h-full flex overflow-x-auto gap-5 flex-1 md:mt-8 mt-5'>
            {coursesData.map(course => (
              <ThreeDCardDemo key={course.id} {...course} />
           ) )}
          </div>

        </div>
      </BackgroundBeamsWithCollision>
      </div>
  )
}

export default page