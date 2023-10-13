import { Router } from "express";
import ListView from "../views/list";
import { EventTable } from "../models/event.model";
import { isValidId } from "../services/validation";
import knex from "../services/db";

const router = Router();
export default router;

router.get("/", async (_, res) => {
  // Don't need pagination for this test
  const events = await EventTable().select("*");

  return res.send(ListView(events, 1, 20, events.length));
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  if (!isValidId(id)) return res.status(400).send("Invalid ID");

  const [event] = await EventTable().select("*").where({ id }).limit(1)

  if (!event) return res.status(404).send("Not Found");

  return res.send(event);
});
