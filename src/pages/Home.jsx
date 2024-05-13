import React from "react";
import Navbar from "../components/Navbar";
import Program from "../components/Program";
import CaraouseComponent from "../components/CaraouselComponent";
import DonasiComponent from "../components/DonasiComponent";
import Location from "../components/Location";
import Berita from "../components/Berita";
import Footer from "../components/Footer";
import Cards from "../components/Cards/Cards";
import Selengkapnya from "../components/element/link/selengkapnya";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="relative h-[700px] ">
        <CaraouseComponent />
        <div className="absolute flex gap-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-4  z-10 mt-52">
          <Cards title="Program Donasi" description="32" />
          <Cards title="Donatur Kami" description="150" />
          <Cards title="Mitra Kami" description="10" />
        </div>
      </div>

      <Program />
      <div className=" mt-32 w-full ">
        <DonasiComponent count={3}/>
        <div className="mt-10 flex justify-end mr-20">
        <Selengkapnya to="/donasiku"/>
        </div>
      </div>
      <Location />
      <Berita />
      <Footer />
    </>
  );
};

export default Home;
