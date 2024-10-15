-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- Waktu pembuatan: 15 Okt 2024 pada 10.59
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `go-peduli`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `berita`
--

CREATE TABLE `berita` (
  `id` int(11) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `descripsi` text DEFAULT NULL,
  `author` varchar(150) DEFAULT NULL,
  `kategori` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `berita`
--

INSERT INTO `berita` (`id`, `img`, `date`, `title`, `descripsi`, `author`, `kategori`) VALUES
(2, 'caraousel1.png', '2024-06-26', 'Desa Terdampak Akibat Erupsi Gunung Ruang Menjadi Kota Mati', 'Erupsi Gunung Ruang pada April 2024 membawa dampak dahsyat bagi beberapa desa di sekitarnya, terutama Desa Laingpatehi dan Pumpente di Pulau Tagulandang, Sulawesi Utara. Kedua desa ini bagaikan menjadi kota mati, diselimuti abu vulkanik tebal dan kerusakan parah akibat terjangan material gunung berapi.\r\n\r\nSuasana sunyi senyap menyelimuti desa, bagaikan kehilangan denyut nadi kehidupan. Rumah-rumah penduduk hancur, terkubur abu, atau ditinggalkan penghuninya yang mengungsi demi keselamatan. Jalanan desa yang dulunya ramai kini tertutup abu tebal, tak terlihat aktivitas manusia maupun kendaraan.\r\n\r\nAbu vulkanik, bagaikan salju kelabu, menyelimuti seluruh permukaan desa. Pohon-pohon patah dan gersang, daun-daunnya menghitam terkena abu. Langit pun tampak kelam, tertutup awan tebal akibat letusan gunung.\r\n\r\nGambaran suram ini semakin diperparah dengan kurangnya aktivitas manusia. Hanya terlihat beberapa petugas yang membersihkan abu dan sisa-sisa kerusakan, serta sesekali penduduk yang kembali ke desa untuk memeriksa kondisi rumah mereka.\r\n\r\nErupsi Gunung Ruang telah mengubah Desa Laingpatehi dan Pumpente menjadi kota mati, meninggalkan luka mendalam bagi para penduduknya. Kini, mereka harus memulai kehidupan baru di tempat yang lebih aman, meninggalkan kenangan pahit di desa yang pernah menjadi rumah mereka.', 'Tim Lapangan', 'Berita'),
(3, 'caraousel2.png', '2024-05-15', 'Pemulihan Ekonomi Pasca Erupsi Gunung Ruang', 'Erupsi Gunung Ruang pada April 2024 tidak hanya meluluhlantakkan pemukiman warga di sekitarnya, tetapi juga melumpuhkan sektor ekonomi di wilayah tersebut. Aktivitas pertanian, perikanan, dan pariwisata yang menjadi mata pencaharian utama masyarakat terhenti akibat terjangan abu vulkanik dan kerusakan infrastruktur.\r\n\r\nNamun, di tengah kesedihan dan kesulitan, muncul semangat pantang menyerah dari masyarakat dan berbagai pihak untuk bangkit kembali. Upaya pemulihan ekonomi pasca erupsi Gunung Ruang pun mulai digulirkan, dengan fokus pada beberapa langkah berikut:\r\n\r\n1. Rehabilitasi Infrastruktur:\r\n\r\nPembangunan kembali rumah: Pemerintah dan organisasi non-pemerintah (NGO) bekerja sama untuk membangun kembali rumah-rumah penduduk yang hancur akibat erupsi.\r\nPemulihan infrastruktur: Jaringan jalan, jembatan, irigasi, dan fasilitas publik lainnya diperbaiki untuk mendukung aktivitas ekonomi.\r\n2. Bantuan Ekonomi:\r\n\r\nBantuan langsung: Pemerintah memberikan bantuan langsung kepada masyarakat terdampak untuk memenuhi kebutuhan dasar dan modal usaha.\r\nPelatihan dan pendampingan: Masyarakat diberikan pelatihan dan pendampingan untuk mengembangkan usaha baru atau meningkatkan keterampilan yang relevan dengan kondisi pasca erupsi.\r\n3. Pemberdayaan Ekonomi:\r\n\r\nPengembangan sektor alternatif: Diversifikasi usaha dengan mengembangkan sektor ekonomi baru yang lebih tahan terhadap bencana, seperti kerajinan tangan, pengolahan hasil pertanian, dan agrowisata.\r\nPemberdayaan UMKM: Dukungan terhadap UMKM lokal dengan memberikan pelatihan, pendanaan, dan akses pasar untuk membantu mereka kembali bangkit.\r\n4. Pemulihan Sektor Utama:\r\n\r\nPertanian: Rehabilitasi lahan pertanian yang terdampak abu vulkanik, bantuan benih dan pupuk, serta pendampingan untuk menerapkan teknik pertanian yang lebih tahan bencana.\r\nPerikanan: Pemulihan infrastruktur perikanan, bantuan bibit ikan, dan pelatihan untuk budidaya ikan yang lebih tahan terhadap perubahan lingkungan.\r\nPariwisata: Promosi wisata kembali ke daerah terdampak dengan membangun kembali daya tarik wisata dan infrastruktur pendukung.\r\nUpaya pemulihan ekonomi pasca erupsi Gunung Ruang masih terus berlangsung. Perjalanan pemulihan ini tidak mudah dan membutuhkan waktu, namun dengan kerjasama dan komitmen dari berbagai pihak, diharapkan masyarakat di wilayah terdampak dapat kembali bangkit dan membangun kehidupan yang lebih sejahtera.', 'Redaksi Ekonomi ', 'Berita'),
(4, 'caraousel3.png', '2024-07-01', 'Pendidikan di Tengah Bencana: Tetap Belajar di Situasi Sulit', 'Bencana alam dapat membawa dampak yang signifikan terhadap proses belajar mengajar, terutama bagi anak-anak di daerah terdampak. Sekolah hancur, guru dan murid mengungsi, dan akses terhadap bahan belajar menjadi terhambat.\r\n\r\nNamun, di tengah situasi yang sulit ini, tetap ada semangat untuk terus belajar. Berbagai upaya dilakukan untuk memastikan pendidikan tetap berjalan, meskipun dengan keterbatasan yang ada.\r\n\r\nBerikut beberapa contoh upaya yang dilakukan untuk menyelenggarakan pendidikan di tengah bencana:\r\n\r\nPembelajaran di tenda pengungsian: Guru-guru mendirikan tenda darurat atau memanfaatkan ruang-ruang yang masih aman di pengungsian untuk mengadakan kelas.\r\nPembelajaran jarak jauh: Teknologi dimanfaatkan untuk menyelenggarakan pembelajaran jarak jauh, seperti melalui radio, televisi, atau platform online.\r\nBahan belajar mandiri: Dibuat bahan belajar mandiri yang dapat dipelajari oleh murid tanpa harus bertatap muka dengan guru.\r\nDukungan psikologis: Guru dan tenaga psikolog memberikan dukungan psikologis kepada murid untuk membantu mereka mengatasi trauma dan kembali fokus pada belajar.\r\nMeskipun penuh dengan tantangan, pendidikan di tengah bencana memiliki peran penting untuk:\r\n\r\nMembantu murid kembali ke rutinitas: Proses belajar mengajar dapat membantu murid kembali ke rutinitas dan memberikan rasa normalitas dalam situasi yang penuh kekacauan.\r\nMemberikan harapan: Pendidikan memberikan harapan bagi murid untuk masa depan yang lebih baik.\r\nMembangun ketahanan: Melalui pendidikan, murid dapat belajar tentang bagaimana menghadapi situasi bencana dan membangun ketahanan diri.\r\nKisah-kisah inspiratif tentang kegigihan murid dan guru dalam belajar dan mengajar di tengah bencana menunjukkan bahwa semangat untuk belajar tidak pernah padam, bahkan dalam situasi yang paling sulit sekalipun.\r\n\r\nBerikut beberapa contoh kisah inspiratif:\r\n\r\nMurid di Haiti yang tetap bersekolah di bawah tenda darurat setelah gempa bumi dahsyat di tahun 2010.\r\nGuru di Filipina yang menggunakan perahu untuk mengantarkan bahan belajar kepada murid di pulau-pulau terpencil yang terkena dampak topan.\r\nAnak-anak di Suriah yang belajar di ruang bawah tanah sekolah untuk menghindari serangan udara.\r\nKisah-kisah ini memberikan motivasi bagi kita semua untuk terus berusaha dalam memberikan akses pendidikan yang berkualitas bagi semua anak, bahkan di tengah situasi yang penuh tantangan.', 'Tim Pendidikan', 'Berita'),
(5, 'image2.png', '2024-08-30', 'Kisah Inspiratif: Bangkit dari Bencana Alam', 'Di tengah kepiluan akibat terjangan bencana alam, selalu terselip kisah-kisah inspiratif yang membangkitkan semangat dan keyakinan. Kisah-kisah ini menjadi bukti nyata ketangguhan manusia dalam menghadapi rintangan dan kekuatan komunitas dalam saling membantu.\r\n\r\nSalah satu contoh kisah inspiratif datang dari Juminiati, seorang wanita berusia 40 tahun dari Desa Watuuri, Kecamatan Palolo, Kabupaten Sigi, Sulawesi Tengah. Pada tahun 2018, ia dan keluarganya menjadi korban gempa bumi dan tsunami yang meluluhlantakkan wilayahnya.\r\n\r\nDi tengah kepanikan dan kehancuran, Juminiati menunjukkan kegigihannya untuk menyelamatkan diri dan keluarganya. Ia berlari ke tempat yang lebih tinggi bersama suami dan kedua anaknya, meninggalkan semua harta bendanya.\r\n\r\nMeskipun kehilangan tempat tinggal dan harta benda, Juminiati tidak menyerah pada rasa putus asa. Ia bangkit dan mulai membantu sesama korban bencana. Bersama dengan para relawan, ia mendirikan dapur umum untuk menyediakan makanan bagi para pengungsi.\r\n\r\nKisah Juminiati hanyalah satu dari sekian banyak kisah inspiratif yang muncul pasca bencana alam. Di berbagai penjuru dunia, banyak orang yang menunjukkan ketangguhan, semangat, dan kemurahan hati dalam membantu sesama yang terkena dampak.', 'Tim Inspirasi', 'Berita'),
(7, 'pakaian.png', '2024-04-27', 'Memperpanjang Umur Pakai Pakaian', 'Mengklasifikasi Pakaian\r\nSetiap tahun, jutaan ton pakaian berakhir di tempat pembuangan sampah. Ironisnya, sebagian besar pakaian yang dibuang masih dalam kondisi baik dan bisa digunakan kembali. Sebelum Anda memutuskan untuk mendonasikan pakaian yang tidak lagi Anda pakai, ada beberapa langkah sederhana yang dapat Anda ambil untuk memastikan pakaian tersebut tetap dalam kondisi terbaiknya.\r\n\r\nCuci dengan Benar\r\nLangkah pertama dalam merawat pakaian yang tidak dipakai adalah dengan mengklasifikasikannya. Pisahkan pakaian berdasarkan jenisnya, seperti baju, celana, rok, atau jaket. Kemudian, kelompokkan pakaian berdasarkan kondisinya, seperti yang masih layak pakai, yang membutuhkan perbaikan kecil, dan yang sudah tidak dapat diperbaiki.\r\n\r\nPerbaiki Kerusakan Kecil\r\nSebelum menyimpan atau mendonasikan pakaian, pastikan untuk mencucinya dengan benar. Gunakan deterjen yang lembut dan hindari penggunaan pemutih yang keras, terutama untuk pakaian berwarna. Pastikan juga untuk memisahkan pakaian berwarna gelap dan terang untuk mencegah pewarnaan yang transfer.\r\n\r\nSimpan dengan Baik\r\nJika Anda menemukan pakaian yang memiliki kerusakan kecil, seperti lubang kecil atau jahitan yang lepas, pertimbangkan untuk memperbaikinya sebelum mendonasikannya. Anda bisa menggunakan keterampilan menjahit sederhana atau membawa pakaian tersebut ke tukang jahit untuk diperbaiki.\r\n\r\nPrioritaskan Kebutuhan Lokal\r\nSetelah pakaian dicuci dan diperbaiki (jika perlu), pastikan untuk menyimpannya dengan baik. Lipat pakaian dengan rapi untuk menghindari kerutan yang berlebihan. Tempatkan pakaian dalam wadah atau kotak penyimpanan yang bersih dan kedap udara untuk melindunginya dari debu, kelembaban, dan serangga.\r\n\r\nDonasikan dengan Kasih\r\nSaat memilih penerima donasi untuk pakaian Anda, prioritaskan kebutuhan lokal. Cari organisasi nirlaba atau lembaga amal di daerah Anda yang menerima donasi pakaian dan memiliki program distribusi yang terorganisir dengan baik. Dengan demikian, Anda dapat memastikan bahwa pakaian Anda akan langsung sampai kepada mereka yang membutuhkan dalam komunitas Anda.', 'Tim Kreatif', 'Berita'),
(8, '1719155528762.png', '2024-06-26', 'Bencana alam', 'Bencana alam', 'Tim Kreatif', 'Berita'),
(9, '1719156068957.png', '2024-06-18', 'Kecelakan Pesawat', 'Kecelakan Pesawat', 'Tim Lapangan', 'Berita');

-- --------------------------------------------------------

--
-- Struktur dari tabel `donasi`
--

CREATE TABLE `donasi` (
  `id` int(11) NOT NULL,
  `mitra` varchar(50) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `location` text DEFAULT NULL,
  `kategori` varchar(255) DEFAULT NULL,
  `layanan` varchar(255) DEFAULT NULL,
  `email` varchar(150) NOT NULL,
  `tanggal` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `donasi`
--

INSERT INTO `donasi` (`id`, `mitra`, `image`, `title`, `location`, `kategori`, `layanan`, `email`, `tanggal`) VALUES
(52, 'BersamaPeduli', '1717552266253.png', 'Panti Asuhan “Muawamah”', 'Jl. Jomblang Timur No.829, Lamper Kidul, Kec. Semarang Sel., Kota Semarang, Jawa Tengah 50249', 'Anak-Anak', 'Tersedia Layanan Pick Up', 'PeduliMuawamah@gmail.com', '2024-06-24'),
(53, 'Bersama Peduli', '1717552358135.png', 'Peduli Banjir Demak', 'Desa karanganyar Jalan Demak-Semarang, Kabupaten Demak, Jawa Tengah', 'Anak-Anak, Dewasa, Remaja', 'Tidak Tersedia Layanan Pick UP', 'GoCharity@gmail.com', '2024-06-27'),
(54, 'Peduli Bersama', '1717552461862.png', 'Peduli  Banjir Karang Anyar', 'Desa Karang Anyar Demak, Kabupaten Demak, Jawa Tengah', 'Dewasa, Anak-Anak', 'Tersedia Layanan Pick Up', 'GoCharity@gmail.com', '2024-06-25'),
(55, 'Peduli Bersama', '1717552579366.png', 'Panti Asuhan Darul Hadlonah ', 'Jl. Ra. Kartini Gg. Kulit No.37, Sawahan, Kec. Rembang, Kabupaten Rembang, Jawa Tengah 59215', 'Anak-Anak', 'Tersedia Layanan Pick Up', 'GoCharity@gmail.com', '2024-06-24'),
(56, 'Kita Peduli Bersama', '1717552673230.png', 'Peduli Tanah Longsor Lasem', 'Dukuh Deles, Desa Sendangcoyo, Kecamatan Lasem, Rembang ', 'Anak-Anak, Dewasa, Remaja', 'Tidak Tersedia Layanan Pick UP', 'GoCharity@gmail.com', '2024-06-26'),
(60, 'Peduli Kita', '1718711153357.png', 'Peduli Gempa Bumi', 'Bolaang Uki, Bolaang Mongondow Selatan (Bolsel), Sulawesi Utara, ', 'Anak-Anak, Remaja', 'Tersedia Layanan Pick Up', 'PeduliKita12@gmail.com', '2024-06-19');

-- --------------------------------------------------------

--
-- Struktur dari tabel `faq`
--

CREATE TABLE `faq` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `faq`
--

INSERT INTO `faq` (`id`, `title`, `description`) VALUES
(1, 'Bagaimana saya dapat melakukan donasi?', 'Anda dapat melakukan donasi dengan mengikuti langkah-langkah berikut:\n1. Kunjungi situs web kami dan temukan tombol \'Donasi Sekarang\'.\n2. Klik tombol tersebut dan isi formulir donasi dengan informasi yang diperlukan.\n3. Kemudian ketika sudah mengisi semua formulir selanjutnya klik tombol \'Donasi Sekarang\' pada formulir.\n4. Konfirmasikan donasi Anda.\n5. Selesai! Terima kasih atas dukungan Anda.'),
(2, 'Apakah semua tempat menyediakan layanan pengantaran pick up?', 'Tidak, tidak semua tempat menyediakan layanan pengantaran pick up. Silakan hubungi kami untuk informasi lebih lanjut tentang layanan pengantaran pick up di lokasi Anda.'),
(3, 'Bagaimana persyaratan pakaian yang dapat di donasikan?', 'Pakaian yang dapat didonasikan harus dalam kondisi yang layak pakai, bersih, dan utuh. Kami menerima pakaian baru maupun bekas dalam berbagai ukuran dan jenis. Namun, kami tidak menerima pakaian yang rusak atau terlalu usang. Untuk informasi lebih lanjut tentang persyaratan pakaian donasi, silakan hubungi kami.'),
(4, 'Apakah jika ingin melakukan donasi dikenai biaya tambahan?', 'Tidak, kami tidak mengenakan biaya tambahan untuk donasi. Seluruh pakaian yang Anda donasikan akan langsung digunakan untuk mendukung program-program kami. Namun, perlu diperhatikan bahwa beberapa pengiriman mungkin menimbulkan biaya transaksi dari pihak penyedia layanan jasa pengiriman Anda. Untuk informasi lebih lanjut tentang biaya pengiriman, silakan hubungi penyedia layanan pembayaran Anda.'),
(5, 'Bagaimana cara saya mengetahui bahwa donasi saya sudah diterima?', 'Setelah Anda melakukan donasi, Anda akan menerima konfirmasi melalui email atau pesan teks yang berisi rincian donasi Anda.'),
(6, 'Apakah donasi saya dapat dikembalikan?', 'Kebijakan pengembalian pakaian donasi dapat bervariasi tergantung pada organisasi atau yayasan penerima donasi. Sebagian besar donasi bersifat final dan tidak dapat dikembalikan. Namun, dalam situasi tertentu seperti kesalahan dalam pengiriman, beberapa organisasi mungkin mempertimbangkan pengembalian pakaian. Untuk informasi lebih lanjut, silakan hubungi kami atau periksa kebijakan pengembalian pakaian di situs web kami.'),
(7, 'Apakah saya bisa mendonasikan barang selain pakaian?', 'Tidak, kami sekarang hanya berfokus pada pakaian bekas dalam kondisi baik. Namun, pastikan untuk menghubungi kami terlebih dahulu untuk memastikan bahwa barang-barang tersebut sesuai dengan kebutuhan kami saat ini.'),
(8, 'Berapa lama waktu yang dibutuhkan untuk memproses donasi?', 'Waktu yang dibutuhkan untuk memproses donasi dapat bervariasi tergantung pada jasa pengiriman yang Anda pilih, volume donasi yang diterima, dan kebijakan internal organisasi. Namun, sebagian besar donasi akan diproses dalam waktu 1-3 hari kerja setelah diterima.'),
(9, 'Apakah saya bisa meminta tanda terima untuk donasi saya?', 'Tentu, jika Anda memerlukan tanda terima untuk donasi Anda, silakan hubungi kami setelah Anda menyelesaikan proses donasi. Kami akan dengan senang hati menyediakan tanda terima atau kwitansi untuk donasi Anda.'),
(10, 'Bagaimana cara saya berhenti berlangganan dari email newsletter?', 'Untuk berhenti berlangganan dari email newsletter kami, Anda dapat mengklik tautan \'Berhenti Berlangganan\' di bagian bawah setiap email yang Anda terima dari kami. Jika Anda mengalami kesulitan atau memiliki pertanyaan lebih lanjut, jangan ragu untuk menghubungi kami.');

-- --------------------------------------------------------

--
-- Struktur dari tabel `formulir_donasi`
--

CREATE TABLE `formulir_donasi` (
  `id` int(50) NOT NULL,
  `pilihLokasi` varchar(150) NOT NULL,
  `kategori` varchar(159) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `nomor` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `pengantaran` varchar(150) NOT NULL,
  `alamat` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `formulir_donasi`
--

INSERT INTO `formulir_donasi` (`id`, `pilihLokasi`, `kategori`, `nama`, `nomor`, `email`, `pengantaran`, `alamat`) VALUES
(1, 'Semarang', 'Anak-anak', 'saeful', '08656353453', 'kuird@gmail.com', 'Pick-up', 'Desai mojokerto'),
(18, 'Semarang', 'Dewasa', 'Jujun Junaedi', '086797979792', 'Jujun@gmail.com', 'PickUp', 'Londoh barat'),
(19, 'Semarang', 'Anak-anak', 'BersamaKita', '085234800343', 'BersamaKita@gmail.com', 'AntarSendiri', 'Kuningan'),
(20, 'Semarang', 'Dewasa', 'Jujun', '4664452452', 'jujun@gmail.com', 'PickUp', 'Jabar'),
(21, 'Semarang', 'Dewasa', 'Jujun', '08528350835', 'Juju@gmail.com', 'PickUp', 'Jawa Barat');

-- --------------------------------------------------------

--
-- Struktur dari tabel `laporan`
--

CREATE TABLE `laporan` (
  `id` int(11) NOT NULL,
  `img` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `title` varchar(255) NOT NULL,
  `deskripsi` text NOT NULL,
  `author` varchar(255) NOT NULL,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`content`)),
  `dokumentasi` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`dokumentasi`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `laporan`
--

INSERT INTO `laporan` (`id`, `img`, `date`, `title`, `deskripsi`, `author`, `content`, `dokumentasi`) VALUES
(1, 'program1.png', '2024-04-27', 'Laporan Pertanggung Jawaban Donasi Pakaian di Panti Asuhan Tarbiyatul Yatim: Membawa Harapan dan Kebahagiaan', 'Desa Laingpatehi dan Desa Pumpente tedampak erupsi Gunung Ruang paling parah', 'Tim Kreatif', '[\r\n        \"Panti asuhan memiliki peran yang sangat penting dalam masyarakat, terutama bagi anak-anak yang tidak memiliki orang tua atau tempat tinggal yang stabil. Di antara banyak panti asuhan yang berdedikasi untuk memberikan perlindungan dan pendidikan bagi anak-anak yang membutuhkan, Panti Asuhan Tarbiyatul Yatim telah menjadi tempat aman bagi banyak anak yatim di sekitar wilayah ini.\",\r\n        \"Donasi pakaian merupakan salah satu bentuk kepedulian masyarakat terhadap kesejahteraan anak-anak di panti asuhan. Dalam sebuah upaya untuk membantu memenuhi kebutuhan dasar mereka dan memberikan mereka rasa layak serta harga diri, masyarakat telah bersatu untuk menyumbangkan pakaian kepada Panti Asuhan Tarbiyatul Yatim.\",\r\n        \"Pada tanggal 23 November 2023, kami telah mengadakan sebuah acara penggalangan donasi yang luar biasa di mana masyarakat setempat, organisasi, dan individu dengan penuh sukarela berbagi pakaian mereka yang layak pakai. Acara ini mencerminkan semangat gotong royong dan kepedulian sosial yang kuat di antara kita.\",\r\n        \"Setelah proses pengumpulan donasi selesai, kami merasa terharu dan bersyukur atas respons yang luar biasa dari masyarakat. Berkat kebaikan hati mereka, kami berhasil mengumpulkan sejumlah besar pakaian yang bervariasi, mulai dari pakaian anak-anak hingga dewasa, dan dari pakaian sehari-hari hingga pakaian musim dingin.\",\r\n        \"Donasi pakaian yang diterima kemudian diserahkan kepada Panti Asuhan Tarbiyatul Yatim pada 23 November 2023. Saat kami tiba di panti asuhan tersebut, kami disambut dengan hangat oleh anak-anak yang penuh semangat. Mereka dengan antusias menyambut bantuan yang telah kami bawa, dan senyum bahagia terpancar di wajah mereka saat mereka melihat pakaian-pakaian baru yang akan menjadi milik mereka.\",\r\n        \"Proses penyerahan donasi dilakukan dengan penuh rasa hormat dan kehangatan. Kami menyaksikan bagaimana setiap anak dengan penuh kebahagiaan menerima pakaian baru mereka. Beberapa di antara mereka bahkan langsung mencoba pakaian baru mereka dan berpose dengan bangga di hadapan kami. Momennya begitu mengharukan dan memotivasi kami untuk terus berbuat baik kepada sesama.\",\r\n        \"Selain memberikan pakaian, kami juga berkesempatan untuk berinteraksi dengan anak-anak di panti asuhan ini. Kami mendengarkan kisah-kisah mereka, bermain bersama, dan berbagi tawa. Pengalaman ini mengingatkan kami akan pentingnya kehadiran, dukungan, dan kasih sayang bagi anak-anak yang kurang beruntung.\",\r\n        \"Dengan demikian, kami ingin menyampaikan ucapan terima kasih yang tulus kepada semua pihak yang telah turut serta dalam acara penggalangan donasi ini. Terima kasih atas kebaikan hati dan kepedulian Anda yang telah membawa kebahagiaan kepada anak-anak di Panti Asuhan Tarbiyatul Yatim. Semoga kebaikan ini menjadi inspirasi bagi kita semua untuk terus berbagi dan peduli terhadap sesama yang membutuhkan. Bersama, kita dapat menciptakan perubahan yang positif dalam masyarakat kita.\"\r\n    ]', '[\"pakaian.png\", \"pakaian.png\", \"pakaian.png\", \"pakaian.png\", \"pakaian.png\", \"pakaian.png\"]'),
(2, 'program2.jpg', '2024-04-27', 'Laporan Pertanggung Jawaban Donasi Pakaian di Panti Asuhan Tarbiyatul Yatim: Membawa Harapan dan Kebahagiaan', 'Desa Laingpatehi dan Desa Pumpente tedampak erupsi Gunung Ruang paling parah', 'Tim Kreatif', '[\r\n         \"Panti asuhan memiliki peran yang sangat penting dalam masyarakat, terutama bagi anak-anak yang tidak memiliki orang tua atau tempat tinggal yang stabil. Di antara banyak panti asuhan yang berdedikasi untuk memberikan perlindungan dan pendidikan bagi anak-anak yang membutuhkan, Panti Asuhan Tarbiyatul Yatim telah menjadi tempat aman bagi banyak anak yatim di sekitar wilayah ini.\",\r\n        \"Donasi pakaian merupakan salah satu bentuk kepedulian masyarakat terhadap kesejahteraan anak-anak di panti asuhan. Dalam sebuah upaya untuk membantu memenuhi kebutuhan dasar mereka dan memberikan mereka rasa layak serta harga diri, masyarakat telah bersatu untuk menyumbangkan pakaian kepada Panti Asuhan Tarbiyatul Yatim.\",\r\n        \"Pada tanggal 23 November 2023, kami telah mengadakan sebuah acara penggalangan donasi yang luar biasa di mana masyarakat setempat, organisasi, dan individu dengan penuh sukarela berbagi pakaian mereka yang layak pakai. Acara ini mencerminkan semangat gotong royong dan kepedulian sosial yang kuat di antara kita.\",\r\n        \"Setelah proses pengumpulan donasi selesai, kami merasa terharu dan bersyukur atas respons yang luar biasa dari masyarakat. Berkat kebaikan hati mereka, kami berhasil mengumpulkan sejumlah besar pakaian yang bervariasi, mulai dari pakaian anak-anak hingga dewasa, dan dari pakaian sehari-hari hingga pakaian musim dingin.\",\r\n        \"Donasi pakaian yang diterima kemudian diserahkan kepada Panti Asuhan Tarbiyatul Yatim pada 23 November 2023. Saat kami tiba di panti asuhan tersebut, kami disambut dengan hangat oleh anak-anak yang penuh semangat. Mereka dengan antusias menyambut bantuan yang telah kami bawa, dan senyum bahagia terpancar di wajah mereka saat mereka melihat pakaian-pakaian baru yang akan menjadi milik mereka.\",\r\n        \"Proses penyerahan donasi dilakukan dengan penuh rasa hormat dan kehangatan. Kami menyaksikan bagaimana setiap anak dengan penuh kebahagiaan menerima pakaian baru mereka. Beberapa di antara mereka bahkan langsung mencoba pakaian baru mereka dan berpose dengan bangga di hadapan kami. Momennya begitu mengharukan dan memotivasi kami untuk terus berbuat baik kepada sesama.\",\r\n        \"Selain memberikan pakaian, kami juga berkesempatan untuk berinteraksi dengan anak-anak di panti asuhan ini. Kami mendengarkan kisah-kisah mereka, bermain bersama, dan berbagi tawa. Pengalaman ini mengingatkan kami akan pentingnya kehadiran, dukungan, dan kasih sayang bagi anak-anak yang kurang beruntung.\",\r\n        \"Dengan demikian, kami ingin menyampaikan ucapan terima kasih yang tulus kepada semua pihak yang telah turut serta dalam acara penggalangan donasi ini. Terima kasih atas kebaikan hati dan kepedulian Anda yang telah membawa kebahagiaan kepada anak-anak di Panti Asuhan Tarbiyatul Yatim. Semoga kebaikan ini menjadi inspirasi bagi kita semua untuk terus berbagi dan peduli terhadap sesama yang membutuhkan. Bersama, kita dapat menciptakan perubahan yang positif dalam masyarakat kita.\"\r\n    ]', '[\"pakaian.png\", \"pakaian.png\", \"pakaian.png\", \"pakaian.png\", \"pakaian.png\", \"pakaian.png\"]'),
(3, 'program3.jpg', '2024-04-27', 'Laporan Pertanggung Jawaban Donasi Pakaian di Panti Asuhan Tarbiyatul Yatim: Membawa Harapan dan Kebahagiaan', 'Desa Laingpatehi dan Desa Pumpente tedampak erupsi Gunung Ruang paling parah', 'Tim Kreatif', '[\r\n        \"Panti asuhan memiliki peran yang sangat penting dalam masyarakat, terutama bagi anak-anak yang tidak memiliki orang tua atau tempat tinggal yang stabil. Di antara banyak panti asuhan yang berdedikasi untuk memberikan perlindungan dan pendidikan bagi anak-anak yang membutuhkan, Panti Asuhan Tarbiyatul Yatim telah menjadi tempat aman bagi banyak anak yatim di sekitar wilayah ini.\",\r\n        \"Donasi pakaian merupakan salah satu bentuk kepedulian masyarakat terhadap kesejahteraan anak-anak di panti asuhan. Dalam sebuah upaya untuk membantu memenuhi kebutuhan dasar mereka dan memberikan mereka rasa layak serta harga diri, masyarakat telah bersatu untuk menyumbangkan pakaian kepada Panti Asuhan Tarbiyatul Yatim.\",\r\n        \"Pada tanggal 23 November 2023, kami telah mengadakan sebuah acara penggalangan donasi yang luar biasa di mana masyarakat setempat, organisasi, dan individu dengan penuh sukarela berbagi pakaian mereka yang layak pakai. Acara ini mencerminkan semangat gotong royong dan kepedulian sosial yang kuat di antara kita.\",\r\n        \"Setelah proses pengumpulan donasi selesai, kami merasa terharu dan bersyukur atas respons yang luar biasa dari masyarakat. Berkat kebaikan hati mereka, kami berhasil mengumpulkan sejumlah besar pakaian yang bervariasi, mulai dari pakaian anak-anak hingga dewasa, dan dari pakaian sehari-hari hingga pakaian musim dingin.\",\r\n        \"Donasi pakaian yang diterima kemudian diserahkan kepada Panti Asuhan Tarbiyatul Yatim pada 23 November 2023. Saat kami tiba di panti asuhan tersebut, kami disambut dengan hangat oleh anak-anak yang penuh semangat. Mereka dengan antusias menyambut bantuan yang telah kami bawa, dan senyum bahagia terpancar di wajah mereka saat mereka melihat pakaian-pakaian baru yang akan menjadi milik mereka.\",\r\n        \"Proses penyerahan donasi dilakukan dengan penuh rasa hormat dan kehangatan. Kami menyaksikan bagaimana setiap anak dengan penuh kebahagiaan menerima pakaian baru mereka. Beberapa di antara mereka bahkan langsung mencoba pakaian baru mereka dan berpose dengan bangga di hadapan kami. Momennya begitu mengharukan dan memotivasi kami untuk terus berbuat baik kepada sesama.\",\r\n        \"Selain memberikan pakaian, kami juga berkesempatan untuk berinteraksi dengan anak-anak di panti asuhan ini. Kami mendengarkan kisah-kisah mereka, bermain bersama, dan berbagi tawa. Pengalaman ini mengingatkan kami akan pentingnya kehadiran, dukungan, dan kasih sayang bagi anak-anak yang kurang beruntung.\",\r\n        \"Dengan demikian, kami ingin menyampaikan ucapan terima kasih yang tulus kepada semua pihak yang telah turut serta dalam acara penggalangan donasi ini. Terima kasih atas kebaikan hati dan kepedulian Anda yang telah membawa kebahagiaan kepada anak-anak di Panti Asuhan Tarbiyatul Yatim. Semoga kebaikan ini menjadi inspirasi bagi kita semua untuk terus berbagi dan peduli terhadap sesama yang membutuhkan. Bersama, kita dapat menciptakan perubahan yang positif dalam masyarakat kita.\"\r\n    ]', '[\"pakaian.png\", \"pakaian.png\", \"pakaian.png\", \"pakaian.png\", \"pakaian.png\", \"pakaian.png\"]');

-- --------------------------------------------------------

--
-- Struktur dari tabel `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `login`
--

INSERT INTO `login` (`id`, `username`, `password`) VALUES
(1, 'admin', '$2b$10$WdUDm7oSUOpF1aMO8.MJgORhuf3dylRFmYdn5jp4tEGY7AsSDaH02');

-- --------------------------------------------------------

--
-- Struktur dari tabel `mitra_formulir`
--

CREATE TABLE `mitra_formulir` (
  `id` int(11) NOT NULL,
  `judul_donasi` varchar(255) NOT NULL,
  `lokasi` varchar(255) NOT NULL,
  `pengantaran` enum('Tersedia Layanan Pick Up','Tidak Tersedia Layanan Pick UP') NOT NULL,
  `tanggal_akhir` date NOT NULL,
  `nama_mitra` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `kategori` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`kategori`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `mitra_formulir`
--

INSERT INTO `mitra_formulir` (`id`, `judul_donasi`, `lokasi`, `pengantaran`, `tanggal_akhir`, `nama_mitra`, `email`, `kategori`) VALUES
(1, 'Buku untuk Sekolah', 'Jakarta', 'Tersedia Layanan Pick Up', '2024-12-31', 'Sekolah ABC', 'sekolaabc@example.com', '[\"Pendidikan\",\"Kesehatan\"]'),
(2, 'Peduli sesama ', 'Semarang', 'Tersedia Layanan Pick Up', '2024-06-27', 'Ayo Peduli', 'AyoPeduli12@gmail.com', '[\"Dewasa\",\"Anak-Anak\"]'),
(3, 'Peduli sesama ', 'Banjarmasin', 'Tersedia Layanan Pick Up', '2024-06-27', 'Ayo Peduli', 'AyoPeduli12@gmail.com', '[\"Dewasa\",\"Anak-Anak\"]'),
(4, 'Peduli sesama Bersama', 'Semarang', 'Tersedia Layanan Pick Up', '2024-07-04', 'Bersama Kita Peduli', 'BersamaKitaPeduli1243@gmail.com', '[\"Anak-Anak\"]'),
(5, 'Peduli sesama Manusia', 'Banjarmasin', 'Tidak Tersedia Layanan Pick UP', '2024-06-24', 'Ayo Peduli', 'BersamaKitaPeduli1243@gmail.com', '[\"Remaja\",\"Anak-Anak\"]'),
(6, 'Ayo Peduli', 'Banjarmasin', 'Tersedia Layanan Pick Up', '2024-06-03', 'Go Peduli', 'goMitra12@gmail.com', '[\"Dewasa\"]'),
(7, 'Peduli sesama Bersama', 'Semarang', 'Tidak Tersedia Layanan Pick UP', '2024-06-25', 'Ayo Peduli', 'BersamaKitaPeduli1243@gmail.com', '[\"Anak-Anak\",\"Dewasa\"]');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pilar`
--

CREATE TABLE `pilar` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `pilar`
--

INSERT INTO `pilar` (`id`, `title`, `description`) VALUES
(1, 'Go Transparancy', 'Transparansi dalam volunteer dan Laporan Pertanggung jawaban'),
(2, 'Go Awareness', 'Transparansi dalam volunteer dan Laporan Pertanggung jawaban'),
(3, 'Go Responsible', 'Transparansi dalam volunteer dan Laporan Pertanggung jawaban'),
(4, 'Go Invative and Creative', 'Transparansi dalam volunteer dan Laporan Pertanggung jawaban');

-- --------------------------------------------------------

--
-- Struktur dari tabel `program`
--

CREATE TABLE `program` (
  `id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `program`
--

INSERT INTO `program` (`id`, `image`, `title`, `description`) VALUES
(1, '/image/program1.png', 'Panti Asuhan “Tarbiyatul Yatim”', 'Report (23 November 2024)'),
(2, '/image/program2.jpg', 'Panti Asuhan “Tarbiyatul Yatim”', 'Report (23 November 2024)'),
(3, '/image/program3.jpg', 'Panti Asuhan “Tarbiyatul Yatim”', 'Report (23 November 2024)'),
(4, '/image/program3.jpg', 'Panti Asuhan “Tarbiyatul Yatim”', 'Report (23 November 2024)'),
(5, '/image/program3.jpg', 'Panti Asuhan “Tarbiyatul Yatim”', 'Report (23 November 2024)'),
(6, '/image/program3.jpg', 'Panti Asuhan “Tarbiyatul Yatim”', 'Report (23 November 2024)');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `berita`
--
ALTER TABLE `berita`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `donasi`
--
ALTER TABLE `donasi`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `faq`
--
ALTER TABLE `faq`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `formulir_donasi`
--
ALTER TABLE `formulir_donasi`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `laporan`
--
ALTER TABLE `laporan`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `mitra_formulir`
--
ALTER TABLE `mitra_formulir`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `pilar`
--
ALTER TABLE `pilar`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `program`
--
ALTER TABLE `program`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `berita`
--
ALTER TABLE `berita`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `donasi`
--
ALTER TABLE `donasi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT untuk tabel `faq`
--
ALTER TABLE `faq`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `formulir_donasi`
--
ALTER TABLE `formulir_donasi`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT untuk tabel `laporan`
--
ALTER TABLE `laporan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `mitra_formulir`
--
ALTER TABLE `mitra_formulir`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `pilar`
--
ALTER TABLE `pilar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
