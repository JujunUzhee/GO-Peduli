import ButtonSlide from "./element/button/buttonSlide";

export default function CaraouseComponent() {
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="/image/caraousel1.png" className="w-full h-[550px]" />
          <div className="absolute top-0 right-0 w-1/2 h-[550px] flex flex-col justify-center items-center bg-SemiGreen bg-opacity-60">
            <div className="text-DarkGreen p-4 mx-auto ">
              <h2 className="text-3xl font-bold uppercase">
                donasikan pakaian <br /> lebih mudah <br /> bersama Go peduli
              </h2>
              <button className=" text-white bg-Green hover:bg-DarkGreen rounded-3xl px-4 py-2 mt-4 font-bold">
                Cepat, tepat, dan terpercaya
              </button>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <ButtonSlide left="#slide3" right="#slide2" />
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="/image/caraousel2.png" className="w-full h-[550px]" />
          <div className="absolute top-0 left-0 w-1/2 h-[550px] flex flex-col justify-center items-center bg-SemiGreen bg-opacity-60">
            <div className="text-black p-4 mx-auto ">
              <h2 className="text-4xl font-bold  uppercase">
                <br /> <span className="text-DarkGreen ">satu</span> gerakan{" "}
                <br /> untuk <span className="text-DarkGreen">kebaikan</span>
              </h2>
              <button className=" text-white bg-Green hover:bg-DarkGreen rounded-3xl px-4 py-2 mt-4 font-bold">
                Bantu mereka sekarang
              </button>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <ButtonSlide left="#slide1" right="#slide3" />
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="/image/caraousel3.png"
            className="w-full h-[550px] object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="text-center text-white mb-32">
              <h2 className=" text-3xl font-bold my-6">
                Kenal <span className="text-Green">Kami</span> Lebih{" "}
                <span className="text-Green">jauh</span>
              </h2>
              <p className="text-base">
                Go Charity merupakan platfrom untuk mempermudah <br /> kegiatan
                donasi pakaian secara cepat, tepat, dan terpercaya
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between items-center left-5 right-5 top-1/2">
            <ButtonSlide left="#slide2" right="#slide1" />
          </div>
        </div>
      </div>
    </>
  );
}
