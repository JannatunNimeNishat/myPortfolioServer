import { Router } from "express";
import { HeroController } from "./hero.controller";
import { USER_ROLE } from "../../constants";
import auth from "../../middleware/auth";

const route = Router();

route.post("/", auth(USER_ROLE.admin), HeroController.createHero);
route.get("/",  auth(USER_ROLE.admin),HeroController.getHero);
route.put("/:id", auth(USER_ROLE.admin), HeroController.editHero);
route.delete("/:id", auth(USER_ROLE.admin), HeroController.deleteHero);

export const HeroRoutes = route;
