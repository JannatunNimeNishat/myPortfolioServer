import { Router } from "express";
import { HeroController } from "./hero.controller";

const route = Router();

route.post("/", HeroController.createHero);
route.get("/", HeroController.getHero);
route.put("/:id", HeroController.editHero);

export const HeroRoutes = route;
