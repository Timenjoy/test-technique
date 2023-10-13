import type { Knex } from "knex";

export async function up(knex: Knex) {
  return knex.transaction(async (trx) => {
    if (!(await trx.schema.hasTable("events")))
      return trx.schema.createTable("events", (builder) => {
        builder.text("id").notNullable().primary().defaultTo(knex.fn.uuid());
        builder.timestamps(true, true);
        builder.text("title").notNullable();
        builder.text("description").notNullable();
        builder.datetime("start").notNullable();
        builder.datetime("end").notNullable();
        builder.text("image").notNullable();
        builder.text("category").notNullable();
      });
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTableIfExists("events");
}
