import { Router } from "express";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../../constants";
import { ExperienceController } from "./experience.controller";

const router = Router();
router.post("/", auth(USER_ROLE.admin), ExperienceController.createExperience);
router.get("/",  ExperienceController.getExperience);
router.put("/:id", auth(USER_ROLE.admin), ExperienceController.editExperience);
router.delete("/:id", auth(USER_ROLE.admin), ExperienceController.deleteExperience);

export const ExperienceRoutes = router;
