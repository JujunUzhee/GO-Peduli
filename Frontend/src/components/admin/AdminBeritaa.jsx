import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AiOutlinePicture } from "react-icons/ai";
import { IoVideocam } from "react-icons/io5";
import { MdFileUpload } from "react-icons/md";

const AdminBeritaa = () => {
  const [selectedButton, setSelectedButton] = useState("Semua");
  const [beritaList, setBeritaList] = useState([]);
  const [newBerita, setNewBerita] = useState({
    title: "",
    mitra: "",
    date: "",
    kategori: "",
    descripsi: "",
    img: null,
  });

  useEffect(() => {
    fetchBerita();
  }, []);

  const fetchBerita = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/berita`);
      setBeritaList(response.data);
    } catch (error) {
      console.error("Failed to fetch berita", error);
    }
  };

  const formatTanggal = (tanggal) => {
    const date = new Date(tanggal);
    const formattedDate = date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC',
    });
    return formattedDate;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBerita((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setNewBerita((prev) => ({
      ...prev,
      img: e.target.files[0],
    }));
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const getButtonClass = (buttonName) => {
    return selectedButton === buttonName
      ? "w-32 border rounded-3xl border-gray-300 text-white px-4 py-2 bg-green-600 mt-10 font-normal"
      : "w-32 border rounded-3xl border-gray-300 text-black px-4 py-2 bg-white hover:bg-green-600 mt-10 font-normal";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(newBerita).forEach((key) => {
      formData.append(key, newBerita[key]);
    });

    try {
      await axios.post("/api/berita", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      fetchBerita(); // Refresh the list
    } catch (error) {
      console.error("Failed to add berita", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/berita/${id}`);
      fetchBerita(); // Refresh the list
    } catch (error) {
      console.error("Failed to delete berita", error);
    }
  };

  return (
    <>
      <main className="flex-grow p-6 bg-white rounded-xl ml-4 mt-4 h-full mr-5">
        <div className="flex justify-between mb-6">
          <div>
            <h1 className="text-xl font-semibold">Dashboard / Berita</h1>
          </div>
        </div>

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

        <div className="overflow-x-auto">
          <table className="table table-xs table-pin-rows table-pin-cols mt-10">
            <thead >
              <tr>
                <td className="px-4">Judul</td>
                <td className="px-4">Tanggal Terbit</td>
                <td className="px-4">Kategori</td>
                <td className="px-4">Penulis</td>
                <td className="px-4">Aksi</td>
              </tr>
            </thead>
            <tbody className="bg-loginLight">
              {beritaList.map((berita) => (
                <tr
                  key={berita.id}
                  className="bg-gray-50 hover:bg-gray-100 border-b border-gray-200"
                >
                  <td className="p-4">{berita.title}</td>
                  <td className="p-4">{formatTanggal(berita.date)}</td>
                  <td className="p-4">
                    <button className="w-32 border rounded-3xl border-gray-300 text-white px-4 py-2 bg-Green hover:bg-green-600 font-normal">
                      {berita.kategori}
                    </button>
                  </td>
                  <td className="p-4">{berita.author}</td>
                  <td className="p-4">
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <FaEdit className="ml-2" size={20} />
                      <MdDelete
                        className="ml-2"
                        size={20}
                        style={{ color: "green" }}
                        onClick={() => handleDelete(berita.id)}
                      />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white p-6 rounded-lg shadow mt-10">
          <h2 className="text-lg font-semibold mb-4">Buat Baru</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <h6 className="font-semibold mt-4">Judul Berita</h6>
                <input
                  type="text"
                  name="title"
                  value={newBerita.title}
                  onChange={handleInputChange}
                  placeholder="Judul Berita"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
                />
              </div>

              <div className="space-y-4">
                <h6 className="font-semibold mt-4">Nama Mitra</h6>
                <input
                  type="text"
                  name="mitra"
                  value={newBerita.mitra}
                  onChange={handleInputChange}
                  placeholder="Nama Mitra"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
                />
              </div>

              <div className="space-y-4">
                <h6 className="font-semibold mt-4">Tanggal Posting</h6>
                <input
                  type="date"
                  name="date"
                  value={newBerita.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
                />
              </div>

              <div className="space-y-4">
                <h6 className="font-semibold mt-4">Pilih Kategori</h6>
                <select
                  name="kategori"
                  value={newBerita.kategori}
                  onChange={handleInputChange}
                  aria-label="Kategori"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
                >
                  <option disabled selected>
                    Pilih Kategori
                  </option>
                  <option value="Berita">Berita</option>
                  <option value="Publikasi">Publikasi</option>
                  <option value="F&Q">F&Q</option>
                </select>
              </div>
            </div>

            <div className="mt-8">
              <h6 className="text-lg font-semibold mb-4">Deskripsi</h6>
              <textarea
                name="descripsi"
                value={newBerita.descripsi}
                onChange={handleInputChange}
                placeholder="Tuliskan Berita Anda"
                className="textarea textarea-bordered textarea-lg w-full h-32 p-4 flex justify-center resize-none"
              ></textarea>
            </div>

            <div className="mt-8">
              <h6 className="text-lg font-semibold mb-4">
                Unggah Foto Publikasi/Kegiatan
              </h6>
              <input
                type="file"
                name="img"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
              />
            </div>

            <div className="text-right mt-6">
              <button className="w-96 bg-[#4CAF50] text-white py-2 px-2 rounded-md hover:bg-[#45a049]">
                Publikasi
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default AdminBeritaa;
