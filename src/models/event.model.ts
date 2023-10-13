import z from "zod";
import knex from "../services/db";
import { categories } from "../controllers/categories.controller";
import { validDate } from "../services/validation";

export const EventTable = () => knex<Event>("events");

export const eventSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
  start: validDate,
  end: validDate,
  image: z.string().startsWith("/assets"),
  category: z.enum(categories),
  created_at: z.string(),
  updated_at: z.string(),
});

export interface Event extends z.infer<typeof eventSchema> {}

export const createEventSchema = eventSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
});

export interface CreateEventInput extends z.input<typeof createEventSchema> {}

export async function createEvent(event: CreateEventInput) {
  const data = createEventSchema.parse(event);
  return EventTable().insert(data).returning("*");
}

export async function updateEvent(id: string, event: Partial<Event>) {
  const data = eventSchema.parse(event);
  return EventTable().where({ id }).update(data).returning("*");
}
