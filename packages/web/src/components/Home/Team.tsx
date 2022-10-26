import styled from "@emotion/styled";
import { HorizontalRule } from "@mui/icons-material";
import { Card, CardMedia, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import theme from "styles/theme";
import developer1 from "assets/team1.jpg";
import developer2 from "assets/team2.jpg";

const TeamMemberBox = styled(Box)({
  textAlign: "center",
  marginTop: "1.5rem",
  height: "8%",
});

const CompanyIntro = () => {
  return (
    <Box sx={{ height: { xs: "120vh", sm: "60vh" } }}>
      <TeamMemberBox marginBottom={{ xs: "-3rem", sm: "0rem" }}>
        <Typography
          variant={"subtitle2"}
          sx={{
            color: theme.palette.primary.main,
            fontSize: { xs: "0.5rem", lg: "0.6rem" },
            marginBottom: "-0.6rem",
          }}
        >
          CREATIVE INC.
        </Typography>
        <Typography variant={"h6"} textAlign="center">
          Team members
        </Typography>
        <Box justifyContent="center" mt={-1}>
          <HorizontalRule sx={{ color: theme.palette.primary.main }} />
        </Box>
      </TeamMemberBox>

      <Stack
        p={4}
        width={{ xs: "95%", sm: "60%" }}
        minWidth="250px"
        margin="auto"
        height="92%"
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 4, sm: 8 }}
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          height="100%"
          width="60%"
          sx={{ maxWidth: 520, minWidth: 200 }}
          direction="column"
          spacing={2}
          margin="auto"
          alignItems="center"
        >
          <Box height="50%" width="100%" bgcolor="green">
            <CardMedia
              component="img"
              height="100%"
              image={developer1.src}
              alt="developer"
            />
          </Box>
          <Box height="50%">
            <Stack direction="column" spacing={2} justifyContent="left">
              <Typography
                variant={"h6"}
                sx={{
                  color: theme.palette.primary.main,
                  fontSize: { xs: "1rem", lg: "1.5rem" },
                }}
              >
                CREATIVE DESIGN
              </Typography>
              <Typography variant={"h6"}>UX/UI Design</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Integer malesuada. Sed elit dui, pellentesque a, faucibus vel,
                interdum nec, diam. Sed elit dui, pellentesque a, faucibus vel,
                interdum nec, diam.
              </Typography>
            </Stack>
          </Box>
        </Stack>

        <Stack
          height="100%"
          width="60%"
          sx={{ maxWidth: 520, minWidth: 200 }}
          direction="column"
          spacing={2}
          margin="auto"
          alignItems="center"
        >
          <Box height="50%">
            <Stack direction="column" spacing={2} justifyContent="left">
              <Typography
                variant={"h6"}
                sx={{
                  color: theme.palette.primary.main,
                  fontSize: { xs: "1rem", lg: "1.5rem" },
                }}
              >
                CREATIVE DESIGN
              </Typography>
              <Typography variant={"h6"}>Frontend Enginer</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Integer malesuada. Sed elit dui, pellentesque a, faucibus vel,
                interdum nec, diam. Sed elit dui, pellentesque a, faucibus vel,
                interdum nec, diam.
              </Typography>
            </Stack>
          </Box>
          <Box height="50%" bgcolor="blue">
            <CardMedia
              component="img"
              height="100%"
              image={developer2.src}
              alt="developer"
            />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CompanyIntro;
