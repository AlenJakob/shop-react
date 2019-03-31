'use strict';

/**
 * Shoes.js controller
 *
 * @description: A set of functions called "actions" for managing `Shoes`.
 */

module.exports = {

  /**
   * Retrieve shoes records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.shoes.search(ctx.query);
    } else {
      return strapi.services.shoes.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a shoes record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.shoes.fetch(ctx.params);
  },

  /**
   * Count shoes records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.shoes.count(ctx.query);
  },

  /**
   * Create a/an shoes record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.shoes.add(ctx.request.body);
  },

  /**
   * Update a/an shoes record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.shoes.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an shoes record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.shoes.remove(ctx.params);
  }
};
