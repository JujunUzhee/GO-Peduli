import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import CaraouseComponent from '../components/CaraouselComponent'
import DonasiComponent from '../components/DonasiComponent'
import CardInput from '../components/Cards/CardInput'
import Footer from '../components/FooterComponent'
import ButtonChatus from '../components/element/button/buttonChat'
import ScrollToTop from '../components/scrollTop'
import { dataDonasi } from '../data/donasiData'

const Donasiku = () => {
  const [lokasi, setLokasi] = useState("");
  const [kategori, setKategori] = useState("");
  const [filteredDonasi, setFilteredDonasi] = useState(dataDonasi);

  const handleSearch = () => {
    const filtered = dataDonasi.filter((donasi) => {
      const matchLokasi = lokasi === "" || donasi.location.toLowerCase().includes(lokasi.toLowerCase());
      const matchKategori = kategori === "" || donasi.kategori.toLowerCase().includes(kategori.toLowerCase());
      return matchLokasi && matchKategori;
    });
    setFilteredDonasi(filtered);
  };

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="relative h-[700px]" id='top'>
        <CaraouseComponent />
        <div className="absolute flex gap-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 z-10 mt-52">
          <CardInput setLokasi={setLokasi} setKategori={setKategori} onSearch={handleSearch} />
        </div>
      </div>
      <div className="mt-20 w-full">
        <DonasiComponent data={filteredDonasi} />
       
      </div>
      <ButtonChatus />
      <Footer />
    </>
  )
}

export default Donasiku