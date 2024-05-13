import React from 'react'
import Navbar from '../components/Navbar'
import CaraouseComponent from '../components/CaraouselComponent'
import DonasiComponent from '../components/DonasiComponent'
import Footer from '../components/Footer'
import CardInput from '../components/Cards/CardInput'
import ButtonMore from '../components/element/button/buttonMore'

const Donasiku = () => {
  return (
    <>
    <Navbar/>
    <div className="relative h-[700px] " id='top'>
        <CaraouseComponent />
        <div className="absolute flex gap-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-4  z-10 mt-52">
          <CardInput />
        </div>
      </div>
    <div className=" mt-20 w-full ">
    <DonasiComponent/>
    <div className='flex items-center justify-center mt-20 mb-44'>
      <ButtonMore />
    </div>
    </div>

    <Footer />
    </>
  )
}

export default Donasiku