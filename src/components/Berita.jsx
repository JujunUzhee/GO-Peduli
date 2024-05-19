import React from 'react'
import CardBerita from './Cards/CardBerita'

const BeritaComponent = () => {
  return (
    <>
        <div className='w-full'>
        <div className="flex justify-center items-center ">
        <h2 className=" my-4 text-3xl text-DarkGreen font-bold">
         Berita Terbaru Kami
        </h2>
      </div>
      <div className='flex justify-center pb-20 gap-4 m-6'>
      <CardBerita />
      <CardBerita />
      <CardBerita />
      <CardBerita />
      </div>
  
        </div>
    </>
  )
}

export default BeritaComponent