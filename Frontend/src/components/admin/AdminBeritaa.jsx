import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AiOutlinePicture } from "react-icons/ai";
import { IoVideocam } from "react-icons/io5";
import { MdFileUpload } from "react-icons/md";

const AdminBeritaa = () => {
  // State untuk melacak tombol yang dipilih
  const [selectedButton, setSelectedButton] = useState("Semua");

  // Fungsi untuk menangani klik tombol dan mengubah state
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  // Fungsi untuk menentukan kelas CSS berdasarkan tombol yang dipilih
  const getButtonClass = (buttonName) => {
    if (buttonName === "Semua") {
      return selectedButton === "Semua"
        ? "w-32 border rounded-3xl border-gray-300 text-white px-4 py-2 bg-green-600 mt-10 font-normal"
        : "w-32 border rounded-3xl border-gray-300 text-black px-4 py-2 bg-white hover:bg-green-600 mt-10 font-normal";
    }
    return selectedButton === buttonName
      ? "w-32 border rounded-3xl border-gray-300 text-white px-4 py-2 bg-green-600 mt-10 font-normal"
      : "w-32 border rounded-3xl border-gray-300 text-black px-4 py-2 hover:bg-green-600 hover:text-white mt-10 font-normal";
  };

  return (
    <>
      <main className="flex-grow p-6 bg-white rounded-xl ml-4 mt-4 h-full mr-5">
        {/* awal dasboard */}
        <div className="flex justify-between mb-6">
          <div>
            <h1 className="text-xl font-semibold">Dashboard / Berita</h1>
          </div>
        </div>
        {/* akhir dasboard */}
        {/* awal berita dan publikasi dan search */}
        <div className="flex items-center ml-4 justify-between">
          <div>
            <p className="text-[#222831] text-[18px] font-semibold leading-[40px]">
              Berita dan Publikasi
            </p>
          </div>

          <div className="flex items-center border rounded-3xl px-2 py-2 bg-white text-black mr-6 w-80">
            <CiSearch className="mr-2" size={20} />
            <input
              type="text"
              placeholder="Search here"
              className="outline-none bg-transparent w-full"
            />
          </div>
        </div>
        {/* akhir berita dan publikasi dan search */}
        {/* awal semua button */}
        <div className="flex items-center justify-start space-x-2 w-full mt-2 ml-4">
          <button
            className={getButtonClass("Semua")}
            onClick={() => handleButtonClick("Semua")}
          >
            Semua
          </button>
          <button
            className={getButtonClass("Berita")}
            onClick={() => handleButtonClick("Berita")}
          >
            Berita
          </button>
          <button
            className={getButtonClass("Publikasi")}
            onClick={() => handleButtonClick("Publikasi")}
          >
            Publikasi
          </button>
          <button
            className={getButtonClass("FAQ")}
            onClick={() => handleButtonClick("FAQ")}
          >
            F&Q
          </button>
        </div>
        {/* akhir semua button */}
        {/* awal table */}
        <div className="overflow-x-auto">
          <table className="table table-xs table-pin-rows table-pin-cols mt-10 ">
            <thead>
              <tr>
                <td>Judul</td>
                <td>Tanggal Terbit</td>
                <td>Kategori</td>
                <td>Penulis</td>
                <td>Aksi</td>
              </tr>
            </thead>
          </table>
          <div className="overflow-y-auto max-h-64">
            <table className="table table-xs table-pin-rows table-pin-cols mt-2">
              <tbody className="bg-loginLight ">
                <tr className="bg-gray-50 hover:bg-gray-100 border-b border-gray-200">
                  <td className="p-4">
                    <p>Memperpanjang</p>
                    <p>Umur Pakai</p>
                    <p>Pakaian</p>
                  </td>
                  <td className="p-4">Sabtu, 19 Novenber 2024</td>
                  <td className="p-4">
                    <button className="w-32 border rounded-3xl  border-gray-300 text-white px-4 py-2  bg-Green hover:bg-green-600   font-normal">
                      Berita
                    </button>
                  </td>
                  <td className="p-4">Tim Kreatif</td>
                  <td className="p-4">
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <FaEdit className="ml-2" size={20} />
                      <MdDelete
                        className="ml-2"
                        size={20}
                        style={{ color: "green" }}
                      />
                    </span>
                  </td>
                </tr>
                <tr className="bg-white hover:bg-gray-50 border-b border-gray-200">
                  <td className="p-4">
                    <p>Memperpanjang</p>
                    <p>Umur Pakai</p>
                    <p>Pakaian</p>
                  </td>
                  <td className="p-4">Sabtu, 19 Novenber 2024</td>
                  <td className="p-4">
                    <button className="w-32 border rounded-3xl  border-gray-300 text-white px-4 py-2  bg-Green hover:bg-green-600   font-normal">
                      Berita
                    </button>
                  </td>
                  <td className="p-4">Tim Kreatif</td>
                  <td className="p-4">
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <FaEdit className="ml-2" size={20} />
                      <MdDelete
                        className="ml-2"
                        size={20}
                        style={{ color: "green" }}
                      />
                    </span>
                  </td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100 border-b border-gray-200">
                  <td className="p-4">
                    <p>Memperpanjang</p>
                    <p>Umur Pakai</p>
                    <p>Pakaian</p>
                  </td>
                  <td className="p-4">Sabtu, 19 Novenber 2024</td>
                  <td className="p-4">
                    <button className="w-32 border rounded-3xl  border-gray-300 text-white px-4 py-2  bg-Green hover:bg-green-600   font-normal">
                      Berita
                    </button>
                  </td>
                  <td className="p-4">Tim Kreatif</td>
                  <td className="p-4">
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <FaEdit className="ml-2" size={20} />
                      <MdDelete
                        className="ml-2"
                        size={20}
                        style={{ color: "green" }}
                      />
                    </span>
                  </td>
                </tr>
                <tr className="bg-white hover:bg-gray-50 border-b border-gray-200">
                  <td className="p-4">
                    <p>Memperpanjang</p>
                    <p>Umur Pakai</p>
                    <p>Pakaian</p>
                  </td>
                  <td className="p-4">Sabtu, 19 Novenber 2024</td>
                  <td className="p-4">
                    <button className="w-32 border rounded-3xl  border-gray-300 text-white px-4 py-2  bg-Green hover:bg-green-600   font-normal">
                      Berita
                    </button>
                  </td>
                  <td className="p-4">Tim Kreatif</td>
                  <td className="p-4">
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <FaEdit className="ml-2" size={20} />
                      <MdDelete
                        className="ml-2"
                        size={20}
                        style={{ color: "green" }}
                      />
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* akhir table */}
        {/* awal label */}
        <div className="bg-white p-6 rounded-lg shadow mt-10">
          <h2 className="text-lg font-semibold mb-4">Buat Baru</h2>
          <div className="grid grid-cols-2 gap-6">
            {/* Kolom pertama */}
            <div className="space-y-4">
              <h6 className="font-semibold mt-4">Judul Donasi</h6>
              <input
                type="text"
                placeholder="Judul Donasi"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
              />
            </div>

            {/* Kolom kedua */}
            <div className="space-y-4">
              <h6 className="font-semibold mt-4">Nama Mitra</h6>
              <input
                type="text"
                placeholder="Nama Mitra"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
              />
            </div>

            {/* Kolom pertama */}
            <div className="space-y-4">
              <h6 className="font-semibold mt-4">Tanggal Posting</h6>
              <input
                type="date"
                placeholder="tanggal posting"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
              />
            </div>

            {/* Kolom kedua */}
            <div className="space-y-4">
              <h6 className="font-semibold mt-4">Pilih Kategori</h6>
              <select
                id="kategori"
                aria-label="Kategori"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
              >
                <option disabled selected>
                  Pilih Kategori
                </option>
                <option value="">Berita</option>
                <option value="">Publikasi</option>
                <option value="">F&Q</option>
              </select>
            </div>
          </div>
        </div>
        {/* akhir label */}

        <div className="flex justify-between mb-6">
          <div>
            <h6 className="text-lg font-semibold mb-4 mt-8 ml-4">Deskripsi</h6>
          </div>
        </div>
        <div className="bg-loginLight p-16 -mt-4 rounded-lg shadow">
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-span-2 flex justify-center items-center">
              <AiOutlinePicture className="ml-4 bg-white py-2" size={80} />
            </div>
            <div className="col-span-2 flex justify-center items-center">
              <IoVideocam className="ml-4 bg-white py-2" size={80} />
            </div>
          </span>
        </div>
        <div className="bg-white p-0 -mt-4 rounded-lg shadow w-full h-96">
          <textarea
            placeholder="Tuliskan Berita Anda"
            className="textarea textarea-bordered textarea-lg w-full h-full p-4 flex justify-center resize-none"
          ></textarea>
        </div>
        {/* awal unggh foto */}
        <div className="flex justify-between mb-6">
          <div>
            <h6 className="text-lg font-semibold mb-4 mt-8 ml-4">
              Unggah Foto Publikasi/ Kegiatan
            </h6>
          </div>
        </div>
        <div className="bg-loginLight p-10 -mt-4 rounded-lg shadow">
          <span className="text-sm text-gray-500">
            <div className="col-span-2 flex justify-center items-center">
              <MdFileUpload className="ml-4 bg-white py-2" size={80} />
            </div>
          </span>
        </div>
        <span className="text-sm text-gray-500">
          Mohon Unggah dokumen file jpg, png, svg
        </span>
        <div className="text-right mt-6">
          <button className="w-96   bg-[#4CAF50] text-white py-2 px-2   rounded-md hover:bg-[#45a049]">
            Publikasi
          </button>
        </div>
        {/* akhir unggah foto */}
      </main>
    </>
  );
};

export default AdminBeritaa;
