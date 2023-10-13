import { Knex } from "knex";
import knex from "../services/db";
import path from "node:path";
import { readdir } from "node:fs/promises";

export async function migrate() {
  console.log("Running migrating...");
  const migrations = (await readdir(__dirname)).filter(
    (file) => !/^migrate\.[jt]s$/.test(file)
  );

  migrations.sort();

  await knex.schema.hasTable("migrations").then(async (exists) => {
    if (!exists) {
      await knex.schema.createTable("migrations", (table) => {
        table.string("name").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
      });
    }
  });
  const migrationsRan = await knex("migrations").select("name");
  for (const migration of migrations) {
    if (migrationsRan.find((m) => m.name === migration)) {
      continue;
    }
    const { up }: MigrationFile = await import(path.join(__dirname, migration));
    await up(knex);
    await knex("migrations").insert({ name: migration });
  }
}

interface MigrationFile {
  up: (knex: Knex) => Promise<void>;
  down: (knex: Knex) => Promise<void>;
}
