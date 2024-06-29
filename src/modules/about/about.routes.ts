import { Router } from "express";
import { AboutController } from "./about.controller";

const router = Router();

router.post("/", AboutController.createAbout);
router.get('/', AboutController.getAbout)
export const AboutRoutes = router;
