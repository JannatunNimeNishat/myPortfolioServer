import { Router } from "express";
import { EducationController } from "./education.controller";

const router = Router();

router.post("/", EducationController.createEducation);
router.get("/", EducationController.getEducation);

export const EducationRoutes = router;
