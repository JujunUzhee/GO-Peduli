import React from 'react'
import CardDonasi from './Cards/CardDonasi'
import Selengkapnya from './element/link/selengkapnya'


const DonasiComponent = ({count}) => {
  return (
    <>

      <div className="flex justify-center items-center ">
        <h2 className=" my-4 text-3xl text-DarkGreen font-bold">
         Salurkan Donasimu Disini
        </h2>
      </div>
      <div className="flex justify-center items-center mt-6">
        <div className="grid grid-cols-3 gap-12 ">
          <CardDonasi count={count}/>
        </div>
      </div>
      

  </>
  )
}

export default DonasiComponent