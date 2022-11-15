import useStrapiRequest from "lib/useStrapiRequest";
import homeComponents from "components";
import { DeveloperIntroduction } from "components/Home/Team";
// import { Root } from "models/acrticle";
// import ThemeProvider from "components/ui/ThemeProvider";
import Navbar from "components/Home/Navbar";
import CompanyIntro from "components/Home/Team";
import { Box } from "@mui/material";
import Services from "components/Home/Services";
import Script from "next/script";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ActionAreaCard from "components/CardTitle";
import styled from "@emotion/styled";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Homepage = ({ articles }) => {
  return (
    <Box>
      <Script
        type="text/javascript"
        src="http://localhost:1337/plugins/strapi-stripe/static/stripe.js"
      ></Script>
      <Navbar />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {articles.data.map((article, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>
              <ActionAreaCard {...article.attributes} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export async function getServerSideProps() {
  // const loginINFO = {
  //   identifier: "karel.hb@email.cz",
  //   password: "test1234",
  // };
  // const login = await fetch("http://localhost:1337/api/auth/local", {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },

  //   body: JSON.stringify(loginINFO),
  // });

  // const loginResponse = await login.json();

  const res = await fetch(`http://localhost:1337/api/payed-articles`);
  const articles = await res.json();
  console.log(articles);
  return {
    props: {
      articles: articles,
      // authData: loginResponse,
    },
  };
}

export default Homepage;
