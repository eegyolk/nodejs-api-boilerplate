/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  const client = knex.context.client.config.client;

  return knex.schema.createTable('users', function (table) {
    table.increments('id').primary();
    table.string('name', 250).notNullable().defaultTo('');
    table
      .string('email', 250)
      .unique({ indexName: 'user_uniq_email' })
      .notNullable()
      .defaultTo('');
    table.string('password', 250).notNullable().defaultTo('');
    table.string('remember_token', 100).defaultTo('');
    table.string('verification_token', 32).defaultTo('');
    table.string('recovery_token', 32).defaultTo('');
    table.string('locale', 5).defaultTo('en');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.timestamp('deleted_at').nullable();

    if (client === 'mysql') {
      table.engine('InnoDB');
      table.charset('utf8mb4');
      table.collate('utf8mb4_general_ci');
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
