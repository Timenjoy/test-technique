import { Router } from "express";
import ListView from "../views/list";

const router = Router();
export default router;

router.get("/", (_, res) => {
  return res.send(ListView(categories, 1, 20, categories.length));
});

// For simplicity, categories are hard-coded
export const categories = [
  "concert",
  "festival",
  "theater",
  "sport",
  "museum",
  "conference",
  "spectacle"
] as const;
