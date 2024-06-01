-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 01 Jun 2024 pada 12.15
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `donasi`
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
  `descripsi` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `berita`
--

INSERT INTO `berita` (`id`, `img`, `date`, `title`, `descripsi`) VALUES
(1, '/image/pakaian.png', '2024-04-27', 'Memperpanjang Umur Pakai Pakaian', 'Desa Laingpatehi dan Desa Pumpente tedampak erupsi Gunung Ruang paling parah'),
(2, '/image/caraousel1.png', '2023-11-21', 'Desa Terdampak Erupsi Gunung Ruang Menjadi Kota Mati', 'Desa Laingpatehi dan Desa Pumpente terdampak erupsi Gunung Ruang paling parah'),
(3, '/image/caraousel2.png', '2024-05-15', 'Pemulihan Ekonomi Pasca Erupsi Gunung Ruang', 'Upaya pemerintah dan masyarakat dalam memulihkan perekonomian setelah bencana'),
(4, '/image/caraousel3.png', '2024-07-01', 'Pendidikan di Tengah Bencana: Tetap Belajar di Situasi Sulit', 'Bagaimana anak-anak tetap mendapatkan pendidikan meski berada di pengungsian'),
(5, '/image/caraousel4.png', '2024-08-30', 'Kisah Inspiratif: Bangkit dari Bencana Alam', 'Cerita warga yang berhasil bangkit kembali setelah erupsi Gunung Ruang');

-- --------------------------------------------------------

--
-- Struktur dari tabel `content`
--

CREATE TABLE `content` (
  `berita_id` int(11) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `content`
--

INSERT INTO `content` (`berita_id`, `author`, `date`, `image`) VALUES
(1, 'Tim Kreatif', '2024-04-27', '/image/pakaian.png'),
(2, 'Tim Lapangan', '2023-11-21', '/image/caraousel1.png'),
(3, 'Redaksi Ekonomi', '2024-05-15', '/image/caraousel2.png'),
(4, 'Tim Pendidikan', '2024-07-01', '/image/caraousel3.png'),
(5, 'Tim Inspirasi', '2024-08-30', '/image/caraousel4.png');

-- --------------------------------------------------------

--
-- Struktur dari tabel `donasi`
--

CREATE TABLE `donasi` (
  `id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `location` text DEFAULT NULL,
  `kategori` varchar(255) DEFAULT NULL,
  `layanan` varchar(255) DEFAULT NULL,
  `tanggal` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `donasi`
--

INSERT INTO `donasi` (`id`, `image`, `title`, `location`, `kategori`, `layanan`, `tanggal`) VALUES
(1, '/image/program1.png', 'Panti Asuhan “Muawamah”', 'Jl. Jomblang Timur No.829, Lamper Kidul, Kec. Semarang Sel., Kota Semarang, Jawa Tengah 50249', 'Anak-Anak (3-10 tahun)', 'Tersedia Layanan Pick Up', '2024-05-24'),
(2, '/image/program1.png', 'Peduli Banjir Demak', 'Desa karanganyar Jalan Demak-Semarang, Kabupaten Demak, Jawa Tengah', 'Anak-Anak, Dewasa, Remaja', 'Tidak Tersedia Layanan Pick Up', '2024-05-27'),
(3, '/image/program1.png', 'Peduli  Gunung Argo', 'Jl. Jomblang Timur No.829, Lamper Kidul, Kec. Semarang Sel., Kota Semarang, Jawa Tengah 50249', 'Dewasa, Anak-anak', 'Tersedia Layanan Pick Up', '2024-05-25');

-- --------------------------------------------------------

--
-- Struktur dari tabel `formulir_mitra`
--

CREATE TABLE `formulir_mitra` (
  `id` int(11) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `nowa` varchar(12) NOT NULL,
  `email` varchar(50) NOT NULL,
  `lokasi` varchar(255) NOT NULL,
  `kategori_pakaian` varchar(255) NOT NULL,
  `pengantar` varchar(50) NOT NULL,
  `alamat` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `formulir_mitra`
--

INSERT INTO `formulir_mitra` (`id`, `nama`, `nowa`, `email`, `lokasi`, `kategori_pakaian`, `pengantar`, `alamat`) VALUES
(1, 'Dicky', '082929282', 'diki@mail.com', 'padang', 'f', 'penga', 'Padang'),
(2, 'Test', '089299272', 'emailtest@gmail.com', 'Padang', 'ENtah', 'BG', 'NNNN');

-- --------------------------------------------------------

--
-- Struktur dari tabel `paragraphs`
--

CREATE TABLE `paragraphs` (
  `id` int(11) NOT NULL,
  `berita_id` int(11) DEFAULT NULL,
  `paragraph` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `paragraphs`
--

INSERT INTO `paragraphs` (`id`, `berita_id`, `paragraph`) VALUES
(1, 1, 'Setiap tahun, jutaan ton pakaian berakhir di tempat pembuangan sampah. Ironisnya, sebagian besar pakaian yang dibuang masih dalam kondisi baik dan bisa digunakan kembali. Sebelum Anda memutuskan untuk mendonasikan pakaian yang tidak lagi Anda pakai, ada beberapa langkah sederhana yang dapat Anda ambil untuk memastikan pakaian tersebut tetap dalam kondisi terbaiknya.'),
(2, 1, 'Langkah pertama dalam merawat pakaian yang tidak dipakai adalah dengan mengklasifikasikannya. Pisahkan pakaian berdasarkan jenisnya, seperti baju, celana, rok, atau jaket. Kemudian, kelompokkan pakaian berdasarkan kondisinya, seperti yang masih layak pakai, yang membutuhkan perbaikan kecil, dan yang sudah tidak dapat diperbaiki.'),
(3, 1, 'Sebelum menyimpan atau mendonasikan pakaian, pastikan untuk mencucinya dengan benar. Gunakan deterjen yang lembut dan hindari penggunaan pemutih yang keras, terutama untuk pakaian berwarna. Pastikan juga untuk memisahkan pakaian berwarna gelap dan terang untuk mencegah pewarnaan yang transfer.'),
(4, 1, 'Jika Anda menemukan pakaian yang memiliki kerusakan kecil, seperti lubang kecil atau jahitan yang lepas, pertimbangkan untuk memperbaikinya sebelum mendonasikannya. Anda bisa menggunakan keterampilan menjahit sederhana atau membawa pakaian tersebut ke tukang jahit untuk diperbaiki.'),
(5, 1, 'Setelah pakaian dicuci dan diperbaiki (jika perlu), pastikan untuk menyimpannya dengan baik. Lipat pakaian dengan rapi untuk menghindari kerutan yang berlebihan. Tempatkan pakaian dalam wadah atau kotak penyimpanan yang bersih dan kedap udara untuk melindunginya dari debu, kelembaban, dan serangga.'),
(6, 1, 'Saat memilih penerima donasi untuk pakaian Anda, prioritaskan kebutuhan lokal. Cari organisasi nirlaba atau lembaga amal di daerah Anda yang menerima donasi pakaian dan memiliki program distribusi yang terorganisir dengan baik. Dengan demikian, Anda dapat memastikan bahwa pakaian Anda akan langsung sampai kepada mereka yang membutuhkan dalam komunitas Anda.'),
(7, 1, 'Ketika Anda siap untuk mendonasikan pakaian, lakukan dengan penuh kasih. Pastikan untuk membersihkan pakaian dengan benar dan melipatnya dengan rapi sebelum diserahkan. Menyumbangkan pakaian yang masih berkualitas adalah cara yang baik untuk membantu mereka yang membutuhkan sambil mengurangi limbah tekstil yang berakhir di tempat pembuangan sampah.'),
(8, 1, 'Dengan mengikuti langkah-langkah sederhana ini, Anda dapat memperpanjang umur pakai pakaian Anda, memberikan bantuan kepada mereka yang membutuhkan, dan mengurangi dampak negatif terhadap lingkungan.'),
(9, 2, 'Erupsi Gunung Ruang yang terjadi beberapa waktu lalu telah mengubah wajah Desa Laingpatehi dan Desa Pumpente. Kedua desa tersebut kini terlihat seperti kota mati, dengan rumah-rumah yang hancur dan jalanan yang sepi.'),
(10, 2, 'Warga yang tersisa hidup dalam ketakutan akan erupsi susulan. Banyak dari mereka yang telah mengungsi ke daerah yang lebih aman, meninggalkan harta benda mereka.'),
(11, 2, 'Tim penyelamat terus bekerja tanpa lelah untuk membantu evakuasi dan memberikan bantuan kepada korban yang masih berada di daerah terdampak.'),
(12, 2, 'Pemerintah setempat telah mendirikan posko-posko bantuan dan menyediakan tempat penampungan sementara bagi para pengungsi.'),
(13, 2, 'Meski bantuan terus berdatangan, kondisi di lapangan masih sangat memprihatinkan. Kebutuhan akan makanan, air bersih, dan obat-obatan sangat mendesak.'),
(14, 2, 'Dalam situasi ini, solidaritas antarwarga dan bantuan dari berbagai pihak sangat diperlukan untuk meringankan beban para korban erupsi.'),
(15, 3, 'Setelah erupsi Gunung Ruang, pemerintah bersama masyarakat berupaya keras untuk memulihkan kondisi ekonomi yang terpukul. Berbagai program pemulihan ekonomi telah diluncurkan untuk membantu warga yang kehilangan mata pencaharian.'),
(16, 3, 'Sektor pertanian yang menjadi tulang punggung ekonomi daerah ini mengalami kerusakan parah. Banyak lahan pertanian yang tertutup abu vulkanik, membuat petani kehilangan sumber penghasilan utama mereka.'),
(17, 3, 'Untuk membantu para petani, pemerintah memberikan bantuan bibit dan alat pertanian, serta mengadakan pelatihan untuk teknik pertanian yang lebih tangguh terhadap bencana.'),
(18, 3, 'Selain itu, sektor pariwisata juga mendapatkan perhatian khusus. Pemerintah berusaha mempromosikan kembali daerah tersebut sebagai destinasi wisata, dengan menekankan pada keindahan alam yang kembali pulih.'),
(19, 3, 'Berbagai kegiatan promosi dan festival lokal diadakan untuk menarik wisatawan dan membangkitkan kembali sektor pariwisata yang sempat terhenti.'),
(20, 3, 'Dengan kerjasama antara pemerintah, masyarakat, dan berbagai pihak terkait, diharapkan perekonomian daerah ini dapat bangkit kembali dan semakin tangguh menghadapi bencana di masa depan.'),
(21, 4, 'Di tengah situasi bencana, pendidikan sering kali menjadi sektor yang terlupakan. Namun, di daerah terdampak erupsi Gunung Ruang, berbagai upaya dilakukan untuk memastikan anak-anak tetap mendapatkan hak pendidikan mereka.'),
(22, 4, 'Sekolah-sekolah darurat didirikan di posko pengungsian untuk memberikan tempat belajar yang aman bagi anak-anak. Guru-guru relawan datang dari berbagai daerah untuk membantu proses belajar mengajar.'),
(23, 4, 'Meskipun fasilitas yang tersedia sangat terbatas, semangat anak-anak untuk belajar tidak pernah surut. Mereka belajar di tenda-tenda darurat dengan peralatan seadanya.'),
(24, 4, 'Pemerintah dan berbagai organisasi nirlaba bekerja sama untuk menyediakan buku, alat tulis, dan bahan belajar lainnya. Bantuan ini sangat berarti bagi anak-anak yang kehilangan semua perlengkapan sekolah mereka akibat bencana.'),
(25, 4, 'Di samping pelajaran akademik, anak-anak juga diajak mengikuti berbagai kegiatan kreatif dan olahraga untuk menjaga kesehatan fisik dan mental mereka.'),
(26, 4, 'Dengan dukungan penuh dari berbagai pihak, diharapkan anak-anak ini tidak hanya bisa terus belajar, tetapi juga mengembangkan keterampilan dan semangat juang mereka di tengah situasi sulit.'),
(27, 5, 'Erupsi Gunung Ruang telah membawa banyak cerita sedih dan kehilangan. Namun, di balik itu semua, ada banyak kisah inspiratif tentang kebangkitan dan semangat juang warga yang terdampak.'),
(28, 5, 'Salah satunya adalah cerita tentang Ibu Siti, seorang petani yang kehilangan semua lahan pertaniannya akibat erupsi. Meski awalnya terpuruk, ia bangkit kembali dengan memanfaatkan bantuan bibit dan pelatihan dari pemerintah.'),
(29, 5, 'Ibu Siti tidak hanya berhasil memulihkan lahannya, tetapi juga membantu tetangganya untuk melakukan hal yang sama. Kini, ia menjadi contoh inspiratif bagi banyak orang di desanya.'),
(30, 5, 'Kisah lainnya adalah tentang Pak Budi, seorang guru yang mengorganisir sekolah darurat di pengungsian. Dengan dedikasinya, ia memastikan anak-anak tetap mendapatkan pendidikan meski dalam kondisi sulit.'),
(31, 5, 'Pak Budi mengajak guru-guru relawan dan masyarakat setempat untuk bahu-membahu memberikan pendidikan yang layak bagi anak-anak di pengungsian.'),
(32, 5, 'Cerita-cerita seperti ini menunjukkan bahwa meski menghadapi bencana alam yang hebat, semangat dan solidaritas antarwarga dapat membantu mereka bangkit kembali dan membangun masa depan yang lebih baik.');

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

-- --------------------------------------------------------

--
-- Struktur dari tabel `subheadings`
--

CREATE TABLE `subheadings` (
  `id` int(11) NOT NULL,
  `berita_id` int(11) DEFAULT NULL,
  `subheading` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `subheadings`
--

INSERT INTO `subheadings` (`id`, `berita_id`, `subheading`) VALUES
(1, 1, 'Mengklasifikasi Pakaian'),
(2, 1, 'Cuci dengan Benar'),
(3, 1, 'Perbaiki Kerusakan Kecil'),
(4, 1, 'Simpan dengan Baik'),
(5, 1, 'Prioritaskan Kebutuhan Lokal'),
(6, 1, 'Donasikan dengan Kasih'),
(7, 2, 'Desa yang Terabaikan'),
(8, 2, 'Warga Mengungsi'),
(9, 2, 'Upaya Penyelamatan'),
(10, 2, 'Posko Bantuan'),
(11, 2, 'Kondisi Memprihatinkan'),
(12, 2, 'Solidaritas Diperlukan'),
(13, 3, 'Program Pemulihan Ekonomi'),
(14, 3, 'Kondisi Sektor Pertanian'),
(15, 3, 'Bantuan untuk Petani'),
(16, 3, 'Revitalisasi Sektor Pariwisata'),
(17, 3, 'Promosi dan Festival Lokal'),
(18, 3, 'Harapan Masa Depan'),
(19, 4, 'Sekolah Darurat'),
(20, 4, 'Guru Relawan'),
(21, 4, 'Semangat Belajar'),
(22, 4, 'Bantuan Perlengkapan'),
(23, 4, 'Kegiatan Kreatif dan Olahraga'),
(24, 4, 'Dukungan Penuh'),
(25, 5, 'Cerita Ibu Siti'),
(26, 5, 'Bangkit dari Kehilangan'),
(27, 5, 'Bantuan dan Pelatihan'),
(28, 5, 'Inspirasi bagi Warga'),
(29, 5, 'Cerita Pak Budi'),
(30, 5, 'Semangat dan Solidaritas');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `berita`
--
ALTER TABLE `berita`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `content`
--
ALTER TABLE `content`
  ADD KEY `berita_id` (`berita_id`);

--
-- Indeks untuk tabel `donasi`
--
ALTER TABLE `donasi`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `formulir_mitra`
--
ALTER TABLE `formulir_mitra`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nowa` (`nowa`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indeks untuk tabel `paragraphs`
--
ALTER TABLE `paragraphs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `berita_id` (`berita_id`);

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
-- Indeks untuk tabel `subheadings`
--
ALTER TABLE `subheadings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `berita_id` (`berita_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `formulir_mitra`
--
ALTER TABLE `formulir_mitra`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `paragraphs`
--
ALTER TABLE `paragraphs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT untuk tabel `pilar`
--
ALTER TABLE `pilar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `subheadings`
--
ALTER TABLE `subheadings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `content`
--
ALTER TABLE `content`
  ADD CONSTRAINT `content_ibfk_1` FOREIGN KEY (`berita_id`) REFERENCES `berita` (`id`);

--
-- Ketidakleluasaan untuk tabel `paragraphs`
--
ALTER TABLE `paragraphs`
  ADD CONSTRAINT `paragraphs_ibfk_1` FOREIGN KEY (`berita_id`) REFERENCES `berita` (`id`);

--
-- Ketidakleluasaan untuk tabel `subheadings`
--
ALTER TABLE `subheadings`
  ADD CONSTRAINT `subheadings_ibfk_1` FOREIGN KEY (`berita_id`) REFERENCES `berita` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
