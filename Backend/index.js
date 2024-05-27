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

app.listen(process.env.PORT_DEV, () => {
    testConnection()
  console.log(`Server started on http://localhost:${process.env.PORT_DEV}`);
});
 