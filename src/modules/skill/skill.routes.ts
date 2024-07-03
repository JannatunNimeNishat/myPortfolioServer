import { Router } from "express";
import { SkillController } from "./skill.controller";
import { USER_ROLE } from "../../constants";
import auth from "../../middleware/auth";

const router = Router();

router.post("/", auth(USER_ROLE.admin), SkillController.createSkill);
router.get("/",  SkillController.getSkill);
router.put("/:id", auth(USER_ROLE.admin), SkillController.editSkill);
router.delete("/:id", auth(USER_ROLE.admin), SkillController.deleteSkill);


export const SkillRoutes = router;
