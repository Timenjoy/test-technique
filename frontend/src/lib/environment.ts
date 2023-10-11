import { z } from "zod";

export const environmentSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test", "local"])
    .default("local"),
  VITE_APP_API_URL: z.string().url(),
});

export const environment = environmentSchema.parse(import.meta.env);

declare global {
  interface ImportMetaEnv extends z.infer<typeof environmentSchema> {}
}

export default environment;
