import express from "express";
import routeDonasi from "./donasiRoutes.js";
import routeHome from "./homeRoutes.js";
import routeBerita from "./beritaRoutes.js";
import routedaftarMitra from "./daftarMitraRoutes.js"
import routePilar from "./pilarRoutes.js"
import routeFaq from "./faqRoutes.js"
import routeFormulirDonasi from "./formulirDonasiRoutes.js"


const router = express.Router();
router.use(routeDonasi);
router.use(routeHome);
router.use(routeBerita);
router.use(routedaftarMitra);
router.use(routePilar)
router.use(routeFaq)
router.use(routeFormulirDonasi)

export default router;
