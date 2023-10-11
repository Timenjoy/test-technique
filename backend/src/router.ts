import { Router } from "express";
import CategoriesController from "./controllers/categories.controller";
import HealthController from "./controllers/health.controller";
import EventsController from "./controllers/events.controller";

const router = Router();

router.use("/categories", CategoriesController);
router.use("/health", HealthController)
router.use("/events", EventsController)

export default router;
