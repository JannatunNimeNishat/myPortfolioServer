import { Router } from "express";
import { HeroRoutes } from "../modules/hero/hero.routes";
import { AboutRoutes } from "../modules/about/about.routes";
import { SkillRoutes } from "../modules/skill/skill.routes";
import { ProjectRoutes } from "../modules/project/project.routers";
import { EducationRoutes } from "../modules/education/education.routes";
import { AuthRoutes } from "../modules/auth/auth.routes";
import { ExperienceRoutes } from "../modules/experience/experience.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/hero",
    route: HeroRoutes,
  },
  {
    path: "/about",
    route: AboutRoutes,
  },
  {
    path: "/skill",
    route: SkillRoutes,
  },
  {
    path: "/project",
    route: ProjectRoutes,
  },
  {
    path: "/education",
    route: EducationRoutes,
  },
  {
    path: "/experience",
    route: ExperienceRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
