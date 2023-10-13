import { z } from "zod";
import { config } from "dotenv";
import { isValidDirectory } from "./validation";

config();

export const environmentSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test", "local"])
    .default("local"),
  PORT: z.coerce.number().int().positive().default(5000),
  DATABASE_FILE: z
    .string()
    .refine(isValidDirectory)
    .default("../database/db.sqlite3"),
});

export const environment = environmentSchema.parse(process.env);

declare global {
  interface ImportMetaEnv extends z.infer<typeof environmentSchema> {}
}

export default environment;


