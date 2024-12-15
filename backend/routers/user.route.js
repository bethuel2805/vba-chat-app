import { Router } from "express"
import protectRoute from "../middlewares/protectRoute.js";
import { getAllUsers } from "../controllers/user.controllers.js";

const router = Router()

router.get("/", protectRoute, getAllUsers)

export default router;