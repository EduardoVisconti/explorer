exports.up = knex => knex.schema.createTable("newOrder", table => {
    table.increments("id");
    table.integer("dish_id").references("id").inTable("dish");
    table.integer("user_id").references("id").inTable("users");

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("newOrder");