module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "karel.hb@email.cz",
        defaultReplyTo: "karel.hb@email.cz",
      },
    },
  },
});
