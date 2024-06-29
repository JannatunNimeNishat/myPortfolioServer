import { Router } from "express";
import { SkillController } from "./skill.controller";

const router = Router();

router.post("/", SkillController.createSkill);

export const SkillRoutes = router;
