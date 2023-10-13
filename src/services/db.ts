import Knex from "knex";
import env from "./environment";

const knex = Knex({
  client: "better-sqlite3",
  connection: {
    filename: env.DATABASE_FILE,
  },
  log: {
    enableColors: true,
  },
  useNullAsDefault: true,
});

export default knex;
