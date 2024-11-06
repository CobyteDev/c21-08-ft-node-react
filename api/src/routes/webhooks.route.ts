import { Router } from "express";
import { WebHooksController } from "../controllers/webhooks.controller";

const router = Router();
const webHooksController = new WebHooksController();

router.post("/", (req, res, next) =>
  webHooksController.handleWebHook(req, res, next)
);

export default router;
