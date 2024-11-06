import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();
const userController = new UserController();

router.get("/", (req, res, next) => userController.getAllUsers(req, res, next));
router.get("/:userId", (req, res, next) => userController.getUserById(req, res, next));

export default router;
