exports.up = function(knex) {
	return knex.schema.createTable('users', users => {
		users.increments();

		users.string('username', 25).notNullable().unique();
		users.string('password', 25).notNullable();
		users.string('department', 32).notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('users');
};
