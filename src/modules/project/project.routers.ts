import { Router } from "express";
import { ProjectController } from "./project.controller";
import { USER_ROLE } from "../../constants";
import auth from "../../middleware/auth";

const router = Router();

router.post("/", auth(USER_ROLE.admin), ProjectController.createProject);
router.get("/",  auth(USER_ROLE.admin),ProjectController.getProject);
router.put("/:id", auth(USER_ROLE.admin), ProjectController.editProject);



export const ProjectRoutes = router;
