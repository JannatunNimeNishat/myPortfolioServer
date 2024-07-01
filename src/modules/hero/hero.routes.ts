import { Router } from "express";
import { HeroController } from "./hero.controller";
import { USER_ROLE } from "../../constants";
import auth from "../../middleware/auth";

const router = Router();

router.post("/", auth(USER_ROLE.admin), HeroController.createHero);
router.get("/",  auth(USER_ROLE.admin),HeroController.getHero);
router.put("/:id", auth(USER_ROLE.admin), HeroController.editHero);
router.delete("/:id", auth(USER_ROLE.admin), HeroController.deleteHero);
router.put('/status/:id',auth(USER_ROLE.admin),HeroController.changeStatus);
export const HeroRoutes = router;
