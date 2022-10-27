import { Computer } from "@mui/icons-material";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Services = () => {
  return (
    <Box sx={{ height: { xs: "100vh", sm: "40vh" } }} margin="auto">
      <Grid
        width={{ xs: "95%", sm: "60%" }}
        height="100%"
        margin="auto"
        p={4}
        container
        direction="row"
        gap="10%"
        justifyContent="center"
        alignItems="center"
      >
        <Card
          sx={{
            minWidth: 275,
            height: "90%",
            paddingTop: 2,
            paddingBottom: 2,
          }}
        >
          <CardContent sx={{ textAlign: "center", height: "100%" }}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              Be developer babby
            </Typography>
            <Box sx={{ marginTop: "2rem" }}>
              <Computer sx={{ width: "6rem", height: "6rem" }} />
            </Box>
            <Typography sx={{ mb: 1.5, mt: "4rem" }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            minWidth: 275,
            height: "90%",
            paddingTop: 2,
            paddingBottom: 2,
          }}
        >
          <CardContent sx={{ textAlign: "center", height: "100%" }}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              Be developer babby
            </Typography>
            <Box sx={{ marginTop: "2rem" }}>
              <Computer sx={{ width: "6rem", height: "6rem" }} />
            </Box>
            <Typography sx={{ mb: 1.5, mt: "4rem" }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            minWidth: 275,
            height: "90%",
            paddingTop: 2,
            paddingBottom: 2,
          }}
        >
          <CardContent sx={{ textAlign: "center", height: "100%" }}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              Be developer babby
            </Typography>
            <Box sx={{ marginTop: "2rem" }}>
              <Computer sx={{ width: "6rem", height: "6rem" }} />
            </Box>
            <Typography sx={{ mb: 1.5, mt: "4rem" }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default Services;
