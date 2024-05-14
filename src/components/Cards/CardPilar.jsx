import React from "react";
import { RiFlowerFill } from "react-icons/ri";
import { pilarData } from "../../data/pilarData";

const CardPilar = () => {
  return (
    <>
      {pilarData.map((data, index) => {
        return (
          <div
            className={`max-w-full w-[264px] h-[250px] rounded-lg shadow-lg px-4 ${index >= 3 ? 'col-start-2' : '' }`}
            key={index}
          >
            <RiFlowerFill className="mx-auto my-6 text-2xl text-DarkGreen" />
            <div className="font-bold text-xl text-center">{data.title}</div>
            <p className="text-base text-center mt-4">{data.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default CardPilar;
