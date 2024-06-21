import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const AdminMitraa = () => {
  return (
    <>
      <main className="flex-grow p-6 bg-white rounded-xl ml-5 mt-4 h-full mr-5">
        <div className="flex justify-between mb-6">
          <div>
            <h1 className="text-xl font-semibold">Dashboard / Mitra</h1>
          </div>
        </div>
        <div>
          <div class="gap-[19px] w-full flex relative max-w-[932px] box-border items-center flex-col justify-center">
            <div class="gap-[45px] w-full flex relative max-w-[932px] box-border items-center justify-center">
              <div class="gap-[8px] w-full flex p-[24px] relative max-w-[220px] [border-top:1px_solid_#64b479] [box-shadow:0px_0px_12px_0px_rgba(0,0,0,0.16)] box-border items-center [border-left:1px_solid_#64b479] [border-right:1px_solid_#64b479] [border-bottom:1px_solid_#64b479] rounded-tl-[8px] rounded-br-[8px] rounded-tr-[8px] rounded-bl-[8px] justify-start bg-[#f0f8f2]">
                <div class="gap-[26px] w-full flex p-[8px] relative max-w-[66px] box-border items-start justify-start bg-[#f0f8f2]">
                  <img
                    src="/image/logo salam.png"
                    alt="instance"
                    width="50"
                    height="50"
                    class="w-full overflow-hidden max-w-[50px] box-border items-start flex-col justify-start"
                  />
                </div>
                <div class="w-full flex relative max-w-[98px] box-border items-center flex-col justify-start">
                  <div class="w-full max-w-[auto] mt-0 min-h-[auto] text-center mb-0">
                    <p class="text-[#919191] text-[18px] not-italic mt-0 text-center font-['Poppins',_sans-serif] font-semibold leading-[40px] mb-0 tracking-[0px] normal-case">
                      Total Mitra
                    </p>
                  </div>
                  <div class="w-full max-w-[auto] mt-0 min-h-[auto] text-center mb-0">
                    <p class="text-[#222831] text-[18px] not-italic mt-0 text-center font-['Poppins',_sans-serif] font-semibold leading-[40px] mb-0 tracking-[0px] normal-case">
                      100
                    </p>
                  </div>
                </div>
              </div>
              <div class="gap-[8px] w-full flex p-[24px] relative max-w-[236px] [border-top:1px_solid_#64b479] [box-shadow:0px_0px_12px_0px_rgba(0,0,0,0.16)] box-border items-center [border-left:1px_solid_#64b479] [border-right:1px_solid_#64b479] [border-bottom:1px_solid_#64b479] rounded-tl-[8px] rounded-br-[8px] rounded-tr-[8px] rounded-bl-[8px] justify-start bg-[#f0f8f2]">
                <div class="gap-[26px] w-full flex p-[8px] relative max-w-[66px] box-border items-start justify-start bg-[#f0f8f2]">
                  <img
                    src="/image/logo love.png"
                    alt="instance"
                    width="50"
                    height="50"
                    class="w-full overflow-hidden max-w-[50px] box-border items-start flex-col justify-start"
                  />
                </div>
                <div class="w-full flex relative max-w-[114px] box-border items-center flex-col justify-start">
                  <div class="w-full max-w-[auto] mt-0 min-h-[auto] text-center mb-0">
                    <p class="text-[#919191] text-[18px] not-italic mt-0 text-center font-['Poppins',_sans-serif] font-semibold leading-[40px] mb-0 tracking-[0px] normal-case">
                      Total Donasi
                    </p>
                  </div>
                  <div class="w-full max-w-[auto] mt-0 min-h-[auto] text-center mb-0">
                    <p class="text-[#222831] text-[18px] not-italic mt-0 text-center font-['Poppins',_sans-serif] font-semibold leading-[40px] mb-0 tracking-[0px] normal-case">
                      200
                    </p>
                  </div>
                </div>
              </div>
              <div class="gap-[8px] w-full flex p-[24px] relative max-w-[247px] [border-top:1px_solid_#64b479] [box-shadow:0px_0px_12px_0px_rgba(0,0,0,0.16)] box-border items-center [border-left:1px_solid_#64b479] [border-right:1px_solid_#64b479] [border-bottom:1px_solid_#64b479] rounded-tl-[8px] rounded-br-[8px] rounded-tr-[8px] rounded-bl-[8px] justify-start bg-[#f0f8f2]">
                <div class="gap-[26px] w-full flex p-[8px] relative max-w-[66px] box-border items-start justify-start bg-[#f0f8f2]">
                  <img
                    src="/image/logo orang.png"
                    alt="instance"
                    width="50"
                    height="50"
                    class="w-full overflow-hidden max-w-[50px] box-border items-start flex-col justify-start"
                  />
                </div>
                <div class="w-full flex relative max-w-[125px] box-border items-center flex-col justify-start">
                  <div class="w-full max-w-[auto] mt-0 min-h-[auto] text-center mb-0">
                    <p class="text-[#919191] text-[18px] not-italic mt-0 text-center font-['Poppins',_sans-serif] font-semibold leading-[40px] mb-0 tracking-[0px] normal-case">
                      Total Donatur
                    </p>
                  </div>
                  <div class="w-full max-w-[auto] mt-0 min-h-[auto] text-center mb-0">
                    <p class="text-[#222831] text-[18px] not-italic mt-0 text-center font-['Poppins',_sans-serif] font-semibold leading-[40px] mb-0 tracking-[0px] normal-case">
                      1000
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="gap-[8px] w-full flex relative max-w-[932px] box-border items-start justify-start">
              <div class="gap-[8px] w-full flex p-[24px] relative max-w-[267px] [border-top:1px_solid_#64b479] [box-shadow:0px_0px_12px_0px_rgba(0,0,0,0.16)] box-border items-center [border-left:1px_solid_#64b479] [border-right:1px_solid_#64b479] [border-bottom:1px_solid_#64b479] rounded-tl-[8px] rounded-br-[8px] rounded-tr-[8px] rounded-bl-[8px] justify-start bg-[#f0f8f2]">
                <div class="gap-[26px] w-full flex p-[8px] relative max-w-[66px] box-border items-start justify-start bg-[#f0f8f2]">
                  <img
                    src="/image/logo love.png"
                    alt="instance"
                    width="50"
                    height="50"
                    class="w-full overflow-hidden max-w-[50px] box-border items-start flex-col justify-start"
                  />
                </div>
                <div class="w-full flex relative max-w-[145px] box-border items-center flex-col justify-start">
                  <div class="w-full max-w-[auto] mt-0 min-h-[auto] text-center mb-0">
                    <p class="text-[#919191] text-[18px] not-italic mt-0 text-center font-['Poppins',_sans-serif] font-semibold leading-[40px] mb-0 tracking-[0px] normal-case">
                      Donasi berjalan
                    </p>
                  </div>
                  <div class="w-full max-w-[auto] mt-0 min-h-[auto] text-center mb-0">
                    <p class="text-[#222831] text-[18px] not-italic mt-0 text-center font-['Poppins',_sans-serif] font-semibold leading-[40px] mb-0 tracking-[0px] normal-case">
                      150
                    </p>
                  </div>
                </div>
              </div>
              <div class="gap-[8px] w-full flex p-[24px] relative max-w-[255px] [border-top:1px_solid_#64b479] [box-shadow:0px_0px_12px_0px_rgba(0,0,0,0.16)] box-border items-center [border-left:1px_solid_#64b479] [border-right:1px_solid_#64b479] [border-bottom:1px_solid_#64b479] rounded-tl-[8px] rounded-br-[8px] rounded-tr-[8px] rounded-bl-[8px] justify-start bg-[#f0f8f2]">
                <div class="gap-[26px] w-full flex p-[8px] relative max-w-[66px] box-border items-start justify-start bg-[#f0f8f2]">
                  <img
                    src="/image/logo love.png"
                    alt="instance"
                    width="50"
                    height="50"
                    class="w-full overflow-hidden max-w-[50px] box-border items-start flex-col justify-start"
                  />
                </div>
                <div class="w-full flex relative max-w-[133px] box-border items-center flex-col justify-start">
                  <div class="w-full max-w-[auto] mt-0 min-h-[auto] text-center mb-0">
                    <p class="text-[#919191] text-[18px] not-italic mt-0 text-center font-['Poppins',_sans-serif] font-semibold leading-[40px] mb-0 tracking-[0px] normal-case">
                      Donasi Selesai
                    </p>
                  </div>
                  <div class="w-full max-w-[auto] mt-0 min-h-[auto] text-center mb-0">
                    <p class="text-[#222831] text-[18px] not-italic mt-0 text-center font-['Poppins',_sans-serif] font-semibold leading-[40px] mb-0 tracking-[0px] normal-case">
                      50
                    </p>
                  </div>
                </div>
              </div>
              <div class="gap-[8px] w-full flex p-[24px] relative max-w-[189px] [border-top:1px_solid_#64b479] [box-shadow:0px_0px_12px_0px_rgba(0,0,0,0.16)] box-border items-center [border-left:1px_solid_#64b479] [border-right:1px_solid_#64b479] [border-bottom:1px_solid_#64b479] rounded-tl-[8px] rounded-br-[8px] rounded-tr-[8px] rounded-bl-[8px] justify-start bg-[#f0f8f2]">
                <div class="gap-[26px] w-full flex p-[8px] relative max-w-[66px] box-border items-start justify-start bg-[#f0f8f2]">
                  <img
                    src="/image/logo salam.png"
                    alt="instance"
                    width="50"
                    height="50"
                    class="w-full overflow-hidden max-w-[50px] box-border items-start flex-col justify-start"
                  />
                </div>
                <div class="w-full flex relative max-w-[67px] box-border items-center flex-col justify-start h-[80px]">
                  <div class="w-full max-w-[auto] mt-0 min-h-[auto] text-center mb-0">
                    <p class="text-[#919191] text-[18px] not-italic mt-0 text-center font-['Poppins',_sans-serif] font-semibold leading-[20px] mb-0 tracking-[0px] normal-case">
                      Pick Up
                    </p>
                  </div>
                  <div class="w-full max-w-[auto] mt-0 min-h-[auto] text-center mb-0">
                    <p class="text-[#222831] text-[18px] not-italic mt-0 text-center font-['Poppins',_sans-serif] font-semibold leading-[40px] mb-0 tracking-[0px] normal-case">
                      50
                    </p>
                  </div>
                </div>
              </div>
              <div class="gap-[8px] w-full flex p-[24px] relative max-w-[197px] [border-top:1px_solid_#64b479] [box-shadow:0px_0px_12px_0px_rgba(0,0,0,0.16)] box-border items-center [border-left:1px_solid_#64b479] [border-right:1px_solid_#64b479] [border-bottom:1px_solid_#64b479] rounded-tl-[8px] rounded-br-[8px] rounded-tr-[8px] rounded-bl-[8px] justify-start bg-[#f0f8f2]">
                <div class="gap-[26px] w-full flex p-[8px] relative max-w-[66px] box-border items-start justify-start bg-[#f0f8f2]">
                  <img
                    src="/image/logo salam.png"
                    alt="instance"
                    width="50"
                    height="50"
                    class="w-full overflow-hidden max-w-[50px] box-border items-start flex-col justify-start"
                  />
                </div>
                <div class="w-full flex relative max-w-[75px] box-border items-center flex-col justify-start">
                  <div class="w-full max-w-[auto] mt-0 min-h-[auto] text-center mb-0">
                    <p class="text-[#919191] text-[18px] not-italic mt-0 text-center font-['Poppins',_sans-serif] font-semibold leading-[40px] mb-0 tracking-[0px] normal-case">
                      Drop Off
                    </p>
                  </div>
                  <div class="w-full max-w-[auto] mt-0 min-h-[auto] text-center mb-0">
                    <p class="text-[#222831] text-[18px] not-italic mt-0 text-center font-['Poppins',_sans-serif] font-semibold leading-[40px] mb-0 tracking-[0px] normal-case">
                      150
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        {/*  */}
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
        {/* ini button */}
        <div className="flex items-center  justify-start space-x-2 w-full">
          <button className="w-40 border rounded-3xl  border-gray-300 text-black px-4 py-2   hover:bg-green-600  mt-10 font-normal">
            Donasi Terbaru
          </button>
          <button className="w-40 border rounded-3xl  border-gray-300 text-black px-4 py-2   hover:bg-green-600 hover:text-white  mt-10 font-normal">
            Donasi Berjalan
          </button>
          <button className="w-40 border rounded-3xl  border-gray-300 text-black px-6 py-2  hover:bg-green-600 hover:text-white  mt-10 font-normal">
            Donasi Selesai
          </button>
        </div>
        {/*  */}
        <div class="mt-6">
          <div class="w-full flex gap-4 max-w-[1004px] items-start justify-between ">
            <div class="flex-1">
              <p class="text-[#64b479] text-[14px] font-['Poppins',_sans-serif] font-bold leading-[40px]">
                Foto
              </p>
            </div>
            <div class="flex-[1]">
              <p class="text-[#64b479] text-[14px] font-['Poppins',_sans-serif] font-bold leading-[40px]">
                Judul Donasi
              </p>
            </div>
            <div class="flex-1">
              <p class="text-[#64b479] text-[14px] font-['Poppins',_sans-serif] font-bold leading-[40px]">
                Mitra
              </p>
            </div>
            <div class="flex-1">
              <p class="text-[#64b479] text-[14px] font-['Poppins',_sans-serif] font-bold leading-[40px]">
                Lokasi
              </p>
            </div>
            <div class="flex-1">
              <p class="text-[#64b479] text-[14px] font-['Poppins',_sans-serif] font-bold leading-[40px]">
                Kategori
              </p>
            </div>
            <div class="flex-1">
              <p class="text-[#64b479] text-[14px] font-['Poppins',_sans-serif] font-bold leading-[40px]">
                Pengiriman
              </p>
            </div>
            <div class="flex-1">
              <p class="text-[#64b479] text-[14px] font-['Poppins',_sans-serif] font-bold leading-[40px]">
                Donatur
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <table class="table w-full">
          <tbody>
            <Link to="/admin/Data">
              <tr
                class="cursor-pointer hover:bg-gray-200"
                onclick="openModal()"
              >
                <td class="border-b border-gray-200 px-6 py-4 text-sm leading-5 text-gray-800">
                  <img src="/image/logo rumah.png" alt="Logo Rumah" />
                </td>
                <td class="border-b border-gray-200 px-6 py-4 text-sm leading-5 text-gray-800">
                  Baksos Unnes
                </td>
                <td class="border-b border-gray-200 px-6 py-4 text-sm leading-5 text-gray-800">
                  Badeg, Sridadi, Kec. Rembang, Kabupaten Rembang, Jawa Tengah
                  52272
                </td>
                <td class="border-b border-gray-200 px-6 py-4 text-sm leading-5 text-gray-800">
                  Anak-anak, Remaja
                </td>
                <td class="border-b border-gray-200 px-6 py-4 text-sm leading-5 text-gray-800">
                  Tidak Tersedia
                </td>
                <td class="border-b border-gray-200 px-6 py-4 text-sm leading-5 text-gray-800">
                  50
                </td>
              </tr>
              <tr
                class="cursor-pointer hover:bg-gray-200"
                onclick="openModal()"
              >
                <td class="border-b border-gray-200 px-6 py-4 text-sm leading-5 text-gray-800">
                  <img src="/image/logo rumah.png" alt="Logo Rumah" />
                </td>
                <td class="border-b border-gray-200 px-6 py-4 text-sm leading-5 text-gray-800">
                  Baksos Unnes
                </td>
                <td class="border-b border-gray-200 px-6 py-4 text-sm leading-5 text-gray-800">
                  Badeg, Sridadi, Kec. Rembang, Kabupaten Rembang, Jawa Tengah
                  52272
                </td>
                <td class="border-b border-gray-200 px-6 py-4 text-sm leading-5 text-gray-800">
                  Anak-anak, Remaja
                </td>
                <td class="border-b border-gray-200 px-6 py-4 text-sm leading-5 text-gray-800">
                  Tidak Tersedia
                </td>
                <td class="border-b border-gray-200 px-6 py-4 text-sm leading-5 text-gray-800">
                  50
                </td>
              </tr>
            </Link>
          </tbody>
        </table>
      </main>
    </>
  );
};

export default AdminMitraa;
