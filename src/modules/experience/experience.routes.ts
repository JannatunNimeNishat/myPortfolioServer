import { Router } from "express";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../../constants";

const router = Router();
router.post('/',auth(USER_ROLE.admin))


export const ExperienceRoutes = router;