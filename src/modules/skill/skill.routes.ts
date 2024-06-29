import { Router } from "express";
import { SkillController } from "./skill.controller";

const router = Router();

router.post("/", SkillController.createSkill);
router.get("/", SkillController.getSkill);
router.put("/:id", SkillController.editSkill);
export const SkillRoutes = router;
