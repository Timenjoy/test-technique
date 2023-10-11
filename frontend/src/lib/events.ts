import z from "zod";
import environment from "./environment";

export async function listEvents() {
  const response = await fetch(environment.VITE_APP_API_URL + "/api/events");

  if (!response.ok) throw new Error(await response.text());

  const body = await response.json();

  return listResponseSchema.parse(body);
}

export async function getEventById(id: string) {
  z.string().uuid().parse(id);

  const response = await fetch(environment.VITE_APP_API_URL + "/api/events/" + id);

  if (!response.ok) throw new Error(await response.text());

  const body = await response.json();

  return eventSchema.parse(body);
}

const eventSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
  start: z.coerce.date(),
  end: z.coerce.date(),
  image: z
    .string()
    .refine((url) => new URL(environment.VITE_APP_API_URL + url)),
  category: z.string(),
});

export interface IEvent extends z.infer<typeof eventSchema> {}

const listResponseSchema = z.object({
  data: z.array(eventSchema),
  meta: z.object({
    page: z.number(),
    perPage: z.number(),
    maxPage: z.number(),
    totalCount: z.number(),
  }),
});
