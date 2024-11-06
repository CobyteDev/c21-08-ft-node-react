import { Router } from "express";
import { PreferenceController } from "../controllers/preference.controller";

const router = Router();
const preferenceController = new PreferenceController();

router.post("/preference", (req, res, next) =>
  preferenceController.createPreference(req, res, next)
);

export default router;
