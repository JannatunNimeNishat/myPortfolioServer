import { Router } from "express";
import { ProjectController } from "./project.controller";

const router = Router();

router.post("/", ProjectController.createProject);

export const ProjectRoutes = router;
