'use strict';

/**
 * push-token router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::push-token.push-token');
