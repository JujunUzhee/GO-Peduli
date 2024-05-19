import React from "react";
import { programData } from "../../data/programData";

const CardProgram = () => {
  return (
    <>
      {programData.map((data, index) => {
        return (
          <div
            className=" relative w-[345px] h-[350px] rounded overflow-hidden shadow-lg cursor-pointer"
            key={index}
          >
            <img className="w-full h-56" src={data.image} alt="Placeholder" />
            <div className=" absolute px-6 py-4 bg-white rounded-tr-3xl top-1/2 ">
              <div className="font-bold text-xl mt-3">{data.title}</div>
              <p className="text-gray-700 text-base pt-7">{data.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardProgram;
