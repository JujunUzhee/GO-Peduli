import express from "express";
import { getDonasi, getDonasiById } from "../controller/donasiController.js";
const router = express.Router();

router.get("/donasiku", getDonasi);
router.get("/donasiku/:id", getDonasiById);
export default router;
