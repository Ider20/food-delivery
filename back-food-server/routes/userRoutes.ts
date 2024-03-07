import { Router } from "express";
import { signUp } from "../controller/userController";

const router = Router();
router.route("/signup").post(signUp);

export default router;
