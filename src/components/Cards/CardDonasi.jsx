import React from "react";
import { dataDonasi } from "../../data/donasiData";

const DonasiCard = ({ count }) => {
  return (
    <>
      {dataDonasi.slice(0, count).map((donasi, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
          <img src={donasi.image} alt="" className="w-full  h-80" />
          <div className="font-bold text-xl mb-2 text-center mt-4">
            {donasi.title}
          </div>
          {donasi.details.map((item, idx) => ( 
            <div
              key={idx}
              className="px-6 py-4 rounded-tr-3xl flex items-center"
            >
              <span className="mr-3 text-2xl mt-1">{item.icon}</span>
              <div>
                <p className="text-gray-700 text-sm">{item.text}</p>
              </div>
            </div>
          ))}
          <div className="px-6 py-4 rounded-tr-3xl flex items-center">
            <button className="w-full h-[56px] bg-Green items-center rounded-xl shadow-lg text-white font-bold text-xl">
              Donasi Sekarang
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default DonasiCard;
