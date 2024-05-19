import React from 'react'
import CardPublikasi from './Cards/CardPublikasi'
import CardInput  from './Cards/CardInput'
import ButtonMore from '../components/element/button/buttonMore'
import ButtonChatUs from '../components/element/button/buttonChatUs'
import Footer from './Footer'



const PublikasiComponent = () => { 
  return (
    
    <>
       <div className='w-full'>
  <div className="flex justify-center items-center">
    <h2 className="my-4 text-3xl text-black font-bold"> Berita Kami</h2>
  </div>
  <p className='text-center mx-4'>Temukan Lebih Banyak Berita Melalui Artikel-artikel yang Terlampir di Bawah Ini, untuk Mendapatkan Wawasan yang Lebih Mendalam dan Lengkap tentang Berbagai Topik yang Relevan.</p>
  
  <div className="h-[300px] w-full  ml-32 mt-12">
  <CardInput />
  </div>
  
    
  <h2 className="my-4 text-3xl text-black font-bold pl-5"> Berita Terbaru</h2>
  <div className='flex justify-star pb-20 gap-4 m-6'>
    <CardPublikasi />
    
  </div>

  <h2 className="my-4 text-3xl text-black font-bold pl-5"> Publikasi Terbaru</h2>
  <div className='flex justify-center pb-20 gap-4 m-6'>
    <CardPublikasi />
    <CardPublikasi />
    <CardPublikasi />
    <CardPublikasi />
  </div>

  <h2 className="my-4 text-3xl text-black font-bold pl-20"> Berita Lainnya</h2>
  <div className='flex justify-center pb-20 gap-4 m-6'>
    <CardPublikasi />
    <CardPublikasi />
    <CardPublikasi />
  </div>    

  <div className='flex justify-center pb-20 gap-4 m-6'>
    <CardPublikasi />
    <CardPublikasi />
    <CardPublikasi />
  </div>   

  <div className='flex justify-center pb-20 gap-4 m-6'>
    <ButtonMore />
    </div> 

    <div className='flex justify-center pb-20 gap-4 m-6'>
    <ButtonChatUs />
    </div> 
    <Footer/>
</div>

    </>
  )
}

export default PublikasiComponent