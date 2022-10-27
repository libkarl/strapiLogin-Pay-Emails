import styled from "@emotion/styled";
import { HorizontalRule } from "@mui/icons-material";
import { CardMedia, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import theme from "styles/theme";

const TeamMemberBox = styled(Box)({
  textAlign: "center",
  marginTop: "1.5rem",
  height: "8%",
});

// const StrapiImgae = (props) => {
//   return (
//     <>
//       <Image src={}></Image>
//     </>
//   );
// };

export type DeveloperIntroduction = {
  developer1: {
    dev_type: string;
    dev_image: string;
    dev_intoduction: string;
  };
  developer2: {
    dev_type: string;
    dev_image: string;
    dev_intoduction: string;
  };
};

const CompanyIntro = (props: DeveloperIntroduction) => {
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
        spacing={{ xs: 0, sm: 8 }}
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
              image={
                process.env.NEXT_PUBLIC_STRAPI_URL + props.developer2.dev_image
              }
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
              <Typography variant={"h6"}>
                {props.developer2.dev_type}
              </Typography>
              <Typography variant="body2">
                {props.developer2.dev_intoduction}
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
              <Typography variant={"h6"}>
                {props.developer1.dev_type}
              </Typography>
              <Typography variant="body2">
                {props.developer1.dev_intoduction}
              </Typography>
            </Stack>
          </Box>
          <Box height="50%" width="100%" bgcolor="green">
            <CardMedia
              component="img"
              height="100%"
              image={
                process.env.NEXT_PUBLIC_STRAPI_URL + props.developer1.dev_image
              }
              alt="developer"
            />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CompanyIntro;
