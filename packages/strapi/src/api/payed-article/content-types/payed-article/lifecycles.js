module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: "fitxlifestyle@gmail.com",
        from: "karel.hb@email.cz",
        subject: "You have new payer article on blog",
        template_id: "d-d9f6c1601b9c4c1ba8ef268d525ba7fd",
        dynamic_template_data: {
          Username: `${result.title}`,
          Verifylink: "www.facebook.com/karel.kopriva.56/",
        },
      });
    } catch (err) {
      console.log(err);
    }
  },
};

// lifecycle metoda která při každém vytvoření nového článu pošle email.
