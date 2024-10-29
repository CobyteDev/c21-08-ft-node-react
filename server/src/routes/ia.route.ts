import { Router } from "express";
import { IaController } from "../controllers/ia.controller";

const router = Router();

const iaController = new IaController();

router.get("/krammy", (req, res) => iaController.recipe(req, res));

export default router;
