module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "no-reply@noarts.de",
        defaultReplyTo: "no-reply@noarts.de",
        testAddress: "no-reply@noarts.de",
      },
    },
  },
  // ...
});
