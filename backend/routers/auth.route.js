import { Router } from "express"
import { login, logout, regsiter } from "../controllers/auth.controllers.js";

const router = Router()

router.post("/register",regsiter)

router.post("/login",login)

router.post("/logout",logout)

export default router;