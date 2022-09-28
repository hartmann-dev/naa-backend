"use strict";
const utils = require("@strapi/utils");

const getImageType = function (base64Str) {
  const firstChar = base64Str.charAt(0);
  let type = "";
  switch (firstChar) {
    case "/":
      type = "image/jpg";
      break;
    case "i":
      type = "image/png";
      break;
    case "R":
      type = "image/gif";
      break;
    case "U":
      type = "image/webp";
      break;
  }

  return type;
};

module.exports = {
  afterCreate: async (event) => {
    const { result } = event;
    console.log("appointment");
    let attachments = [];
    if (result.image1_base64?.length > 0) {
      attachments.push({
        filename: "image_1.jpg",
        type: getImageType(data.image1_base64),
        content: data.image1_base64,
      });
    }
    if (result.image2_base64?.length > 0) {
      attachments.push({
        filename: "image_2.jpg",
        type: getImageType(data.image2_base64),
        content: data.image2_base64,
      });
    }
    if (result.image3_base64?.length > 0) {
      attachments.push({
        filename: "image_3.jpg",
        type: getImageType(data.image3_base64),
        content: data.image3_base64,
      });
    }
    if (result.image4_base64?.length > 0) {
      attachments.push({
        filename: "image_4.jpg",
        type: getImageType(data.image4_base64),
        content: data.image4_base64,
      });
    }

    strapi.service("api::appointment.appointment").send(result, attachments);
  },
};
