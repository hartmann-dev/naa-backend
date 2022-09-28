"use strict";

/**
 * appointment service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::appointment.appointment",
  ({ strapi }) => ({
    async send(data, attachments) {
      var test = "Anfrage: \n\n";
      test += data.name ? `Name:\t\t${data.name}\n` : "";
      test += data.birthday ? `Geburtstag:\t${data.birthday}\n` : "";
      test += data.street ? `Straße:\t\t${data.street}\n` : "";
      test += data.city ? `Stadt:\t\t${data.city}\n` : "";
      test += data.phone ? `Telefon:\t${data.phone}\n` : "";
      test += data.email ? `E-Mail:\t\t${data.email}\n` : "";
      test += data.bodypart ? `Körperstelle:\t${data.bodypart}\n` : "";
      test += data.comment ? `Anmerkung:\n${data.comment}\n` : "";

      strapi.plugins["email"].services.email.send({
        //to: "terminvergabe.noarts@gmail.com",
        to: "harald@hartmann-dev.net",
        bcc: "na-appoint@hartmann-dev.net",
        subject: "[App] Terminanfrage",
        text: test,
        attachments,
      });
    },
  })
);
