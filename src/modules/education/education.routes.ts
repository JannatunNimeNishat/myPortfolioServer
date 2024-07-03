import { Router } from "express";
import { EducationController } from "./education.controller";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../../constants";

const router = Router();

router.post("/", auth(USER_ROLE.admin), EducationController.createEducation);
router.get("/",  EducationController.getEducation);
router.put("/:id", auth(USER_ROLE.admin), EducationController.editEducation);
router.delete("/:id", auth(USER_ROLE.admin), EducationController.deleteEducation);

export const EducationRoutes = router;
