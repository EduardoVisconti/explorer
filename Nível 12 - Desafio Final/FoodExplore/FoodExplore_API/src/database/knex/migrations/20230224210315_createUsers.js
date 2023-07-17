
exports.up = knex => knex.schema.createTable("users", table => {
    table.increments("id");
    table.boolean("is_admin");
    table.text("name");
    table.text("email");
    table.text("password");

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
});


exports.down = knex => knex.schema.dropTable("users");
