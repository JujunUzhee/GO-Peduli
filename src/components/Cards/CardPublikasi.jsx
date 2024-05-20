import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const CardPublikasi = () => {
  const navigate = useNavigate()
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full h-44"
        src="/image/caraousel1.png"
        alt="Placeholder"
      />
      <div className="px-6 py-4 bg-gray-50 rounded-tr-3xl">
        <div className="flex justify-between">
          <div className="flex w-[102px] h-[32px] bg-GreenLight text-Green justify-center items-center rounded-xl">
            <p className="text-center">News</p>
          </div>
          <p className="text-sm font-semibold ml-4 mt-2">14 November 2023</p>
        </div>
        <div className="font-bold text-md mb-2 mt-4">
          Desa terdampak erupsi Gunung Ruang menjadi kota mati.
        </div>
        <p className="text-sm">
          Desa Laingpatehi dan Desa Pumpente tedampak erupsi Gunung Ruang paling parah
        </p>
        <Link
          className="inline-flex items-center gap-2 rounded border border-Green px-2 py-2 mt-4 text-Green hover:bg-Green hover:text-white focus:outline-none focus:ring active:bg-GreenLight"
          to="/FullArticle"
        >
          <span  onClick={() => navigate("berita/fuul-article")} className="text-sm font-normal"> Read More </span>
          <svg
            className="size-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default CardPublikasi;
