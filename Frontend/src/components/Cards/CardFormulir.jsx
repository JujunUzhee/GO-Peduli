import React, { useState } from "react";
import Kategori from "../element/input/kategori";
import InputLokasi from "../element/input/inputLokasi";
import LokasiDonasi from "../element/input/lokasiDonasi";
import Pengantaran from "../element/input/pilihPengantaran";

const CardFormulir = ({ title, profil,buttonText }) => {
  const [formData, setFormData] = useState({
    clothing: "",
    location: "",
    name: "",
    phoneNumber: "",
    email: "",
    deliveryAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data formulir yang telah disubmit
    console.log(formData);
  };

  return (
    <>
      <div className="w-[1154px] mb-52 rounded-xl shadow-lg bg-white">
        <form onSubmit={handleSubmit}>
          <h1 className="text-DarkGreen text-4xl text-center mt-20 font-bold">
            {title}
          </h1>
          <hr className="w-[930px] mx-auto mt-12 border-Green border-t-2 mb-12" />
          <div className="flex flex-col -mx-3 mb-6 ">
            <div className=" mx-auto w-full md:w-1/2 px-3 mb-6 md:mb-0 flex items-center  gap-24">
              <label
                className="flex-shrink-0  tracking-wide text-dark text-lg font-bold "
                htmlFor="clothing"
              >
                Pilih Lokasi <span className="text-red-600">*</span>
              </label>
              <div className="ml-14">
                <LokasiDonasi />
              </div>
            </div>
            <div className=" mx-auto w-full md:w-1/2 px-3 mb-6 md:mb-0 flex items-center gap-24 mt-8">
              <label
                className="flex-shrink-0  tracking-wide text-dark text-lg font-bold "
                htmlFor="clothing"
              >
                Kategori Pakaian <span className="text-red-600">*</span>
              </label>
              <div className="">
                <Kategori value={formData.location} onChange={handleChange} />
              </div>
            </div>
          </div>
          <h1 className="text-gray-800 text-2xl mt-36 font-bold ml-28">
            {profil}
          </h1>
          <hr className="w-[930px] mx-auto mt-4 border-Green border-t-2 mb-12" />
          <div className="flex flex-col -mx-3 mb-6 ">
            <div className=" mx-auto w-full md:w-1/2 px-3 mb-6 md:mb-0 flex items-center gap-24">
              <label
                className="flex-shrink-0  tracking-wide text-dark text-lg font-bold "
                htmlFor="clothing"
              >
                Nama <span className="text-red-600">*</span>
              </label>
              <div className="ml-28">
                <input
                  type="text"
                  placeholder="Nama"
                  className="input input-md w-[550px] bg-green-50 border-none shadow-md max-w-sm"
                />
              </div>
            </div>
            <div className=" mx-auto w-full md:w-1/2 px-3 mb-6 md:mb-0 flex items-center gap-24 mt-8">
              <label
                className="flex-shrink-0  tracking-wide text-dark text-lg font-bold "
                htmlFor="clothing"
              >
                Nomor Hp/Wa <span className="text-red-600">*</span>
              </label>
              <div className="ml-8">
                <input
                  type="number"
                  placeholder="Masukan Nomor"
                  className="input input-md w-[550px] bg-green-50 border-none shadow-md max-w-sm"
                />
              </div>
            </div>
            <div className=" mx-auto w-full md:w-1/2 px-3 mb-6 md:mb-0 flex items-center gap-24 mt-8">
              <label
                className="flex-shrink-0  tracking-wide text-dark text-lg font-bold "
                htmlFor="clothing"
              >
                Email <span className="text-red-600">*</span>
              </label>
              <div className="ml-28">
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-md w-[550px] bg-green-50 border-none shadow-md max-w-sm"
                />
              </div>
            </div>
          </div>
          <h1 className="text-gray-800 text-2xl mt-36 font-bold ml-28">
            Pengantaran
          </h1>
          <hr className="w-[930px] mx-auto mt-4 border-Green border-t-2 mb-12" />
          <div className="flex flex-col -mx-3 mb-6 ">
            <div className=" mx-auto w-full md:w-1/2 px-3 mb-6 md:mb-0 flex items-center gap-24">
              <label
                className="flex-shrink-0  tracking-wide text-dark text-lg font-bold "
                htmlFor="clothing"
              >
                Pilih Pengantaran <span className="text-red-600">*</span>
              </label>
              <div className="ml-2">
              <Pengantaran />
              </div>
            </div>
            <div className=" mx-auto w-full md:w-1/2 px-3 mb-6 md:mb-0 flex items-center  gap-24 mt-8">
              <label
                className="flex-shrink-0  tracking-wide text-dark text-lg font-bold "
                htmlFor="clothing"
              >
                Alamat <span className="text-red-600">*</span>
              </label>
              <div className="ml-28">
                <input
                  type="text"
                  placeholder="Alamat"
                  className="input input-md w-[550px] bg-green-50 border-none shadow-md max-w-sm"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-28 mb-20">
            <button className="w-[324px] h-[56px] bg-Green items-center rounded-xl shadow-lg text-white font-bold text-xl">
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CardFormulir;
