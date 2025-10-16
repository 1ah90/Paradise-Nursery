import React, { useState } from 'react'
import { AboutUs } from '../AboutUs'
import { TitlePage } from '../TitlePage'
import { Toast } from './Toast'
const LandingPage = ({value , setValue}) => {
  const isOpen = value
  const setIsOpen = setValue
  const handelProductPage = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
    <div className='z-50 text-2xl text-white md:flex-row  flex flex-col justify-between  '>
      {/* main box  */}
      <div className='text-center m-auto space-y-10 flex-1 '>
        <TitlePage/>

        <button onClick={handelProductPage} className=' block m-auto py-2 px-3 text-[16px] cursor-pointer  bg-green-400 hover:bg-green-600 transition delay-75 rounded-md shadow-sm '>
          Get Started
        </button>
      </div>
      {/* about our Page  */}
      <AboutUs/>
      </div>
    </div>

  )
}


export default LandingPage