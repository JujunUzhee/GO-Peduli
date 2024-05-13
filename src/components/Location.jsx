import React from "react";
import Cards from "./Cards/Cards";

const Location = () => {
  const cardStyles = [
    "bg-white text-black  ml-5 ",
  
  ];
  return (
    <div className="w-full mt-32 ">
      <div className="flex justify-center items-center ">
        <h2 className=" my-4 text-3xl text-DarkGreen font-bold">Lokasi Kami</h2>
      </div>
      <div className="flex gap-10 mb-40">
        <img src="image/Map.png" alt="" className="ml-20 h-[330px] mt-12" />
        <div className="flex flex-col gap-4">
          <Cards title="Provinsi" description="2"  cardClassName={cardStyles}/>
          <Cards title="Kabupaten" description="33" cardClassName={cardStyles} />
          <Cards title="Desa" description="140" cardClassName={cardStyles}/>
        </div>
      </div>
    </div>
  );
};

export default Location;
