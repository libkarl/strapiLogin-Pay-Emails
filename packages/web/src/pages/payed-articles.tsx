import React from "react";
import { Box } from "reflexbox";
import getConfig from "next/config";
import v4 from "uuid";

const PayedArticles = ({ articles, authData }) => {
  console.log(articles.data);

  return (
    <Box variant="container">
      {/* <h6>{authData.jwt.slice(-40)}</h6>
      <h6>{authData.user.username}</h6>
      <h6>{authData.user.email}</h6>
      {articles.data.map((article) => {
        return <h6 key={"a"}>{article.attributes.title}</h6>;
      })} */}
    </Box>
  );
};

const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps() {
  const loginINFO = {
    identifier: "karel.hb@email.cz",
    password: "test1234",
  };
  const login = await fetch("http://localhost:1337/api/auth/local", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(loginINFO),
  });

  const loginResponse = await login.json();

  const res = await fetch(`http://localhost:1337/api/payed-articles`, {
    headers: {
      Authorization: `Bearer ${loginResponse.jwt}`,
    },
  });
  const articles = await res.json();
  return {
    props: {
      articles: articles,
      authData: loginResponse,
    },
  };
}

export default PayedArticles;
