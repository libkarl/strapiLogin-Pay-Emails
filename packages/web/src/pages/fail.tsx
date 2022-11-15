import React from "react";
import Script from "next/script";

const fail = () => {
  return (
    <div>
      <Script
        type="text/javascript"
        src="http://localhost:1337/plugins/strapi-stripe/static/stripe.js"
      ></Script>
      <h1>Fail</h1>
    </div>
  );
};

export default fail;
