import React from "react";
import CardProgram from "./Cards/CardProgram";
import { Link } from "react-router-dom";


const Program = () => {
  return (
    <>
      <div className=" mt-24 w-full">
        <div className="flex justify-center items-center ">
          <h2 className=" my-4 text-3xl text-DarkGreen font-bold">
            Publikasi Program Kami
          </h2>
        </div>
        <div className="flex justify-center items-center mt-6">
          <div className="grid grid-cols-3 gap-8 ">
            <CardProgram/>
          </div>
         
        </div>
        <div className="mt-10 flex justify-end mr-40 ">
        <Link to="/program" className="text-Green font-semibold cursor-pointer hover:text-green-400">Lihat Selengkapnya</Link>
        </div>
       
      </div>
    </>
  );
};

export default Program;
