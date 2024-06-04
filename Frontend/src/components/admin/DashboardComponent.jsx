import React from 'react'

const DashboardComponent = () => {
  return (
    <>
     <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-xl font-bold mb-4">Bantuan Anda Sangat Diperlukan</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-cover bg-center h-48 rounded-lg" style={{ backgroundImage: "url('path/to/your/image1.jpg')" }}>
            <div className="bg-black bg-opacity-50 h-full flex items-center justify-center text-white font-bold">
              Bantuan Sosial Untuk Panti Asuhan
            </div>
          </div>
          <div className="bg-cover bg-center h-48 rounded-lg" style={{ backgroundImage: "url('path/to/your/image2.jpg')" }}>
            <div className="bg-black bg-opacity-50 h-full flex items-center justify-center text-white font-bold">
              Bantuanmu sangat di butuhkan
            </div>
          </div>
          <div className="bg-cover bg-center h-48 rounded-lg" style={{ backgroundImage: "url('path/to/your/image3.jpg')" }}>
            <div className="bg-black bg-opacity-50 h-full flex items-center justify-center text-white font-bold">
              Bantuan Sosial Untuk Masyarakat Terkena Bencana Alam
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Go Peduli</h2>
          <p>Go Peduli merupakan platfrom untuk mempermudah kegiatan donasi pakaian secara cepat, tepat, dan terpercaya</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <div className="text-green-500">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div>
              <p className="font-semibold">Hubungi Kami</p>
              <p>+62812345678912</p>
              <p>GoCharity@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-green-500">
              <i className="fas fa-users"></i>
            </div>
            <div>
              <p className="font-semibold">Media Sosial</p>
              <div className="flex space-x-2">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-tiktok"></i>
                <i className="fab fa-whatsapp"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-green-100 p-4 rounded-lg text-center">
            <p className="text-lg font-bold">100</p>
            <p>Total Mitra</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg text-center">
            <p className="text-lg font-bold">200</p>
            <p>Total Donasi</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg text-center">
            <p className="text-lg font-bold">1000</p>
            <p>Total Donatur</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg text-center">
            <p className="text-lg font-bold">150</p>
            <p>Donasi berjalan</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg text-center">
            <p className="text-lg font-bold">50</p>
            <p>Donasi Selesai</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg text-center">
            <p className="text-lg font-bold">50</p>
            <p>Pick Up</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg text-center">
            <p className="text-lg font-bold">150</p>
            <p>Drop Off</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default DashboardComponent