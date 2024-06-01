import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { testConnection,query } from './database/db.js'


const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json("ok")
});

/**
 * Fungsi tambah mitra
 * @param {*} nama 
 * @param {*} nowa 
 * @param {*} email 
 * @param {*} lokasi 
 * @param {*} kategori_pakaian 
 * @param {*} pengantar 
 * @param {*} alamat 
 */
const daftarMitra = async (nama, nowa, email, lokasi, kategori_pakaian, pengantar, alamat) => {
  let sql = "INSERT INTO formulir_mitra(nama, nowa, email, lokasi, kategori_pakaian, pengantar, alamat) VALUES (?, ?, ?, ?, ?, ?, ?)"
  await query(sql, [nama, nowa, email, lokasi, kategori_pakaian, pengantar, alamat]);
}

app.post("/formulir-mitra", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const data = req.body
  console.log(data)
  await daftarMitra(data.nama, data.nowa, data.email, data.lokasi, data.kategori_pakaian, data.pengantar,
    data.alamat
  )

  // return status is created
  return res.status(201).json({
    "status": "success",
    "message": "Berhasil mendaftarkan mitra dengan nama alamat email: " + data.email,
  })
})

app.listen(process.env.PORT_DEV, () => {
    testConnection()
  console.log(`Server started on http://localhost:${process.env.PORT_DEV}`);
});
