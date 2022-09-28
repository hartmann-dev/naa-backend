"use strict";
const utils = require("@strapi/utils");

const slugify = require("slugify");

module.exports = {
  beforeCreate: async (event) => {
    const { data } = event.params;

    const locale = data.locale ? data.locale : "de";
    var rand = Math.floor(1000 + Math.random() * 9000);

    if (data.title && data.type) {
      event.params.data.slug = slugify(
        `${locale} ${data.type} ${data.title} ${rand} `,
        {
          lower: true,
          locals: "de",
        }
      );
    }
  },
  beforeUpdate: async (event) => {
    const { data } = event.params;

    if (!data.slug) {
      const locale = data.locale ? data.locale : "de";
      var rand = Math.floor(1000 + Math.random() * 9000);

      if (locale && data.title && data.type) {
        event.params.data.slug = slugify(
          `${locale} ${data.type} ${data.title} ${rand}`,
          {
            lower: true,
            locals: "de",
          }
        );
      }
    }
  },
  afterCreate: async (event) => {
    const { result } = event;
    const { isDraft } = utils.contentTypes;
    const isDraftState = isDraft(
      result,
      strapi.getModel("api::article.article")
    );
    if (result.pushNotification == true && !isDraftState)
      strapi.service("api::article.article").notify(result);
  },
  afterUpdate: async (event) => {
    const { result } = event;
    const { isDraft } = utils.contentTypes;
    const isDraftState = isDraft(
      result,
      strapi.getModel("api::article.article")
    );
    if (result.pushNotification == true && !isDraftState)
      strapi.service("api::article.article").notify(result);
  },
};
