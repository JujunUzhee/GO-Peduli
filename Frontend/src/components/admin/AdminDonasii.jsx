import React from 'react'

const AdminDonasi = () => {
  return (
   <>
    <main className="flex-grow p-6 bg-white rounded-xl ml-5 mt-4 h-full mr-5">
        <div className="flex justify-between mb-6">
          <div>
            <h1 className="text-xl font-semibold">Dashboard / Donasi</h1>
          </div>
        </div>
        <div className="grid gap-6 bg-loginLight">
          <table className="min-w-full ">
            <thead>
              <tr>
                <th className="py-2 px-4">Mitra</th>
                <th className="py-2 px-4">Judul</th>
                <th className="py-2 px-4">Lokasi</th>
                <th className="py-2 px-4">Kategori</th>
                <th className="py-2 px-4">Pengantaran</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Gambar</th>
                <th className="py-2 px-4">Tanggal Akhir</th>
              </tr>
            </thead>
            <tbody className='bg-white'>
              <tr>
                <td className="py-2 px-4">Boksos Unnes</td>
                <td className="py-2 px-4">Peduli Panti Asuhan Darul Falah</td>
                <td className="py-2 px-4">Badeg, Sridadi, Kec. Rembang, Kabupaten Rembang, Jawa Tengah 52277</td>
                <td className="py-2 px-4">Anak-anak, Remaja</td>
                <td className="py-2 px-4">Tidak Tersedia Pickup</td>
                <td className="py-2 px-4">boksounnes@gmail.com</td>
                <td className="py-2 px-4">
                  <img src="../image/admin.jpg" alt="Admin" className='rounded-2xl shadow-lg border border-slate-200 w-24'/>
                </td>
                <td className="py-2 px-4">12/12/2024</td>
              </tr>
            </tbody>
          </table>
          <div className="flex items-center ml-4 justify-between">
            <div>
            <input type="checkbox" id="select-all" className="rounded" />
            <label htmlFor="select-all" className="ml-2 text-sm font-medium">Pilih Semua</label>
            </div>
        
            <button className="border border-gray-300 text-white px-4 py-2 rounded-md bg-Green hover:bg-green-600 mr-4 font-bold">
            Terapkan
          </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Buat Baru</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Judul Donasi"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Lokasi"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
                />
                <div className="relative">
                  <select
                    id="pengantaran"
                    aria-label="Pengantaran"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
                  >
                    <option value="">Nama Mitra</option>
                  </select>
                </div>
                <div className="relative">
                  <select
                    id="tanggal-akhir"
                    aria-label="Tanggal Akhir"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
                  >
                    <option value="">Nama Mitra</option>
                  </select>
                </div>
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Nama Mitra"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email Mitra"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
                />
                <div className="relative">
                  <select
                    id="kategori"
                    aria-label="Kategori"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
                  >
                    <option value="">Kategori</option>
                  </select>
                </div>
                <div className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer">
                  <span className="text-sm text-gray-500">Mohon Unggah dokumen file jpg, png, svg</span>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 bg-[#4CAF50] text-white py-2 rounded-md hover:bg-[#45a049]">
              Buat Postingan
            </button>
          </div>
        </div>
      </main>
   </>
  )
}

export default AdminDonasi