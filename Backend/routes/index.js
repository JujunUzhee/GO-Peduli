import express from "express";
import routeDonasi from "./donasiRoutes.js";
import routeHome from "./homeRoutes.js";
import routeBerita from "./beritaRoutes.js";
import routedaftarMitra from "./daftarMitraRoutes.js"
import routePilar from "./pilarRoutes.js"


const router = express.Router();
router.use(routeDonasi);
router.use(routeHome);
router.use(routeBerita);
router.use(routedaftarMitra);
router.use(routePilar)

export default router;
