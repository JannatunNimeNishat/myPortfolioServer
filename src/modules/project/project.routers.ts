import { Router } from "express";
import { ProjectController } from "./project.controller";
import { USER_ROLE } from "../../constants";
import auth from "../../middleware/auth";

const router = Router();

router.post("/", auth(USER_ROLE.admin), ProjectController.createProject);
router.get("/",  ProjectController.getProject);
router.get("/:id",  ProjectController.getSingleProject);
router.put("/:id", auth(USER_ROLE.admin), ProjectController.editProject);
router.delete("/:id", auth(USER_ROLE.admin), ProjectController.deleteProject);



export const ProjectRoutes = router;
