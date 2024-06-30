import { Router } from "express";
import { ProjectController } from "./project.controller";

const router = Router();

router.post("/", ProjectController.createProject);
router.get("/", ProjectController.getProject);
router.put("/:id", ProjectController.editProject);



export const ProjectRoutes = router;
