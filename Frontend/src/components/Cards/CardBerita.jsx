import React from "react";
import { beritaData } from "../../data/beritaData";
import ButtonRead from "../element/button/buttonRead";

const CardBerita = ({ limit }) => {



  return (
    <>
      {beritaData.slice(0, limit).map((data) => (
        <div className="max-w-sm rounded overflow-hidden shadow-lg" key={data.id}>
          <img
            className="w-full h-44"
            src={data.img}
            alt="Placeholder"
          />
          <div className="px-6 py-4 bg-gray-50 rounded-tr-3xl">
            <div className="flex justify-between">
              <div className=" flex w-[102px] h-[32px] bg-GreenLight text-Green justify-center items-center rounded-xl">
                <p className="text-center">News</p>
              </div>
              <p className="text-sm font-semibold ml-4 mt-2">{data.date}</p>
            </div>
            <div className="font-bold text-md mb-2 mt-4">{data.title}</div>
            <p className=" text-sm">{data.descripsi}</p>
            <ButtonRead id={data.id}/>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardBerita;
