import z from "zod";
import knex from "../lib/db";
import { categories } from "../controllers/categories.controller";

export const EventTable = () => knex<Event>("events");

export const eventSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
  start: z.coerce.date(),
  end: z.coerce.date(),
  image: z.string().url(),
  category: z.enum(categories),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export interface Event extends z.infer<typeof eventSchema> {}
