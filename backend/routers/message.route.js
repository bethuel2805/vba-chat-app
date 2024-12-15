import { Router } from "express"
import { sendMessage,getMessages } from "../controllers/message.controllers.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = Router()

router.get("/:id", protectRoute, getMessages)
router.post("/send/:id", protectRoute, sendMessage)

export default router;