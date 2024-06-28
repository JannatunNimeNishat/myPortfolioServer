import { Router } from "express";
import { HeroRoutes } from "../modules/hero/hero.routes";

const router = Router();

const moduleRoutes = [
    {
        path:'hero',
        route:HeroRoutes
    }
]

moduleRoutes.forEach((route)=> router.use(route.path,route.route));


export default router