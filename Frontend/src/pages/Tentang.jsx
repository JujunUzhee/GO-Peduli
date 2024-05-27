import React from "react";
import Navbar from "../components/Navbar";
import CaraouseComponent from "../components/CaraouselComponent";
import { VisiMisi } from "../components/VisiMisi";

import PilarKami from "../components/PilarKami";
import Location from "../components/Location";
import TeamComponent from "../components/Team";
import Footer from "../components/FooterComponent";
import ButtonChatus from "../components/element/button/buttonChat";




const Tentang = () => {
  return (
    <>
      <Navbar />
      <CaraouseComponent />
      <div className="flex flex-col md:flex-row mt-24 mx-8 md:mx-32 gap-12 mb-16">
      <p className="text-md leading-loose text-justify">
        <span className="font-bold text-xl">Go Peduli</span> memfasilitasi donasi pakaian secara cepat, akurat, dan
        terpercaya. Dengan antarmuka yang ramah pengguna, kami memungkinkan
        individu dan organisasi untuk menyumbangkan pakaian kepada yang
        membutuhkan dengan mudah. Tujuannya adalah memperkuat semangat
        kebaikan dan keterlibatan sosial, serta memberikan solusi praktis bagi
        mereka yang ingin membantu tanpa harus mencari penerima donasi secara
        langsung. Dengan Go Charity, setiap orang dapat berkontribusi pada
        upaya kemanusiaan, menciptakan dampak positif dalam komunitas lokal
        dan lebih luas.
      </p>
      <img src="/image/about.png" alt="" className="w-full h-[350px] object-cover" />
    </div>
      <div className="flex mt-36 mx-32 gap-12 mb-16">
        <VisiMisi />
      </div>
      <div className="w-full mt-36 ">
        <PilarKami />
      </div>
      <Location />
      <div className="w-full mt-2 mb-24">
       <TeamComponent />
      </div>
      <ButtonChatus/>
      <Footer />
    </>
  );
};

export default Tentang;
