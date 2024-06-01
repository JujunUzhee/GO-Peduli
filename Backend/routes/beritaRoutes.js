import express from "express";
import { getBerita } from "../controller/beritaController.js";
const router = express.Router();

router.get("/berita", getBerita);

export default router;
