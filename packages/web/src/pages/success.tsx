import React from "react";
import Script from "next/script";

const succes = () => {
  return (
    <div>
      <Script
        type="text/javascript"
        src="http://localhost:1337/plugins/strapi-stripe/static/stripe.js"
      ></Script>
      <h1>Succesfull payment</h1>
    </div>
  );
};

export default succes;
