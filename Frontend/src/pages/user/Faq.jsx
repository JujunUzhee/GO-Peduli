import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CaraouseComponent from "../components/CaraouselComponent";
import { VisiMisi } from "../components/VisiMisi";
import PilarKami from "../components/PilarKami";
import Location from "../components/Location";
import TeamComponent from "../components/Team";
import Footer from "../components/FooterComponent";
import ButtonChatus from "../components/element/button/buttonChat";
import { faqData } from "../data/faqData";
import { FaChevronRight } from "react-icons/fa6";

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    if (openQuestion === index) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(index);
    }
  };

  return (
    <>
      <Navbar />
      <div className="mt-16 mx-8 md:mx-32 mb-60">
        <h2 className="text-4xl font-bold mb-4 text-center">FAQ</h2>
        <div className="flex flex-col mt-8 mx-8 md:mx-32 mb-16">
            <p className="text-md leading-loose text-center">Temukan Lebih Banyak Berita Melalui Artikel-artikel yang Terlampir di Bawah Ini,</p>
            <p className="text-md leading-loose text-center">untuk Mendapatkan Wawasan yang Lebih mendalam dan Lengkap tentang</p>
            <p className="text-md leading-loose text-center">Berbagai Topik yang Relevan</p>
        </div>
        <div className="grid grid-cols-1 gap-4 m-5">
          {faqData.map((faq, index) => (
            <div key={index} className="cursor-pointer border-b-2 py-4 bg-green-50 rounded-lg p-4 my-2" onClick={() => toggleQuestion(index)}>
              <div className="flex justify-between items-center m-3 ml-3">
                <h3 className="text-lg font-bold font-lg">{faq.title}</h3>
                <FaChevronRight className={`ml-auto ${openQuestion === index ? 'rotate-90' : ''}`}></FaChevronRight>
              </div>
              {openQuestion === index && <p className="ml-3 border-l-[20px] border-green-900 p-8 text-justify font-semibold">{faq.description}</p>}
            </div>
          ))}
        </div>
      </div>
      
      <ButtonChatus />
      <Footer />
    </>
  );
};

export default Faq;