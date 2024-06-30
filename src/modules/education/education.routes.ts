import { Router } from "express";
import { EducationController } from "./education.controller";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../../constants";

const router = Router();

router.post("/", auth(USER_ROLE.admin), EducationController.createEducation);
router.get("/", auth(USER_ROLE.admin), EducationController.getEducation);

export const EducationRoutes = router;
