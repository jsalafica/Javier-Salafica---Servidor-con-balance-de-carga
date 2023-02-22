import { Router } from "express";
import { randomController } from "../controllers/random.controller.js";
import { infoController } from "../controllers/info.controller.js";

const router = Router();

router.get("/api/randoms", randomController.getRandom);

router.get("/info", infoController.getInfo);

export default router;
