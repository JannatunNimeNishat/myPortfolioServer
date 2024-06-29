import { Router } from "express";
import { HeroRoutes } from "../modules/hero/hero.routes";
import { AboutRoutes } from "../modules/about/about.routes";
import { SkillRoutes } from "../modules/skill/skill.routes";
import { ProjectRoutes } from "../modules/project/project.routers";

const router = Router();

const moduleRoutes = [
    {
        path:'/hero',
        route:HeroRoutes
    },
    {
        path:'/about',
        route:AboutRoutes
    },
    {
        path:'/skill',
        route:SkillRoutes
    },
    {
        path:'/project',
        route:ProjectRoutes
    },
]

moduleRoutes.forEach((route)=> router.use(route.path,route.route));


export default router