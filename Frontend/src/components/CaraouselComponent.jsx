import React, { useState, useEffect } from "react";
import ButtonSlide from "./element/button/buttonSlide";

const slides = [
  { id: "slide1", src: "/image/caraousel1.png", align: "right" },
  { id: "slide2", src: "/image/caraousel2.png", align: "left" },
  { id: "slide3", src: "/image/caraousel3.png", align: "center" },
];

export default function CaraouseComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (newIndex) => {
    setCurrentSlide(newIndex);
  };

  return (
    <div className="carousel w-full">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          id={slide.id}
          className={`carousel-item relative w-full ${
            index === currentSlide ? "block" : "hidden"
          }`}
        >
          <img src={slide.src} className="w-full h-[400px] md:h-[550px] object-cover" />
          {slide.align !== "center" && (
            <div
              className={`absolute top-0 ${slide.align}-0 w-full md:w-1/2 h-[400px] md:h-[550px] flex flex-col justify-center items-center bg-SemiGreen bg-opacity-60 p-4`}
            >
              <div className="text-DarkGreen text-center md:text-left p-4 mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold uppercase">
                  {slide.align === "right"
                    ? "Donasikan pakaian lebih mudah bersama Go peduli"
                    : "Satu gerakan untuk kebaikan"}
                </h2>
                <button className="text-white bg-Green hover:bg-DarkGreen rounded-3xl px-4 py-2 mt-4 font-bold">
                  {slide.align === "right"
                    ? "Cepat, tepat, dan terpercaya"
                    : "Bantu mereka sekarang"}
                </button>
              </div>
            </div>
          )}
          {slide.align === "center" && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="text-center text-white p-4">
                <h2 className="text-2xl md:text-3xl font-bold my-6">
                  Kenal <span className="text-Green">Kami</span> Lebih{" "}
                  <span className="text-Green">jauh</span>
                </h2>
                <p className="text-sm md:text-base">
                  Go Charity merupakan platform untuk mempermudah kegiatan
                  donasi pakaian secara cepat, tepat, dan terpercaya
                </p>
              </div>
            </div>
          )}
          <div className="absolute flex justify-between items-center left-5 right-5 top-1/2 transform -translate-y-1/2">
            <ButtonSlide
              left={`#${slides[(index - 1 + slides.length) % slides.length].id}`}
              right={`#${slides[(index + 1) % slides.length].id}`}
              onClickLeft={() =>
                handleSlideChange((index - 1 + slides.length) % slides.length)
              }
              onClickRight={() =>
                handleSlideChange((index + 1) % slides.length)
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
}
