import { Router } from "express";
import { AboutController } from "./about.controller";

const router = Router();

router.post("/", AboutController.createAbout);

export const AboutRoutes = router;
