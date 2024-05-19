import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const FullArticle = () => {
  return (
    <>
    <Navbar/>
    <div className="container px-7 ">
      <div className="text-center">

      <h1 className="my-4 font-bold text-3xl">Memperpanjang Umur Pakai Pakaian</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/image/user-icon.png" alt="User Icon" style={{ width: '20px', height: '20px' }} />
          <span>Tim Kreatif</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/image/calender-icon.png" alt="Calendar Icon" style={{ width: '20px', height: '20px' }} />
          <span>Sabtu, 27 April 2024</span>
        </div>
      </div>
        <div className='flex justify-center pb-5 gap-4 m-6'></div>
      </div>
      <div className="flex justify-center items-center text-center mx-auto">

      <img src="/image/pakaian.png" alt="" className="flex justify-center items-center text-center mx-auto w-[900px] h-[350px]"/>
      </div>

      <div className='flex justify-center pb-5 gap-4 m-6'></div>
      <div>
      <p>
        Setiap tahun, jutaan ton pakaian berakhir di tempat pembuangan sampah. Ironisnya, sebagian besar pakaian yang dibuang masih dalam kondisi baik dan bisa digunakan kembali. Sebelum Anda memutuskan untuk mendonasikan pakaian yang tidak lagi Anda pakai, ada beberapa langkah sederhana yang dapat Anda ambil untuk memastikan pakaian tersebut tetap dalam kondisi terbaiknya.
      </p>
      <h2 className="font-bold py-3">Mengklasifikasi Pakaian</h2>
      <p>
        Langkah pertama dalam merawat pakaian yang tidak dipakai adalah dengan mengklasifikasikannya. Pisahkan pakaian berdasarkan jenisnya, seperti baju, celana, rok, atau jaket. Kemudian, kelompokkan pakaian berdasarkan kondisinya, seperti yang masih layak pakai, yang membutuhkan perbaikan kecil, dan yang sudah tidak dapat diperbaiki.
      </p>
      <h2 className="font-bold py-3">Cuci dengan Benar</h2>
      <p>
        Sebelum menyimpan atau mendonasikan pakaian, pastikan untuk mencucinya dengan benar. Gunakan deterjen yang lembut dan hindari penggunaan pemutih yang keras, terutama untuk pakaian berwarna. Pastikan juga untuk memisahkan pakaian berwarna gelap dan terang untuk mencegah pewarnaan yang transfer.
      </p>
      <h2 className="font-bold py-3">Perbaiki Kerusakan Kecil</h2>
      <p>
        Jika Anda menemukan pakaian yang memiliki kerusakan kecil, seperti lubang kecil atau jahitan yang lepas, pertimbangkan untuk memperbaikinya sebelum mendonasikannya. Anda bisa menggunakan keterampilan menjahit sederhana atau membawa pakaian tersebut ke tukang jahit untuk diperbaiki.
      </p>
      <h2 className="font-bold py-3">Simpan dengan Baik</h2>
      <p>
        Setelah pakaian dicuci dan diperbaiki (jika perlu), pastikan untuk menyimpannya dengan baik. Lipat pakaian dengan rapi untuk menghindari kerutan yang berlebihan. Tempatkan pakaian dalam wadah atau kotak penyimpanan yang bersih dan kedap udara untuk melindunginya dari debu, kelembaban, dan serangga.
      </p>
      <h2 className="font-bold py-3">Prioritaskan Kebutuhan Lokal</h2>
      <p>
        Saat memilih penerima donasi untuk pakaian Anda, prioritaskan kebutuhan lokal. Cari organisasi nirlaba atau lembaga amal di daerah Anda yang menerima donasi pakaian dan memiliki program distribusi yang terorganisir dengan baik. Dengan demikian, Anda dapat memastikan bahwa pakaian Anda akan langsung sampai kepada mereka yang membutuhkan dalam komunitas Anda.
      </p>
      <h2 className="font-bold py-3">Donasikan dengan Kasih</h2>
      <p>
        Ketika Anda siap untuk mendonasikan pakaian, lakukan dengan penuh kasih. Pastikan untuk membersihkan pakaian dengan benar dan melipatnya dengan rapi sebelum diserahkan. Menyumbangkan pakaian yang masih berkualitas adalah cara yang baik untuk membantu mereka yang membutuhkan sambil mengurangi limbah tekstil yang berakhir di tempat pembuangan sampah.
      </p>
      <p>
        Dengan mengikuti langkah-langkah sederhana ini, Anda dapat memperpanjang umur pakai pakaian Anda, memberikan bantuan kepada mereka yang membutuhkan, dan mengurangi dampak negatif terhadap lingkungan.
      </p>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default FullArticle;
