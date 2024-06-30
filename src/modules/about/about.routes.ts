import { Router } from "express";
import { AboutController } from "./about.controller";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../../constants";

const router = Router();

router.post("/", auth(USER_ROLE.admin), AboutController.createAbout);
router.get("/", auth(USER_ROLE.admin), AboutController.getAbout);
router.put("/:id", auth(USER_ROLE.admin), AboutController.editAbout);
export const AboutRoutes = router;
