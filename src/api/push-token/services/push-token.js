'use strict';

/**
 * push-token service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::push-token.push-token');
