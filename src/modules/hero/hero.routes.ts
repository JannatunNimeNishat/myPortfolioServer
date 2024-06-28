import { Router } from "express";
import { HeroController } from "./hero.controller";

const route = Router();

route.post('/',HeroController.createHero);


export const HeroRoutes = route;