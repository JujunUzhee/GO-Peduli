import express from "express";
import routeDonasi from "./donasiRoutes.js";
import routeHome from "./homeRoutes.js";
import routeBerita from "./beritaRoutes.js";

const router = express.Router();
router.use(routeDonasi);
router.use(routeHome);
router.use(routeBerita);

export default router;
