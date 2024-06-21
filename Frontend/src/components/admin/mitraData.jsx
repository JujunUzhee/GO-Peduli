import React from "react";
import SideBar from "./SideBar";
import { CiSearch } from "react-icons/ci";
import { TiEdit } from "react-icons/ti";
import { FaDatabase } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { MdUpload } from "react-icons/md";
import { MdRadioButtonUnchecked } from "react-icons/md";
const MitraData = () => {
  return (
    <>
      <div className="flex bg-loginLight min-h-screen w-full overflow-x-hidden">
        <SideBar />
        <main className="flex-grow p-6 w-full bg-white rounded-xl ml-5 mt-4 h-full mr-5 max-w-[820px]">
          {/* ini tampilan Data Donatur */}
          <div className="flex justify-between mb-6">
            <div>
              <h1 className="text-xl font-semibold">
                Dashboard / Mitra / Data Donatur
              </h1>
            </div>
          </div>
          {/* ini box */}
          <div>
            <div className="gap-[8px]  flex relative  box-border items-start justify-start">
              <div className="w-full max-w-[247px] box-border">
                <div className="w-full max-w-[247px] box-border">
                  <div className="gap-[8px] w-full flex p-[24px] relative max-w-[247px] [border-top:1px_solid_#64b479] [box-shadow:0px_0px_12px_0px_rgba(0,0,0,0.16)] box-border items-center [border-left:1px_solid_#64b479] [border-right:1px_solid_#64b479] [border-bottom:1px_solid_#64b479] rounded-tl-[8px] rounded-br-[8px] rounded-tr-[8px] rounded-bl-[8px] justify-start bg-[#f0f8f2]">
                    <div className="gap-[26px] w-full flex p-[8px] relative max-w-[66px] box-border items-start justify-start bg-[#f0f8f2]">
                      <img
                        src="/image/logo orang.png"
                        alt="instance"
                        width="50"
                        height="50"
                        className="w-full overflow-hidden max-w-[50px] box-border items-start flex-col justify-start"
                      />
                    </div>
                    <div className="w-full flex relative max-w-[125px] box-border items-center flex-col justify-start">
                      <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-center mb-0">
                        <p className="text-[#919191] text-[18px] not-italic mt-0 text-center font-['Poppins',_sans-serif] font-semibold leading-[40px] mb-0 tracking-[0px] normal-case">
                          Total Donatur
                        </p>
                      </div>
                      <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-center mb-0">
                        <p className="text-[#222831] text-[18px] not-italic mt-0 text-center font-['Poppins',_sans-serif] font-semibold leading-[40px] mb-0 tracking-[0px] normal-case">
                          10
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gap-[8px] w-full flex p-[24px] relative max-w-[189px] [border-top:1px_solid_#64b479] [box-shadow:0px_0px_12px_0px_rgba(0,0,0,0.16)] box-border items-center [border-left:1px_solid_#64b479] [border-right:1px_solid_#64b479] [border-bottom:1px_solid_#64b479] rounded-tl-[8px] rounded-br-[8px] rounded-tr-[8px] rounded-bl-[8px] justify-start bg-[#f0f8f2]">
                <div className="gap-[26px] w-full flex p-[8px] relative max-w-[66px] box-border items-start justify-start bg-[#f0f8f2]">
                  <img
                    src="/image/pick up.png"
                    alt="instance"
                    width="50"
                    height="50"
                    className="w-full max-w-[50px] box-border"
                  />
                </div>
                <div className="w-full flex relative max-w-[67px] box-border items-center flex-col justify-start h-[80px]">
                  <div className="w-full max-w-[auto] -mt-0 min-h-[auto] text-center mb-0">
                    <p className="text-[#919191] text-[18px] not-italic mt-0 text-center font-['Poppins',_sans-serif] font-semibold leading-[20px] mb-0 tracking-[0px] normal-case">
                      Pick Up
                    </p>
                  </div>
                  <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-center mb-0">
                    <p className="text-[#222831] text-[18px] not-italic mt-0 text-center font-['Poppins',_sans-serif] font-semibold leading-[40px] mb-0 tracking-[0px] normal-case">
                      8
                    </p>
                  </div>
                </div>
              </div>
              <div className="gap-[8px] w-full flex p-[24px] relative max-w-[197px] [border-top:1px_solid_#64b479] [box-shadow:0px_0px_12px_0px_rgba(0,0,0,0.16)] box-border items-center [border-left:1px_solid_#64b479] [border-right:1px_solid_#64b479] [border-bottom:1px_solid_#64b479] rounded-tl-[8px] rounded-br-[8px] rounded-tr-[8px] rounded-bl-[8px] justify-start bg-[#f0f8f2]">
                <div className="gap-[26px] w-full flex p-[8px] relative max-w-[66px] box-border items-start justify-start bg-[#f0f8f2]">
                  <img
                    src="/image/drop off.png"
                    alt="instance"
                    width="50.50001525878906"
                    height="54.5625"
                    className="w-full max-w-[50px] box-border items-start flex-col justify-start"
                  />
                </div>
                <div className="w-full flex relative max-w-[75px] box-border items-center flex-col justify-start">
                  <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-center mb-0">
                    <p className="text-[#919191] text-[18px] not-italic mt-0 text-center font-['Poppins',_sans-serif] font-semibold leading-[40px] mb-0 tracking-[0px] normal-case">
                      Drop Off
                    </p>
                  </div>
                  <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-center mb-0">
                    <p className="text-[#222831] text-[18px] not-italic mt-0 text-center font-['Poppins',_sans-serif] font-semibold leading-[40px] mb-0 tracking-[0px] normal-case">
                      2
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* tag Donasiku */}
          <div className="flex items-center ml-4 justify-between mt-10">
            <div>
              <p className="text-[#222831] text-[18px] font-semibold leading-[40px]">
                Donasiku
              </p>
            </div>

            <div className="flex items-center border rounded-3xl px-2 py-2 ml-11 bg-white text-black mr-96 w-80">
              <CiSearch className="mr-2" size={20} />
              <input
                type="text"
                placeholder="Search here"
                className="outline-none bg-transparent w-full"
              />
            </div>
          </div>
          {/* button */}
          <div className="flex items-center  justify-start space-x-2 w-full">
            <button className="w-32 border rounded-3xl  border-gray-300 text-black px-4 py-2   hover:bg-green-600  mt-10 font-normal">
              Semua
            </button>
            <button className="w-32 border rounded-3xl  border-gray-300 text-black px-4 py-2   hover:bg-green-600 hover:text-white  mt-10 font-normal">
              Anak-Anak
            </button>
            <button className="w-32 border rounded-3xl  border-gray-300 text-black px-6 py-2  hover:bg-green-600 hover:text-white  mt-10 font-normal">
              Remaja
            </button>
            <button className="w-32 border rounded-3xl  border-gray-300 text-black px-6 py-2   hover:bg-green-600 hover:text-white  mt-10 font-normal">
              Pick Up
            </button>
            <button className="w-32 border rounded-3xl  border-gray-300 text-black px-6 py-2   hover:bg-green-600 hover:text-white  mt-10 font-normal">
              Drop Off
            </button>
          </div>
          {/*  */}
          <div className="mt-6">
            <div className="w-full flex gap-4 max-w-[1004px] items-start justify-between ">
              <div className="flex-1">
                <p className="text-[#64b479] text-[14px] font-['Poppins',_sans-serif] font-bold leading-[40px]">
                  Nama
                </p>
                <p className="text-[#000000] text-[14px] font-['Poppins',_sans-serif] leading-[40px]">
                  Naratama Abinaya
                </p>
              </div>
              <div className="flex-1">
                <p className="text-[#64b479] text-[14px] font-['Poppins',_sans-serif] font-bold leading-[40px]">
                  Lokasi
                </p>
                <p className="text-[#000000] text-[14px] font-['Poppins',_sans-serif] leading-[40px]">
                  Rembang
                </p>
              </div>
              <div className="flex-1">
                <p className="text-[#64b479] text-[14px] font-['Poppins',_sans-serif] font-bold leading-[40px]">
                  Kategori
                </p>
                <p className="text-[#000000] text-[14px] font-['Poppins',_sans-serif] leading-[40px]">
                  Anak-Anak
                </p>
              </div>
              <div className="flex-1">
                <p className="text-[#64b479] text-[14px] font-['Poppins',_sans-serif] font-bold leading-[40px]">
                  Pengiriman
                </p>
                <p className="text-[#000000] text-[14px] font-['Poppins',_sans-serif] leading-[40px]">
                  -
                </p>
              </div>
              <div className="flex-1">
                <p className="text-[#64b479] text-[14px] font-['Poppins',_sans-serif] font-bold leading-[40px]">
                  Tanggal
                </p>
                <p className="text-[#000000] text-[14px] font-['Poppins',_sans-serif] leading-[40px]">
                  01-12-2024
                </p>
              </div>
              <div className="flex-1">
                <p className="text-[#64b479] text-[14px] font-['Poppins',_sans-serif] font-bold leading-[40px]">
                  Email
                </p>
                <p className="text-[#000000] text-[14px] font-['Poppins',_sans-serif] leading-[40px]">
                  Naraabi@gmail.com
                </p>
              </div>
              <div className="flex-1">
                <p className="text-[#64b479] text-[14px] font-['Poppins',_sans-serif] font-bold leading-[40px]">
                  Alamat
                </p>
                <p className="text-[#000000] text-[14px] font-['Poppins',_sans-serif] leading-[40px]">
                  Desa Sluke Rt 00 Rw 00 Kecamatan Sluke Kabupaten Rembang Jawa
                  Tengah
                </p>
              </div>
            </div>
          </div>
          {/*  */}
        </main>
        <div>
          <div className="gap-[26px] w-full flex px-[15px] py-[25px] overflow-hidden relative max-w-[319px] [box-shadow:0px_0px_12px_0px_rgba(207,232,213,1)] box-border items-center rounded-tl-[16px] rounded-br-[16px] rounded-tr-[16px]  mt-4 rounded-bl-[16px] flex-col justify-start bg-[#fdfdfd]">
            <div className="w-full max-w-full mt-0 min-h-[auto] text-left mb-0">
              <p className="text-[#222831] text-[24px] not-italic mt-0 text-left font-['Poppins',_sans-serif] font-bold leading-[40px] mb-0 tracking-[0px] normal-case">
                Aksi
              </p>
            </div>
            <div className="gap-[13px] w-full flex px-[46px] py-[4px] relative max-w-[222px] box-border items-center rounded-tl-[8px] rounded-br-[8px] rounded-tr-[8px] rounded-bl-[8px] justify-start bg-[#64b479]">
              {/* <img
                src="./assets/I7221187672211865.svg"
                alt="instance"
                width="24"
                height="24"
                className="w-full overflow-hidden max-w-[24px] box-border items-start flex-col justify-start"
              /> */}
              <TiEdit className="text-white text-2xl" />
              <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-center mb-0">
                <p className="text-[#fdfdfd] text-[16px] not-italic mt-0 text-center font-['Poppins',_sans-serif] font-bold leading-[40px] mb-0 tracking-[0px] normal-case">
                  Edit Donasi
                </p>
              </div>
            </div>
            <div className="gap-[13px] w-full flex px-[46px] py-[4px] relative max-w-[222px] [border-top:1px_solid_#64b479] box-border items-center [border-left:1px_solid_#64b479] [border-right:1px_solid_#64b479] [border-bottom:1px_solid_#64b479] rounded-tl-[8px] rounded-br-[8px] rounded-tr-[8px] rounded-bl-[8px] justify-start">
              {/* <img
                src="./assets/I7221188172211872.svg"
                alt="instance"
                width="24"
                height="24"
                className="w-full overflow-hidden max-w-[24px] box-border"
              /> */}
              <FaDatabase />
              <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-center mb-0">
                <p className="text-[#222831] text-[16px] not-italic mt-0 text-center font-['Poppins',_sans-serif] font-bold leading-[40px] mb-0 tracking-[0px] normal-case">
                  Unduh Data
                </p>
              </div>
            </div>
            <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-center mb-0">
              <p className="text-[#64b479] text-[18px] not-italic mt-0 text-center font-['Poppins',_sans-serif] font-semibold leading-[40px] mb-0 tracking-[0px] normal-case">
                Laporan Mitra
              </p>
            </div>
            <div className="gap-[13px] w-full flex px-[33px] py-[4px] relative max-w-[222px] [border-top:1px_solid_#64b479] box-border items-center [border-left:1px_solid_#64b479] [border-right:1px_solid_#64b479] [border-bottom:1px_solid_#64b479] rounded-tl-[8px] rounded-br-[8px] rounded-tr-[8px] rounded-bl-[8px] justify-start">
              {/* <img
                src="./assets/I7221190272211872.svg"
                alt="instance"
                width="24"
                height="24"
                className="w-full overflow-hidden max-w-[24px] box-border items-start flex-col justify-start"
              /> */}
              <IoIosLink className="text-2xl" />
              <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-center mb-0">
                <p className="text-[#222831] text-[16px] not-italic mt-0 text-center font-['Poppins',_sans-serif] font-bold leading-[40px] mb-0 tracking-[0px] normal-case">
                  Kirim Laporan
                </p>
              </div>
            </div>
            <div className="gap-[148px] w-full flex relative max-w-[289px] box-border items-center justify-start">
              <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-center mb-0">
                <p className="text-[#000000] text-[24px] not-italic mt-0 text-center font-['Poppins',_sans-serif] font-semibold leading-[40px] mb-0 tracking-[0px] normal-case">
                  Sertifikat
                </p>
              </div>
            </div>
            <div className="gap-[6px] w-full flex relative max-w-[274px] box-border items-start flex-col justify-start">
              <div className="gap-[115px] w-full flex relative max-w-[274px] box-border items-center justify-start">
                <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-center mb-0">
                  <p className="text-[#64b479] text-[18px] not-italic mt-0 text-center font-['Poppins',_sans-serif] font-semibold leading-[40px] mb-0 tracking-[0px] normal-case">
                    Sertifikat Mitra
                  </p>
                </div>
                {/* <img
                  src="./assets/72211920.svg"
                  alt="instance"
                  width="24"
                  height="24"
                  className="w-full max-w-[24px] box-border rounded-[100%]"
                /> */}
                <MdRadioButtonUnchecked className="text-green-700 text-5xl" />
              </div>
              <div className="gap-[8px] w-full flex relative max-w-[262px] box-border items-start flex-col justify-center">
                <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-center mb-0">
                  <p className="text-[#222831] text-[14px] not-italic mt-0 text-center font-['Poppins',_sans-serif] font-semibold leading-[40px] mb-0 tracking-[0px] normal-case">
                    Unggah Foto
                  </p>
                </div>
                <div className="gap-[8px] w-full flex relative max-w-[262px] box-border items-center justify-start">
                  <div className="gap-[8px] w-full flex p-[24px] relative max-w-[98px] [border-top:1px_solid_#64b479] box-border items-center [border-left:1px_solid_#64b479] [border-right:1px_solid_#64b479] [border-bottom:1px_solid_#64b479] rounded-tl-[4px] rounded-br-[4px] rounded-tr-[4px] rounded-bl-[4px] justify-center bg-[#fafafa]">
                    {/* <img
                      src="./assets/I722118927085201.svg"
                      alt="instance"
                      width="50"
                      height="50"
                      className="w-full overflow-hidden max-w-[50px] box-border items-start flex-col justify-start"
                    /> */}
                    <MdUpload className="text-green-700 text-5xl" />
                  </div>
                  <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
                    <p className="text-[#919191] text-[12px] not-italic mt-0 text-left font-['Poppins',_sans-serif] font-normal leading-[16px] mb-0 tracking-[0px] normal-case">
                      Mohon Unggah dalam file
                    </p>
                    <p className="text-[#919191] text-[12px] not-italic mt-0 text-left font-['Poppins',_sans-serif] font-normal leading-[16px] mb-0 tracking-[0px] normal-case">
                      .jpg, .png, .svg
                    </p>
                  </div>
                </div>
                <div className="gap-[8px] w-full flex p-[4px] relative max-w-[98px] box-border items-center rounded-tl-[4px] rounded-br-[4px] rounded-tr-[4px] rounded-bl-[4px] justify-between bg-[#64b479]">
                  <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
                    <p className="text-[#fafafa] text-[14px] not-italic mt-0 text-left font-['Poppins',_sans-serif] font-bold leading-[40px] mb-0 tracking-[0px] normal-case">
                      Unggah
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex relative max-w-[280px] box-border items-start flex-col justify-start">
              <div className="gap-[94px] w-full flex relative max-w-[280px] box-border items-center justify-start">
                <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-center mb-0">
                  <p className="text-[#64b479] text-[18px] not-italic mt-0 text-center font-['Poppins',_sans-serif] font-semibold leading-[40px] mb-0 tracking-[0px] normal-case">
                    Sertifikat Donatur
                  </p>
                </div>
                {/* <img
                  src="./assets/72211925.svg"
                  alt="instance"
                  width="24"
                  height="24"
                  className="w-full max-w-[24px] box-border rounded-[100%]"
                /> */}
                <MdRadioButtonUnchecked className="text-green-700 text-5xl" />
              </div>
              <div className="gap-[8px] w-full flex relative max-w-[262px] box-border items-start flex-col justify-center">
                <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-center mb-0">
                  <p className="text-[#222831] text-[14px] not-italic mt-0 text-center font-['Poppins',_sans-serif] font-semibold leading-[40px] mb-0 tracking-[0px] normal-case">
                    Unggah Foto
                  </p>
                </div>
                <div className="gap-[8px] w-full flex relative max-w-[262px] box-border items-center justify-start">
                  <div className="gap-[8px] w-full flex p-[24px] relative max-w-[98px] [border-top:1px_solid_#64b479] box-border items-center [border-left:1px_solid_#64b479] [border-right:1px_solid_#64b479] [border-bottom:1px_solid_#64b479] rounded-tl-[4px] rounded-br-[4px] rounded-tr-[4px] rounded-bl-[4px] justify-center bg-[#fafafa]">
                    {/* <img
                      src="./assets/I722119277085201.svg"
                      alt="instance"
                      width="50"
                      height="50"
                      className="w-full overflow-hidden max-w-[50px] box-border items-start flex-col justify-start"
                    /> */}
                    <MdUpload className="text-green-700 text-5xl" />
                  </div>
                  <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
                    <p className="text-[#919191] text-[12px] not-italic mt-0 text-left font-['Poppins',_sans-serif] font-normal leading-[16px] mb-0 tracking-[0px] normal-case">
                      Mohon Unggah dalam file
                    </p>
                    <p className="text-[#919191] text-[12px] not-italic mt-0 text-left font-['Poppins',_sans-serif] font-normal leading-[16px] mb-0 tracking-[0px] normal-case">
                      .jpg, .png, .svg
                    </p>
                  </div>
                </div>
                <div className="gap-[8px] w-full flex p-[4px] relative max-w-[98px] box-border items-center rounded-tl-[4px] rounded-br-[4px] rounded-tr-[4px] rounded-bl-[4px] justify-center bg-[#64b479]">
                  <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
                    <p className="text-[#fafafa] text-[14px] not-italic mt-0 text-left font-['Poppins',_sans-serif] font-bold leading-[40px] mb-0 tracking-[0px] normal-case">
                      Unggah
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="./assets/72211981.svg"
              alt="vector"
              width="290"
              height="1"
              className="w-full h-px m-0 block max-w-[290px] max-h-px"
            />
            <div className="gap-[8px] w-full flex relative max-w-[116px] box-border items-center justify-start">
              {/* <img
                src="./assets/72211977.svg"
                alt="instance"
                width="24"
                height="16"
                className="w-full max-w-[24px] box-border rounded-[100%]"
              /> */}
              <MdRadioButtonUnchecked className="text-green-700 text-4xl" />
              <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
                <p className="text-[#000000] text-[14px] not-italic mt-0 text-left font-['Poppins',_sans-serif] font-semibold leading-[40px] mb-0 tracking-[0px] normal-case">
                  Pilih Semua
                </p>
              </div>
            </div>
            <div className="gap-[8px] w-full flex p-[4px] relative max-w-[250px] box-border items-center rounded-tl-[8px] rounded-br-[8px] rounded-tr-[8px] rounded-bl-[8px] justify-center bg-[#64b479]">
              <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
                <p className="text-[#fafafa] text-[14px] not-italic mt-0 text-left font-['Poppins',_sans-serif] font-bold leading-[40px] mb-0 tracking-[0px] normal-case">
                  Terbitkan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MitraData;