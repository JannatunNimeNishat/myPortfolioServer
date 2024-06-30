import { Router } from "express";
import { SkillController } from "./skill.controller";
import { USER_ROLE } from "../../constants";
import auth from "../../middleware/auth";

const router = Router();

router.post("/", auth(USER_ROLE.admin), SkillController.createSkill);
router.get("/", auth(USER_ROLE.admin), SkillController.getSkill);
router.put("/:id", auth(USER_ROLE.admin), SkillController.editSkill);
export const SkillRoutes = router;
