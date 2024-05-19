import React from "react";
import { IoSearch } from "react-icons/io5";
import InputLokasi from "../element/input/inputLokasi";
import Kategori from "../element/input/kategori";


const CardInput = () => {
  return (
    <> 
      <div className="w-full">
        <div className="flex items-center bg-white h-[228px] w-[1055px] shadow-md rounded-lg flex-col">
          <h2 className="text-center font-bold text-3xl mt-8">
            Temukan Lokasi Terdekat
          </h2>
          <div className="flex gap-4 mt-10">
           <InputLokasi />
            <Kategori />
            
            <button type="submit" className="btn btn-circle bg-Green text-white text-2xl">
              <IoSearch />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardInput;
