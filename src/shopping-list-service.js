'use strict';

const ShoppingListService = {
  getAllItems(knex) {
    return knex.select('*').from('shopping_list');
  },
  getById(knex, id) {
    return knex.from('shopping_list').select('*').where('id', id).first();
  },
};

module.exports = ShoppingListService;