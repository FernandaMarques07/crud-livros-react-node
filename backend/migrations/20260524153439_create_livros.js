exports.up = function(knex) {
    return knex.schema.createTable("livros", table => {

        table.increments("id").primary()

        table.string("titulo").notNullable()

        table.string("autor").notNullable()

        table.float("preco").notNullable()

        table.string("foto")

    })
}

exports.down = function(knex) {
    return knex.schema.dropTable("livros")
}