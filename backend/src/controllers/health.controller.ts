import { Router } from "express";
import knex from "../lib/db";

const router = Router();
export default router;

router.get("/", async (_, res) => {
  const query = await knex.raw("SELECT 1+1 as result")
  
  const healthCheck = {
    uptime: process.uptime(),
    database: query[0].result == 2,
    timestamp: Date.now(),
  };

  return res.send(healthCheck);
});
