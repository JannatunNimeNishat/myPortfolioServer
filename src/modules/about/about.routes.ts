import { Router } from "express";
import { AboutController } from "./about.controller";

const router = Router();

router.post("/", AboutController.createAbout);
router.get('/', AboutController.getAbout);
router.put('/:id',AboutController.editAbout)
export const AboutRoutes = router;
